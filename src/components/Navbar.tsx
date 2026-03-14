"use client";

import Link from "next/link";
import { ShoppingCart, Package, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center shadow-md group-hover:bg-emerald-700 transition-colors">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900">صيدليات</span>
              <span className="text-lg font-bold text-emerald-600">
                {" "}
                الاتحاد الخليجي
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              الرئيسية
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              المنتجات
            </Link>
          </nav>

          {/* Cart + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 px-3 py-2 rounded-lg transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden sm:inline text-sm font-medium">
                السلة
              </span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -left-1.5 bg-emerald-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-emerald-600 py-1"
          >
            الرئيسية
          </Link>
          <Link
            href="/products"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-emerald-600 py-1"
          >
            كل المنتجات
          </Link>
          <Link
            href="/cart"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-gray-700 hover:text-emerald-600 py-1"
          >
            السلة
          </Link>
        </div>
      )}
    </header>
  );
}
