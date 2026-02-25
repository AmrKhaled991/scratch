"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Trash2, Plus, Minus, ShoppingBag, ArrowLeft,
  MessageCircle, CreditCard, X, CheckCircle2, User, Phone, MapPin
} from "lucide-react";
import { useCart } from "@/lib/cart-context";

const SHIPPING_THRESHOLD = 500;
const SHIPPING_COST = 60;
const WHATSAPP_NUMBER = "201055800295";

interface OrderForm {
  name: string;
  phone: string;
  address: string;
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState<OrderForm>({ name: "", phone: "", address: "" });
  const [errors, setErrors] = useState<Partial<OrderForm>>({});

  const shipping = subtotal >= SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  const total = subtotal + shipping;

  const validate = () => {
    const e: Partial<OrderForm> = {};
    if (!form.name.trim()) e.name = "الاسم مطلوب";
    if (!form.phone.trim()) e.phone = "رقم الهاتف مطلوب";
    if (!form.address.trim()) e.address = "العنوان مطلوب";
    return e;
  };

  const handleOrder = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    const lines = items.map(
      ({ product, quantity }) =>
        `• ${product.nameAr} (${product.unit}) × ${quantity} = ${(product.price * quantity).toLocaleString("ar-EG")} جنيه`
    );
    const message =
      `🛒 *طلب جديد – صيدليات مكه*\n\n` +
      `👤 الاسم: ${form.name}\n` +
      `📞 الهاتف: ${form.phone}\n` +
      `📍 العنوان: ${form.address}\n\n` +
      `*المنتجات:*\n` +
      lines.join("\n") +
      `\n\n` +
      `الإجمالي الفرعي: ${subtotal.toLocaleString("ar-EG")} جنيه\n` +
      `الشحن: ${shipping === 0 ? "مجاني 🎉" : `${shipping} جنيه`}\n` +
      `*الإجمالي الكلي: ${total.toLocaleString("ar-EG")} جنيه*`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");

