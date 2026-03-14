import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-gray-400 py-12 mt-auto"
      style={{ fontFamily: "'Cairo', Arial, sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Contact */}
          <div>
            <span className="text-white font-bold text-lg mb-4 block">
              صيدليات الاتحاد الخليجي
            </span>
            <p className="text-sm mb-6">
              منتجات الصحة والجمال الاحترافية لعملائنا في جميع أنحاء مصر.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-emerald-500" />
                <a
                  href="tel:+201557043883"
                  className="hover:text-white transition-colors"
                  dir="ltr"
                >
                  +20 155 704 3883
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-emerald-500" />
                <a
                  href="mailto:developeramr1@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  developeramr1@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>Mansoura, Egypt</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-white transition-colors"
                >
                  المنتجات
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-white transition-colors"
                >
                  السلة
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">السياسات الدعم</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  سياسة الخصوصية (Privacy Policy)
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="hover:text-white transition-colors"
                >
                  سياسة التوصيل والشحن (Delivery)
                </Link>
              </li>
              <li>
                <Link
                  href="/refund"
                  className="hover:text-white transition-colors"
                >
                  سياسة الاسترجاع والإلغاء (Refund)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <p className="text-xs text-center text-gray-500">
            &copy; {new Date().getFullYear()} صيدليات الاتحاد الخليجي. جميع
            الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
