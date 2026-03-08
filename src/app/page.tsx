"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ShieldCheck,
  Truck,
  HeartPulse,
  RotateCcw,
  Tag,
  Clock,
} from "lucide-react";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const featuredProducts = products.filter((p) => p.badge).slice(0, 4);

const features = [
  {
    icon: ShieldCheck,
    title: "جودة صيدلانية",
    desc: "جميع المنتجات من مصنّعين معتمدين",
  },
  {
    icon: Truck,
    title: "توصيل سريع",
    desc: "شحن في نفس اليوم للطلبات قبل الساعة 3 مساءً",
  },
  {
    icon: HeartPulse,
    title: "خبراء الصحة",
    desc: "مراجعة من صيادلة وأخصائيي تجميل",
  },
  { icon: Clock, title: "دعم 24/7", desc: "فريقنا متاح دائماً لمساعدتك" },
];

const categoryCards = [
  {
    label: "العناية بالبشرة",
    value: "skincare",
    color: "from-rose-50 to-rose-100",
    textColor: "text-rose-700",
    img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=200&h=200&fit=crop",
  },
  {
    label: "العناية بالشعر",
    value: "haircare",
    color: "from-amber-50 to-amber-100",
    textColor: "text-amber-700",
    img: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=200&h=200&fit=crop",
  },
  {
    label: "فيتامينات",
    value: "vitamins",
    color: "from-emerald-50 to-emerald-100",
    textColor: "text-emerald-700",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
  },
  {
    label: "العناية بالفم",
    value: "oral-care",
    color: "from-blue-50 to-blue-100",
    textColor: "text-blue-700",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=200&h=200&fit=crop",
  },
];

const policies = [
  {
    icon: Truck,
    title: "سياسة الشحن",
    items: [
      "الشحن داخل جمهورية مصر العربية فقط",
      "التوصيل خلال 2–5 أيام عمل",
      "شحن مجاني للطلبات أكثر من 500 جنيه",
      "رسوم الشحن: 60 جنيه للطلبات دون الحد الأدنى",
    ],
  },
  {
    icon: RotateCcw,
    title: "سياسة الاسترجاع",
    items: [
      "يمكن إرجاع المنتج خلال 14 يوم من الاستلام",
      "يجب أن يكون المنتج في حالته الأصلية غير مفتوح",
      "لا يُقبل إرجاع منتجات الرعاية الشخصية بعد الفتح",
      "يُستبدل المنتج التالف أو المخالف مجاناً",
    ],
  },
  {
    icon: Tag,
    title: "الأسعار والدفع",
    items: [
      "جميع الأسعار بالجنيه المصري (EGP) شاملة الضريبة",
      "الدفع حالياً عند الاستلام (كاش)",
      "قريباً: الدفع الإلكتروني بواسطة PayMob",
      "الأسعار تخضع للتغيير دون إشعار مسبق",
    ],
  },
];

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'Cairo', Arial, sans-serif" }}
    >
      {/* Hero */}
      <section className="bg-gradient-to-bl from-emerald-700 via-emerald-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-right">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
              موثوق من أكثر من 500 عميل
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              منتجات الجمال
              <br />
              والرعاية الصحية
            </h1>
            <p className="text-emerald-100 text-lg mb-8 max-w-xl md:mr-0 mx-auto">
              اطلب منتجات احترافية للعناية بالبشرة والشعر والفيتامينات مباشرة من
              المتاجر الصيدلانية الموثوقة. سريع، موثوق، وأصلي دائماً.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-end">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-6 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-md"
              >
                تسوّق الآن <ArrowLeft className="w-4 h-4" />
              </Link>
              <Link
                href="/products?category=vitamins"
                className="inline-flex items-center gap-2 border border-white/40 text-white font-medium px-6 py-3 rounded-xl hover:bg-white/10 transition-colors"
              >
                عرض الفيتامينات
              </Link>
            </div>
          </div>
          {/* Hero image collage */}
          <div className="flex-shrink-0 grid grid-cols-2 gap-3 w-full max-w-xs">
            {categoryCards.slice(0, 4).map((c) => (
              <Link
                key={c.value}
                href={`/products?category=${c.value}`}
                className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <Image
                  src={c.img}
                  alt={c.label}
                  width={150}
                  height={150}
                  className="w-full h-28 object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Paymob coming soon banner */}
      <div className="bg-gradient-to-l from-blue-600 to-indigo-600 text-white text-center py-2.5 px-4 text-sm font-medium">
        🎉 قريباً: الدفع الإلكتروني عبر{" "}
        <span className="font-bold underline">PayMob</span> متاح قريباً في
        التطبيق!
      </div>

      {/* Features bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <f.icon className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{f.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          تسوّق حسب الفئة
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {categoryCards.map((c) => (
            <Link
              key={c.value}
              href={`/products?category=${c.value}`}
              className={`rounded-2xl bg-gradient-to-br ${c.color} p-5 flex flex-col items-center gap-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group`}
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm">
                <Image
                  src={c.img}
                  alt={c.label}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className={`text-sm font-semibold ${c.textColor}`}>
                {c.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">المنتجات المميزة</h2>
          <Link
            href="/products"
            className="text-sm font-medium text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> عرض الكل
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Policies Section */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            سياساتنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <policy.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900">
                    {policy.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {policy.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-emerald-500 mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-l from-emerald-600 to-teal-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            مستعد لتجهيز صيدليتك؟
          </h2>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
            تصفح كتالوجنا الكامل من منتجات الصحة والجمال. متاح للطلب بالجملة
            بأسعار تنافسية للصيدليات.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-8 py-3 rounded-xl hover:bg-emerald-50 transition-colors shadow-md"
          >
            تصفح كل المنتجات <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* End of Page content */}
    </div>
  );
}