    setShowModal(false);
    setShowSuccess(true);
    clearCart();
    setForm({ name: "", phone: "", address: "" });
  };

  const set = (key: keyof OrderForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  // ── Success screen ──
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4" style={{ fontFamily: "'Cairo', Arial, sans-serif" }}>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center max-w-sm w-full">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">تم استلام طلبك!</h2>
          <p className="text-gray-500 text-sm mb-1">تم إرسال طلبك عبر واتساب.</p>
          <p className="text-gray-400 text-xs mb-6">سيتواصل معك فريقنا في أقرب وقت لتأكيد الطلب.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> تسوق مجدداً
          </Link>
        </div>
      </div>
    );
  }

  // ── Empty cart ──
  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4" style={{ fontFamily: "'Cairo', Arial, sans-serif" }}>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center max-w-sm w-full">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5">
            <ShoppingBag className="w-10 h-10 text-emerald-300" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">سلتك فارغة</h2>
          <p className="text-gray-500 text-sm mb-6">أضف منتجات لبدء طلبك.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> تصفح المنتجات
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Cairo', Arial, sans-serif" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">سلة التسوق</h1>
          <p className="text-gray-500 mt-1">{items.length} {items.length === 1 ? "منتج" : "منتجات"}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-3">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4">
                <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <Image src={product.image} alt={product.nameAr} fill className="object-cover" sizes="80px" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium text-emerald-600">{product.brand}</p>
                      <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">{product.nameAr}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{product.unit}</p>
                    </div>
                    <button
                      onClick={() => removeItem(product.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0"
                      title="حذف"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg border border-gray-200 p-1">
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors text-gray-600"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-gray-800">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors text-gray-600"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-gray-900">
                        {(product.price * quantity).toLocaleString("ar-EG")} ج
                      </p>
                      {quantity > 1 && (
                        <p className="text-xs text-gray-400">{product.price.toLocaleString("ar-EG")} ج / قطعة</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium mt-2">
              <ArrowLeft className="w-4 h-4" /> مواصلة التسوق
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-900 mb-4">ملخص الطلب</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>الإجمالي الفرعي</span>
                  <span className="font-medium text-gray-900">{subtotal.toLocaleString("ar-EG")} جنيه</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>الشحن</span>
                  <span className={`font-medium ${shipping === 0 ? "text-emerald-600" : "text-gray-900"}`}>
                    {shipping === 0 ? "مجاني 🎉" : `${shipping} جنيه`}
                  </span>
                </div>

                {subtotal < SHIPPING_THRESHOLD && (
                  <div className="bg-emerald-50 rounded-xl p-3 text-xs text-emerald-700">
                    أضف{" "}
                    <span className="font-bold">{(SHIPPING_THRESHOLD - subtotal).toLocaleString("ar-EG")} جنيه</span>{" "}
                    أكثر للشحن المجاني!
                    <div className="mt-2 bg-emerald-200 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all"
                        style={{ width: `${Math.min((subtotal / SHIPPING_THRESHOLD) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-bold text-gray-900">الإجمالي</span>
                  <span className="font-bold text-lg text-gray-900">{total.toLocaleString("ar-EG")} جنيه</span>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={() => setShowModal(true)}
                className="mt-5 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors shadow-sm text-base"
              >
                <MessageCircle className="w-5 h-5" />
                اطلب الآن
              </button>

              {/* Paymob coming soon */}
              <div className="mt-3 bg-indigo-50 border border-indigo-100 rounded-xl p-3 flex items-start gap-2">
                <CreditCard className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-indigo-700">
                  <span className="font-bold">قريباً:</span> الدفع الإلكتروني بواسطة <span className="font-bold">PayMob</span> متاح قريباً في التطبيق.
                </p>
              </div>

              <p className="text-xs text-center text-gray-400 mt-3">
                الدفع عند الاستلام · جميع الطلبات مضمونة
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Order Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in slide-in-from-bottom-4 duration-200">
            {/* Modal header */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <h2 className="text-lg font-bold text-gray-900">بيانات الطلب</h2>
                <p className="text-xs text-gray-400 mt-0.5">أدخل بياناتك لإتمام الطلب عبر واتساب</p>
              </div>
              <button
                onClick={() => { setShowModal(false); setErrors({}); }}
                className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Fields */}
            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <User className="w-3.5 h-3.5 inline ml-1 text-emerald-600" />
                  الاسم الكامل <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.name}
                  onChange={set("name")}
                  placeholder="محمد أحمد"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${errors.name ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <Phone className="w-3.5 h-3.5 inline ml-1 text-emerald-600" />
                  رقم الهاتف <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="01xxxxxxxxx"
                  type="tel"
                  dir="ltr"
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${errors.phone ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  <MapPin className="w-3.5 h-3.5 inline ml-1 text-emerald-600" />
                  العنوان <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={form.address}
                  onChange={set("address")}
                  placeholder="المنطقة، الشارع، رقم المبنى..."
                  rows={2}
                  className={`w-full border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition resize-none ${errors.address ? "border-red-400 bg-red-50" : "border-gray-200"}`}
                />
                {errors.address && <p className="text-xs text-red-500 mt-1">{errors.address}</p>}
              </div>
            </div>

            {/* Order summary mini */}
            <div className="mt-4 bg-gray-50 rounded-xl p-3 flex justify-between text-sm">
              <span className="text-gray-500">الإجمالي الكلي</span>
              <span className="font-bold text-gray-900">{total.toLocaleString("ar-EG")} جنيه</span>
            </div>

            {/* Confirm button */}
            <button
              onClick={handleOrder}
              className="mt-4 w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl transition-colors text-base shadow-sm"
            >
              <MessageCircle className="w-5 h-5" />
              تأكيد الطلب عبر واتساب
            </button>

            <p className="text-center text-xs text-gray-400 mt-2">
              سيتم فتح واتساب تلقائياً لإرسال طلبك
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
