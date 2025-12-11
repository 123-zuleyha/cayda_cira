import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Layout from "@/components/Layout";
import { products, categories } from "@/data/mockData";
import { Search, Filter } from "lucide-react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Başlık */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Organik Ürünlerimiz</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Doğal ve sertifikalı organik ürünlerimizi keşfedin. Sağlıklı yaşam için en iyi seçenekleri sunuyoruz.
          </p>
        </div>

        {/* Arama ve Filtreleme */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Ürün ara..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Kategori seçin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Kategoriler</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Sonuç Sayısı */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredProducts.length} ürün bulundu
          </p>
        </div>

        {/* Ürün Listesi */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="organic-card organic-hover cursor-pointer group">
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden rounded-t-lg relative">
                    <img 
                      src={product.images[0]} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <Badge className="bg-primary">
                        Organik
                      </Badge>
                      {!product.inStock && (
                        <Badge variant="destructive">
                          Tükendi
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {categories.find(c => c.id === product.category)?.name}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-4 line-clamp-2">
                    {product.shortDescription}
                  </CardDescription>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}₺/kg</span>
                    <div className="text-sm text-muted-foreground">
                      <span>{product.origin}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full" disabled={!product.inStock}>
                    <Link to={`/urun/${product.id}`}>
                      {product.inStock ? "Detayları Gör" : "Stokta Yok"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Ürün bulunamadı</h3>
            <p className="text-muted-foreground mb-4">
              Arama kriterlerinize uygun ürün bulunamadı. Lütfen farklı anahtar kelimeler deneyin.
            </p>
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              variant="outline"
            >
              Filtreleri Temizle
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Products;