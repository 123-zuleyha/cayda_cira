import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { categories, products } from "@/data/mockData";
import { ArrowRight, Leaf, Shield, Truck, Award } from "lucide-react";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/organik_tarim_banner_1.jpeg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Doğal ve Organik
            <span className="block text-accent">Tarım Ürünleri</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Kimyasal gübre ve pestisit kullanmadan, tamamen doğal yöntemlerle yetiştirilen 
            sertifikalı organik ürünlerle sağlıklı yaşamın kapılarını açın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="organic-hover">
              <Link to="/urunler">
                Ürünleri Keşfet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link to="/hakkimizda">
                Hakkımızda
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">%100 Organik</h3>
              <p className="text-muted-foreground text-sm">
                Kimyasal gübre ve pestisit kullanılmadan üretilen sertifikalı ürünler
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Güvenli Üretim</h3>
              <p className="text-muted-foreground text-sm">
                Üretimden sofraya kadar her aşamada kalite kontrolü
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Hızlı Teslimat</h3>
              <p className="text-muted-foreground text-sm">
                Tarladan sofraya en kısa sürede taze ürün teslimatı
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sertifikalı</h3>
              <p className="text-muted-foreground text-sm">
                Uluslararası organik tarım sertifikalarına sahip ürünler
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kategoriler */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ürün Kategorilerimiz</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Geniş ürün yelpazemizle her ihtiyacınıza uygun organik ürünler sunuyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.id} className="organic-card organic-hover cursor-pointer group">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Ürünler */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Öne Çıkan Ürünler</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              En popüler ve taze organik ürünlerimizi keşfedin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="organic-card organic-hover cursor-pointer group">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg relative">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary">
                      Organik
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-4">{product.shortDescription}</CardDescription>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}₺/kg</span>
                    <Button asChild size="sm">
                      <Link to={`/urun/${product.id}`}>
                        Detay
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/urunler">
                Tüm Ürünleri Gör
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 organic-gradient text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sağlıklı Yaşamın Başlangıcı
          </h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Organik ürünlerimizle doğal beslenmenin keyfini çıkarın. 
            Ailenizin sağlığı için en doğru tercihi yapın.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/iletisim">
              Bizimle İletişime Geçin
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
