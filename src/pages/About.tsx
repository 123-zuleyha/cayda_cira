import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Leaf, Users, Award, Target, Heart, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Doğallık",
      description: "Kimyasal gübre ve pestisit kullanmadan, tamamen doğal yöntemlerle üretim yapıyoruz."
    },
    {
      icon: Shield,
      title: "Güvenilirlik", 
      description: "Üretimden sofraya kadar her aşamada kalite kontrol ve sertifikasyon süreçlerini titizlikle uyguluyoruz."
    },
    {
      icon: Heart,
      title: "Sağlık",
      description: "İnsan sağlığını ve çevre dostu üretimi önceleyerek gelecek nesillere temiz bir dünya bırakıyoruz."
    },
    {
      icon: Users,
      title: "Toplumsal Sorumluluk",
      description: "Yerel çiftçilerle işbirliği yaparak sürdürülebilir tarım ve adil ticaret ilkelerini destekliyoruz."
    }
  ];

  const achievements = [
    { number: "500+", label: "Mutlu Müşteri" },
    { number: "50+", label: "Organik Ürün Çeşidi" },
    { number: "10+", label: "Yıllık Deneyim" },
    { number: "25+", label: "Çiftçi Ortağımız" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Hakkımızda</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            OrganikÇiftlik olarak, 2014 yılından bu yana Türkiye'nin dört bir yanından 
            sertifikalı organik ürünleri sizlere ulaştırıyoruz. Doğal yaşamın ve sağlıklı 
            beslenmenin öncüsü olarak, kimyasal gübre ve pestisit kullanılmadan üretilen 
            ürünlerle sofranıza sağlık getiriyoruz.
          </p>
        </div>

        {/* Misyon ve Vizyon */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="organic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-6 w-6 text-primary" />
                Misyonumuz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Doğal ve organik tarım ürünlerini en taze haliyle tüketicilere ulaştırarak, 
                sağlıklı yaşam kültürünün yaygınlaşmasına katkıda bulunmak. Çevre dostu 
                üretim yöntemleriyle sürdürülebilir tarımı desteklemek ve gelecek nesillere 
                temiz bir dünya bırakmak.
              </p>
            </CardContent>
          </Card>

          <Card className="organic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Vizyonumuz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Türkiye'nin en güvenilir organik ürün tedarikçisi olmak ve organik tarımın 
                yaygınlaşmasında öncü rol oynamak. Teknoloji ile geleneksel tarım yöntemlerini 
                harmanlayarak, kaliteli ve uygun fiyatlı organik ürünleri herkese ulaştırmak.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Değerlerimiz */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Değerlerimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              İş yapış şeklimizi ve kararlarımızı yönlendiren temel değerlerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="organic-card text-center organic-hover">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Başarılarımız */}
        <div className="mb-16 py-12 organic-gradient text-primary-foreground rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Başarılarımız</h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto">
              Yıllar içinde elde ettiğimiz başarılar ve büyüyen ailemiz
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{achievement.number}</div>
                <div className="text-primary-foreground/80">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sertifikalarımız */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Sertifikalarımız</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kalite ve güvenilirliğimizi kanıtlayan uluslararası sertifikalar
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-lg py-2 px-4">
              Organik Tarım Sertifikası
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              ECOCERT Sertifikası
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              GlobalGAP Sertifikası
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              BRC Gıda Güvenliği
            </Badge>
            <Badge variant="outline" className="text-lg py-2 px-4">
              ISO 22000
            </Badge>
          </div>
        </div>

        {/* Süreç */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Üretim Sürecimiz</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Tarladan sofraya kadar her aşamada kalite ve doğallık
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="organic-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  1
                </div>
                <CardTitle>Tohum Seçimi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sertifikalı organik tohumlar ve geleneksel çeşitlerle başlayan süreç
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="organic-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  2
                </div>
                <CardTitle>Doğal Yetiştirme</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Kimyasal gübre ve pestisit kullanmadan, doğal yöntemlerle yetiştirme
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="organic-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl">
                  3
                </div>
                <CardTitle>Kalite Kontrol</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Hasat, paketleme ve teslimat aşamalarında titiz kalite kontrol
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Ekip */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ekibimiz</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Deneyimli tarım uzmanları, gıda mühendisleri ve kalite kontrol uzmanlarından 
            oluşan profesyonel ekibimizle, en yüksek kalite standartlarını sağlıyoruz.
          </p>
          <Card className="organic-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <p className="text-muted-foreground italic">
                "Doğanın sunduğu en iyi ürünleri, en doğal haliyle sofranıza getirmek 
                için çalışıyoruz. Her ürünümüz, ailemizin bir parçası olarak özenle 
                seçiliyor ve işleniyor."
              </p>
              <div className="mt-4 font-semibold">
                - OrganikÇiftlik Ekibi
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;