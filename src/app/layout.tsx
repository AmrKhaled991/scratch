import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "@/visual-edits/VisualEditsMessenger"; 
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { CartProvider } from "@/lib/cart-context";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "صيدليات مكه – منتجات الجمال والصحة",
  description:
    "اطلب منتجات الجمال والرعاية الصحية الاحترافية من صيدليات مكه. العناية بالبشرة، الفيتامينات، العناية بالشعر والمزيد بأسعار بالجنيه المصري.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
        <body suppressHydrationWarning className="antialiased font-sans" style={{ fontFamily: "'Cairo', 'Tajawal', Arial, sans-serif" }}>
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "PharmaCare", "version": "1.0.0"}'
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <CartProvider>
          <Navbar />
          {children}
          <Toaster position="top-left" richColors />
        </CartProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
