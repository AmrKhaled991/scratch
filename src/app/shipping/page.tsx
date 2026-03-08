export default function ShippingPage() {
  return (
    <div
      className="min-h-screen bg-gray-50 py-16"
      style={{ fontFamily: "'Cairo', Arial, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          سياسة التوصيل والشحن
        </h1>
        <div
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 prose prose-emerald max-w-none text-gray-700 leading-relaxed text-right"
          dir="rtl"
        >
          <p>
            نسعى في <strong>صيدليات ديفعمر</strong> لتوصيل طلباتك في أسرع وقت
            وبأعلى درجات الأمان.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            مناطق التغطية
          </h2>
          <p>
            نوفر خدمة التوصيل لجميع مناطق الإسكندرية (Alexandria) بالإضافة إلى
            التوصيل لكافة محافظات جمهورية مصر العربية من خلال شركات شحن معتمدة.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            مدة التوصيل
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>
              <strong>داخل الإسكندرية:</strong> في نفس اليوم أو خلال 24 ساعة
              للطلبات قبل الساعة 3 عصراً.
            </li>
            <li>
              <strong>باقي المحافظات:</strong> من المستغرق أن تصل الشحنة خلال 2
              إلى 5 أيام عمل.
            </li>
          </ul>
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            رسوم الشحن
          </h2>
          <p>
            قد يتم تطبيق رسوم الشحن بناءً على وزن الطلب والمحافظة. سيتم توضيح
            رسوم الشحن النهائية عند إتمام عملية الشراء وقبل الدفع. كما نوفر
            شحناً مجانياً للطلبات التي تتجاوز قيمة معينة (مثال: 500 جنيه).
          </p>
        </div>
      </div>
    </div>
  );
}
