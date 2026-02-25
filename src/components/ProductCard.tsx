"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast.success(`تمت إضافة ${product.nameAr} إلى السلة`);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  const badgeLabel = product.badgeAr ?? product.badge;

  return (
    <div className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.nameAr}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {badgeLabel && (
          <span
            className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${
              product.badge === "Sale"
                ? "bg-rose-500 text-white"
                : product.badge === "New"
                ? "bg-blue-500 text-white"
                : product.badge === "Best Seller"
                ? "bg-amber-500 text-white"
                : "bg-emerald-600 text-white"
            }`}
          >
            {badgeLabel}
          </span>
        )}
        {discount && (
          <span className="absolute top-2 left-2 text-xs font-bold px-2 py-1 rounded-full bg-rose-100 text-rose-600">
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide mb-0.5">{product.brand}</p>
        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-1 line-clamp-2 group-hover:text-emerald-700 transition-colors">
          {product.nameAr}
        </h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2 flex-1">{product.descriptionAr}</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
          ))}
          <span className="text-xs text-gray-400 mr-1">(4.8)</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="text-base font-bold text-gray-900">
              {product.price.toLocaleString("ar-EG")} ج
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through mr-1.5">
                {product.originalPrice.toLocaleString("ar-EG")} ج
              </span>
            )}
            <span className="block text-xs text-gray-400">{product.unit}</span>
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors shadow-sm"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            أضف
          </button>
        </div>
      </div>
    </div>
  );
}
