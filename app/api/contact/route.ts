import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { contactName, position, email, organization, subject, message } = body;

    // Validación básica
    if (!contactName || !email || !organization || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos requeridos deben estar completos' },
        { status: 400 }
      );
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email no válido' },
        { status: 400 }
      );
    }

    // Template del email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Nueva solicitud de colaboración - CDI Chile</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #0EA5E9; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0EA5E9; }
            .value { margin-top: 5px; padding: 10px; background: white; border-radius: 4px; border-left: 4px solid #0EA5E9; }
            .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🤝 Nueva Solicitud de Colaboración</h1>
              <p>CDI Chile - Formulario de Contacto</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Nombre de contacto:</div>
                <div class="value">${contactName}</div>
              </div>
              
              <div class="field">
                <div class="label">💼 Cargo o rol:</div>
                <div class="value">${position || 'No especificado'}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              
              <div class="field">
                <div class="label">🏢 Organización/Empresa:</div>
                <div class="value">${organization}</div>
              </div>
              
              <div class="field">
                <div class="label">📋 Asunto:</div>
                <div class="value">${subject}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Mensaje:</div>
                <div class="value">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>Este mensaje fue enviado desde el formulario de contacto de cdichile.org</p>
              <p>Fecha: ${new Date().toLocaleString('es-CL', { 
                timeZone: 'America/Santiago',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'CDI Chile Contacto <onboarding@resend.dev>',
      to: ['info@cdichile.org'],
      subject: `🤝 Nueva solicitud de colaboración: ${subject}`,
      html: emailHtml,
      replyTo: email, // Para que puedan responder directamente al remitente
    });

    if (error) {
      console.error('Error de Resend:', error);
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensaje enviado correctamente',
        emailId: data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error en API de contacto:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}