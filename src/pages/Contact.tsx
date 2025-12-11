import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validasyonu
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen zorunlu alanları doldurun.",
        variant: "destructive"
      });
      return;
    }

    // Simüle edilmiş form gönderimi
    console.log("Form gönderildi:", formData);
    
    toast({
      title: "Mesajınız Gönderildi",
      description: "En kısa sürede size dönüş yapacağız.",
    });

    // Formu temizle
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 (555) 123 45 67",
      description: "Pazartesi - Cuma: 09:00 - 18:00"
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@organikçiftlik.com",
      description: "7/24 destek"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Organik Çiftlik Mahallesi, Doğal Sokak No: 123",
      description: "06000 Ankara, Türkiye"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Pazartesi - Cuma: 09:00 - 18:00",
      description: "Cumartesi: 09:00 - 15:00"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Başlık */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organik ürünlerimiz hakkında sorularınız mı var? Bizimle iletişime geçin, 
            size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* İletişim Bilgileri */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="organic-card">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{info.title}</h3>
                          <p className="text-sm font-medium">{info.content}</p>
                          <p className="text-xs text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Harita Placeholder */}
            <Card className="organic-card">
              <CardHeader>
                <CardTitle>Konumumuz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-secondary/30 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Harita Görünümü</p>
                    <p className="text-sm">Ankara, Türkiye</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* İletişim Formu */}
          <div className="lg:col-span-2">
            <Card className="organic-card">
              <CardHeader>
                <CardTitle>Bize Mesaj Gönderin</CardTitle>
                <CardDescription>
                  Formu doldurarak bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ad Soyad *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Adınız ve soyadınız"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-posta *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ornek@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+90 (555) 123 45 67"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Konu</Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Konu seçin" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="genel">Genel Bilgi</SelectItem>
                          <SelectItem value="urun">Ürün Hakkında</SelectItem>
                          <SelectItem value="siparis">Sipariş</SelectItem>
                          <SelectItem value="kalite">Kalite ve Sertifika</SelectItem>
                          <SelectItem value="isbirligi">İş Birliği</SelectItem>
                          <SelectItem value="sikayet">Şikayet</SelectItem>
                          <SelectItem value="diger">Diğer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mesajınız *</Label>
                    <Textarea
                      id="message"
                      placeholder="Mesajınızı buraya yazın..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Mesaj Gönder
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* SSS */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sık Sorulan Sorular</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En çok merak edilen sorular ve cevapları
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="organic-card">
              <CardHeader>
                <CardTitle className="text-lg">Ürünleriniz gerçekten organik mi?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evet, tüm ürünlerimiz sertifikalı organik ürünlerdir. ECOCERT ve Organik Tarım 
                  sertifikalarımız mevcuttur ve üretim sürecimiz düzenli olarak denetlenmektedir.
                </p>
              </CardContent>
            </Card>

            <Card className="organic-card">
              <CardHeader>
                <CardTitle className="text-lg">Teslimat süresi ne kadar?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Siparişleriniz genellikle 2-3 iş günü içinde hazırlanır ve kargo ile gönderilir. 
                  Taze ürünler için özel soğuk zincir taşımacılığı kullanıyoruz.
                </p>
              </CardContent>
            </Card>

            <Card className="organic-card">
              <CardHeader>
                <CardTitle className="text-lg">Toptan satış yapıyor musunuz?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Evet, restoranlar, marketler ve diğer işletmeler için toptan satış hizmeti 
                  veriyoruz. Özel fiyatlar için bizimle iletişime geçin.
                </p>
              </CardContent>
            </Card>

            <Card className="organic-card">
              <CardHeader>
                <CardTitle className="text-lg">Ürünlerin saklanması nasıl olmalı?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Her ürünün ambalajında saklama koşulları belirtilmiştir. Genel olarak serin, 
                  kuru ve güneş ışığından uzak yerlerde saklanmalıdır.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;