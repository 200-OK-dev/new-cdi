#!/usr/bin/env node

const https = require('https');
const fs = require('fs').promises;
const path = require('path');
const { pipeline } = require('stream/promises');

const API_URL = 'https://cmsexpress.onrender.com';

// Transform CMS news to static format
function transformCMSNews(cmsNews) {
  return {
    id: cmsNews.id,
    slug: cmsNews.slug,
    title: cmsNews.titulo,
    summary: cmsNews.resumen,
    content: cmsNews.contenido,
    image: `/noticias/${cmsNews.slug}.webp`, // Local image path
    category: cmsNews.categoria,
    categoryColor: getCategoryColor(cmsNews.categoria),
    date: cmsNews.fechaCreacion.split('T')[0],
    author: cmsNews.autor,
    readTime: calculateReadTime(cmsNews.contenido),
    tags: cmsNews.tags,
    relatedNews: [],
  };
}

function getCategoryColor(category) {
  const colors = {
    'Emprendimiento': 'bg-cyan-500',
    'Financiamiento': 'bg-green-500',
    'Educación': 'bg-blue-500',
    'Tecnología': 'bg-purple-500',
    'Comunidad': 'bg-orange-500',
  };
  return colors[category] || 'bg-gray-500';
}

function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content.split(' ').length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min`;
}

// Fetch data from API
async function fetchFromAPI(endpoint) {
  return new Promise((resolve, reject) => {
    https.get(`${API_URL}${endpoint}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', reject);
  });
}

// Download image from URL
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, async (response) => {
      try {
        const fileStream = require('fs').createWriteStream(filepath);
        await pipeline(response, fileStream);
        console.log(`✅ Downloaded: ${path.basename(filepath)}`);
        resolve();
      } catch (error) {
        reject(error);
      }
    }).on('error', reject);
  });
}

// Main update function
async function updateNews() {
  try {
    console.log('🚀 Starting news update...');
    
    // 1. Fetch news from CMS
    console.log('📡 Fetching news from CMS...');
    const cmsNews = await fetchFromAPI('/api/news');
    console.log(`📰 Found ${cmsNews.length} news articles`);
    
    // 2. Create public/noticias directory if not exists
    const noticiasDir = path.join(__dirname, '..', 'public', 'noticias');
    await fs.mkdir(noticiasDir, { recursive: true });
    
    // 3. Download images and transform news
    const transformedNews = [];
    for (const news of cmsNews) {
      console.log(`🖼️ Processing: ${news.titulo}`);
      
      // Download image if it's from Cloudinary
      if (news.imagen && news.imagen.includes('cloudinary')) {
        const imageExtension = '.webp'; // Assume webp format
        const imagePath = path.join(noticiasDir, `${news.slug}${imageExtension}`);
        
        try {
          await downloadImage(news.imagen, imagePath);
        } catch (error) {
          console.warn(`⚠️ Could not download image for ${news.slug}: ${error.message}`);
          // Keep original Cloudinary URL as fallback
        }
      }
      
      // Transform news
      const transformed = transformCMSNews(news);
      transformedNews.push(transformed);
    }
    
    // 4. Read current static news
    const newsFilePath = path.join(__dirname, '..', 'app', 'noticias-y-actualidad', 'news.ts');
    const currentContent = await fs.readFile(newsFilePath, 'utf8');
    
    // Extract static news data (everything between newsData = [ and ])
    const staticNewsMatch = currentContent.match(/export const newsData: NewsItem\[\] = (\[[\s\S]*?\])/);
    if (!staticNewsMatch) {
      throw new Error('Could not find static news data in news.ts');
    }
    
    // 5. Read and preserve static news data
    let staticNewsData = [];
    try {
      // Extract only the original static news (not CMS-generated ones)
      const tempStaticNews = eval(staticNewsMatch[1]);
      staticNewsData = tempStaticNews.filter(news => !news.id.toString().startsWith('cms-'));
    } catch (error) {
      console.warn('Could not parse existing static news, keeping empty array');
    }
    
    // 6. Combine CMS news + preserved static news
    const allNews = [...transformedNews, ...staticNewsData];
    
    // 7. Generate new file content with proper formatting
    const newsArrayString = JSON.stringify(allNews, null, 2)
      .replace(/"/g, '"')
      .replace(/\\\\/g, '\\');
    
    const newContent = currentContent.replace(
      /export const newsData: NewsItem\[\] = \[[\s\S]*?\]/,
      `export const newsData: NewsItem[] = ${newsArrayString}`
    );
    
    // 7. Write updated file
    await fs.writeFile(newsFilePath, newContent, 'utf8');
    
    console.log('✅ News update completed successfully!');
    console.log(`📊 Total news: ${allNews.length} (${transformedNews.length} dynamic + ${staticNewsData.length} static)`);
    
  } catch (error) {
    console.error('❌ Error updating news:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  updateNews();
}

module.exports = { updateNews };