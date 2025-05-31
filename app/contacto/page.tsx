'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github, MessageCircle, Youtube, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  // Estado del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  type SubmitStatus = 'success' | 'error' | null;
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  // Manejar cambios en inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
          firstName: '',
          lastName: '',
          email: '',
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
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Contáctanos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o quieres saber más sobre nosotros? Nos encantaría saber de ti.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Envíanos un mensaje</CardTitle>
              <CardDescription>Completa el formulario y te responderemos lo antes posible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nombre *</Label>
                    <Input 
                      id="firstName" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Tu nombre" 
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input 
                      id="lastName" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Tu apellido" 
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="tu@email.com" 
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
                    placeholder="¿En qué podemos ayudarte?" 
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
                    placeholder="Escribe tu mensaje aquí..." 
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
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
                <CardDescription>También puedes contactarnos directamente a través de estos medios.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">contacto@cdichile.org</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+56 9 5130 3647</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Dirección</p>
                    <p className="text-muted-foreground">
                      Puma 1180, Recoleta - If Blanco Recoleta, 8420200 Santiago, Región Metropolitana, Chile
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media Links */}
            <Card>
              <CardHeader>
                <CardTitle>Síguenos</CardTitle>
                <CardDescription>Conéctate con nosotros en nuestras redes sociales.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <Facebook className="h-5 w-5" />,
                      title: "Facebook",
                      href: "https://www.facebook.com/CDIChile",
                      color: "text-blue-600"
                    },
                    {
                      icon: <Instagram className="h-5 w-5" />,
                      title: "Instagram",
                      href: "https://www.instagram.com/cdichile",
                      color: "text-pink-600"
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
                    },
                    {
                      icon: <Twitter className="h-5 w-5" />,
                      title: "Twitter",
                      href: "https://twitter.com/CDIChile",
                      color: "text-sky-600"
                    },
                    {
                      icon: <MessageCircle className="h-5 w-5" />,
                      title: "WhatsApp",
                      href: "https://www.whatsapp.com/channel/0029Vb5TEQmHAdNW4ZsZlH1t",
                      color: "text-green-600"
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

            {/* Business Hours */}
            <Card>
              <CardHeader>
                <CardTitle>Horarios de atención</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo</span>
                    <span className="font-medium">Cerrado</span>
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