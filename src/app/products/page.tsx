"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories, Category } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Search, X } from "lucide-react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory =
    (searchParams.get("category") as Category | "all") ?? "all";

  const [activeCategory, setActiveCategory] = useState<Category | "all">(
    initialCategory,
  );
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<
    "default" | "price-asc" | "price-desc" | "name"
  >("default");

  const filtered = useMemo(() => {
    let list =
      activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.nameAr.includes(search) ||
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.descriptionAr.includes(search),
      );
    }
    if (sortBy === "price-asc")
      list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc")
      list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === "name")
      list = [...list].sort((a, b) => a.nameAr.localeCompare(b.nameAr, "ar"));
    return list;
  }, [activeCategory, search, sortBy]);

  return (
    <div
      className="min-h-screen bg-gray-50"
      style={{ fontFamily: "'Cairo', Arial, sans-serif" }}
    >
      {/* Page header */}
      <div className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">كل المنتجات</h1>
          <p className="text-gray-500 mt-1">
            تصفح كتالوجنا الكامل من منتجات الصحة والجمال الصيدلانية
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث عن منتج أو ماركة..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-9 pl-4 py-2.5 border border-gray-200 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="default">ترتيب: افتراضي</option>
            <option value="price-asc">السعر: من الأقل للأعلى</option>
            <option value="price-desc">السعر: من الأعلى للأقل</option>
            <option value="name">الاسم: أ–ي</option>
          </select>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-48 shrink-0 hidden md:block">
            <div className="bg-white rounded-2xl border border-gray-100 p-4 sticky top-20">
              <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                الفئة
              </h3>
              <ul className="space-y-1">
                {categories.map((cat) => (
                  <li key={cat.value}>
                    <button
                      onClick={() =>
                        setActiveCategory(cat.value as Category | "all")
                      }
                      className={`w-full text-right text-sm px-3 py-2 rounded-lg transition-colors ${
                        activeCategory === cat.value
                          ? "bg-emerald-50 text-emerald-700 font-semibold"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {cat.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Mobile category pills */}
          <div className="md:hidden w-full">
            <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() =>
                    setActiveCategory(cat.value as Category | "all")
                  }
                  className={`shrink-0 text-xs px-3 py-1.5 rounded-full transition-colors ${
                    activeCategory === cat.value
                      ? "bg-emerald-600 text-white font-semibold"
                      : "bg-white border border-gray-200 text-gray-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            <p className="text-xs text-gray-400 mb-4">
              يتم عرض{" "}
              <span className="font-semibold text-gray-700">
                {filtered.length}
              </span>{" "}
              منتج
            </p>
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-lg">
                  لم يتم العثور على منتجات.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                  }}
                  className="mt-3 text-emerald-600 text-sm hover:underline"
                >
                  مسح الفلاتر
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400">
          جار التحميل...
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
