'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, Facebook, Instagram, Linkedin, MessageCircle, Youtube, Loader2, CheckCircle, AlertCircle, Copy } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Variantes de animación
const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function ContactPage() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    contactName: '',
    position: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  type SubmitStatus = 'success' | 'error' | null;
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);
  const [emailCopied, setEmailCopied] = useState(false);

  // Manejar cambios en inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Función para copiar email al portapapeles
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('info@cdichile.org');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar email:', err);
    }
  };

  // Función para abrir WhatsApp
  const openWhatsApp = () => {
    const phoneNumber = '56951303647';
    const message = encodeURIComponent('Hola, me gustaría obtener más información sobre CDI Chile.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Limpiar formulario
        setFormData({
          contactName: '',
          position: '',
          email: '',
          organization: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error de red:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
        {/* Header Section */}
        <motion.div className="text-center mb-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1 className="text-4xl font-bold tracking-tight mb-4"
            variants={fadeInUp}
          >
            Contáctanos
          </motion.h1>
          <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres saber más sobre nosotros? Nos encantaría saber de ti.
          </motion.p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-semibold">¿Tu empresa/organización quiere colaborar con nosotros?</CardTitle>
              <p className="text-sm text-muted-foreground">Completa este formulario y conversemos sobre cómo generar impacto juntos.</p>
              <p className="text-sm text-muted-foreground">Buscamos alianzas con propósito para ampliar el acceso a herramientas digitales, formación y empleabilidad.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contactName">Nombre de contacto *</Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    placeholder="Ej. Camila Rojas"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Cargo o rol *</Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    placeholder="Ej. Encargada de RSE, Director de Fundación, etc."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Ej. contacto@empresa.cl"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Nombre de la organización o empresa *</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Ej. Fundación Raíces, Inmobiliaria Vivo, etc."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Ej. Propuesta de alianza / Consulta sobre programas / Quiero conocer más"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Cuéntanos brevemente en qué están interesados y cómo podríamos colaborar."
                    className="min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Mensajes de estado */}
                {submitStatus === 'success' && (
                  <Alert className="border-green-200 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      ¡Mensaje enviado exitosamente! Te responderemos pronto.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800">
                      Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                    </AlertDescription>
                  </Alert>
                )}

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando mensaje...
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar mensaje
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Social Media Links */}
            <Card>
              <CardHeader className='text-center'>
                <CardTitle>¿Quieres ser parte de nuestros programas como participante?</CardTitle>
                <CardDescription>Entérate de nuestras convocatorias a través de redes sociales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <Instagram className="h-5 w-5" />,
                      title: "Instagram",
                      href: "https://www.instagram.com/cdichile",
                      color: "text-pink-600"
                    },
                    {
                      icon: <Facebook className="h-5 w-5" />,
                      title: "Facebook",
                      href: "https://www.facebook.com/CDIChile",
                      color: "text-blue-600"
                    },
                    {
                      icon: <MessageCircle className="h-5 w-5" />,
                      title: "WhatsApp",
                      href: "https://www.whatsapp.com/channel/0029Vb5TEQmHAdNW4ZsZlH1t",
                      color: "text-green-600"
                    },
                    {
                      icon: <Linkedin className="h-5 w-5" />,
                      title: "LinkedIn",
                      href: "https://www.linkedin.com/school/ongcdichile/?originalSubdomain=cl",
                      color: "text-blue-700"
                    },
                    {
                      icon: <Youtube className="h-5 w-5" />,
                      title: "YouTube",
                      href: "https://www.youtube.com/@ongcdichile7907",
                      color: "text-red-600"
                    }
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className={`flex items-center justify-center p-3 rounded-lg border hover:bg-accent transition-colors`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className={social.color}>{social.icon}</span>
                      <span className="ml-2 text-sm font-medium">{social.title}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardHeader className="text-center">
                <CardTitle>¿Prefieres escribirnos directo?</CardTitle>
                <CardDescription>También puedes comunicarte con nuestro equipo a través de estos canales:</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email con funcionalidad de copiar */}
                  <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent transition-colors">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground cursor-pointer" onClick={copyEmail}>
                          info@cdichile.org
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyEmail}
                      className="h-8 w-8 p-0"
                    >
                      {emailCopied ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {/* WhatsApp con funcionalidad de abrir */}
                  <div
                    className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors cursor-pointer"
                    onClick={openWhatsApp}
                  >
                    <div className="flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">WhatsApp</p>
                      <p className="text-muted-foreground">+56 9 51303647</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}