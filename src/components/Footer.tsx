import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Açıklama */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-foreground">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-bold">OrganikÇiftlik</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Doğal ve organik tarım ürünleri ile sağlıklı yaşamın adresi. 
              Kimyasal gübre ve pestisit kullanmadan yetiştirilen ürünlerimizle 
              sofranıza sağlık getiriyoruz.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/urunler" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ürünler
                </Link>
              </li>
              <li>
                <Link to="/hakkimizda" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Ürün Kategorileri */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-sm text-primary-foreground/80">Organik Sebzeler</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Organik Meyveler</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Tahıllar</span>
              </li>
              <li>
                <span className="text-sm text-primary-foreground/80">Bakliyatlar</span>
              </li>
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm text-primary-foreground/80">+90 (555) 123 45 67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm text-primary-foreground/80">info@organikçiftlik.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  Organik Çiftlik Mahallesi<br />
                  Doğal Sokak No: 123<br />
                  06000 Ankara, Türkiye
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © 2024 OrganikÇiftlik. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <span className="text-sm text-primary-foreground/60">Gizlilik Politikası</span>
              <span className="text-sm text-primary-foreground/60">Kullanım Şartları</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;