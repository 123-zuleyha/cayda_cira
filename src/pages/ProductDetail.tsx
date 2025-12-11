import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";
import { products, categories } from "@/data/mockData";
import { ArrowLeft, MapPin, User, Award, Leaf } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Ürün bulunamadı</h1>
            <Button asChild>
              <Link to="/urunler">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ürünlere Dön
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const category = categories.find(c => c.id === product.category);
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-primary">Ana Sayfa</Link>
          <span>/</span>
          <Link to="/urunler" className="hover:text-primary">Ürünler</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Geri Dön Butonu */}
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/urunler">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Ürünlere Dön
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Ürün Görselleri */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <img 
                src={product.images[selectedImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square w-20 overflow-hidden rounded border-2 transition-colors ${
                      selectedImageIndex === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Ürün Bilgileri */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">{category?.name}</Badge>
                <Badge className="bg-primary">Organik</Badge>
                {!product.inStock && (
                  <Badge variant="destructive">Stokta Yok</Badge>
                )}
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.shortDescription}</p>
              
              <div className="text-4xl font-bold text-primary mb-6">
                {product.price}₺<span className="text-lg font-normal text-muted-foreground">/kg</span>
              </div>
            </div>

            {/* Üretici Bilgileri */}
            <Card className="organic-card">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Menşei</p>
                      <p className="text-sm text-muted-foreground">{product.origin}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Üretici</p>
                      <p className="text-sm text-muted-foreground">{product.producer}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sertifikalar */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Sertifikalar
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <Badge key={index} variant="secondary">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* İletişim Butonu */}
            <Button asChild size="lg" className="w-full" disabled={!product.inStock}>
              <Link to="/iletisim">
                {product.inStock ? "İletişime Geç" : "Stokta Yok"}
              </Link>
            </Button>
          </div>
        </div>

        {/* Detaylı Bilgiler */}
        <Tabs defaultValue="description" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="description">Açıklama</TabsTrigger>
            <TabsTrigger value="nutrition">Besin Değerleri</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  Ürün Açıklaması
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nutrition" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Besin Değerleri (100g başına)</CardTitle>
              </CardHeader>
              <CardContent>
                {product.nutritionalInfo ? (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{product.nutritionalInfo.calories}</div>
                      <div className="text-sm text-muted-foreground">Kalori</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{product.nutritionalInfo.protein}g</div>
                      <div className="text-sm text-muted-foreground">Protein</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{product.nutritionalInfo.carbs}g</div>
                      <div className="text-sm text-muted-foreground">Karbonhidrat</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{product.nutritionalInfo.fat}g</div>
                      <div className="text-sm text-muted-foreground">Yağ</div>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{product.nutritionalInfo.fiber}g</div>
                      <div className="text-sm text-muted-foreground">Lif</div>
                    </div>
                  </div>
                ) : (
                  <p className="text-muted-foreground">Besin değeri bilgisi mevcut değil.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Benzer Ürünler */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Benzer Ürünler</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="organic-card organic-hover cursor-pointer group">
                  <CardHeader className="p-0">
                    <div className="aspect-square overflow-hidden rounded-t-lg relative">
                      <img 
                        src={relatedProduct.images[0]} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary">
                        Organik
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-lg mb-2">{relatedProduct.name}</CardTitle>
                    <CardDescription className="mb-4">{relatedProduct.shortDescription}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{relatedProduct.price}₺/kg</span>
                      <Button asChild size="sm">
                        <Link to={`/urun/${relatedProduct.id}`}>
                          Detay
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;