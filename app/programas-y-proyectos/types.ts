// tipos para secciones

type SectionType = 'text' | 'list' | 'highlight' | 'video';

type SectionBase = {
  title: string;
  content: string;
  type: SectionType;
};

type TextSection = SectionBase & {
  type: 'text' | 'list' | 'highlight';
  items?: string[];
};

type VideoSection = SectionBase & {
  type: 'video';
  videoUrl: string;
};

export type Section = TextSection | VideoSection;

// Nueva interfaz para la configuración del banner
export interface BannerConfig {
  leftImage: string;
  rightImage: string;
  mainText: string;
  subText?: string;
  statNumber: string;
  statLabel: string;
  backgroundColor?: string; // Si no se especifica, usará data.color
  position: 'after-hero' | 'after-video' | 'before-sections' | 'after-section-0' | 'after-section-1' | 'after-section-2' | 'before-stats' | 'before-cta';
}

export interface BaseData {
  slug: string;
  title: string;
  shortDescription: string;
  color: string;
  icon: string;
  fullContent: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    sections: Section[];
    stats?: {
      number: string;
      description: string;
    };
    cta: {
      text: string;
      link: string;
    };
    banner?: BannerConfig;
  };
}

export interface ProgramaData extends BaseData {
  category: string;
  beneficiarios: string;
}

export interface ProyectoData extends BaseData {
  partner: string;
  duration: string;
}
