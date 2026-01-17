import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent,CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Required field!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Required field!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address!";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Required field!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Form submitted:", formData);

    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    setErrors({});

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Ready to start your next structural steel project? Get in touch with us to discuss how we can help bring
              your vision to life with precision and excellence.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:
suvroghosh@suvroghosh.com" className="text-muted-foreground hover:text-primary transition-colors">
                    
suvroghosh@suvroghosh.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <div className="space-y-1">
                    <a href="tel:+919871177166" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 98 7117 7166 (India)
                    </a>
                    <a href="tel:+17605882207" className="block text-muted-foreground hover:text-primary transition-colors">
                      +1 (760) 588 2207 (US)
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Offices</h3>
                  <p className="text-muted-foreground">India, United States & United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              {success && (
                <div className="mb-6 rounded-lg bg-green-600 text-white px-4 py-3 text-sm font-medium">
                  ✅ Message sent successfully! We’ll get back to you shortly.
                </div>
              )}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={errors.name ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="bg-red-500 text-white text-sm px-3 py-1 mt-2 rounded">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="bg-red-500 text-white text-sm px-3 py-1 mt-2 rounded">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className={`resize-none ${errors.message ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                  />
                  {errors.message && (
                    <p className="bg-red-500 text-white text-sm px-3 py-1 mt-2 rounded">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full bg-black text-white hover:bg-red-600 hover:text-white transition-colors"
                >
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
