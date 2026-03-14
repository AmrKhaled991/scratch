export default function PrivacyPage() {
  return (
    <div
      className="min-h-screen bg-gray-50 py-16"
      style={{ fontFamily: "'Cairo', Arial, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          سياسة الخصوصية (Privacy Policy)
        </h1>
        <div
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 prose prose-emerald max-w-none text-gray-700 leading-relaxed text-right"
          dir="rtl"
        >
          <p>
            نحن في <strong>صيدليات الاتحاد الخليجي</strong> نولي اهتماماً بالغاً
            لخصوصية عملائنا ونحرص على حماية بياناتهم الشخصية.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            1. جمع المعلومات
          </h2>
          <p>
            نقوم بجمع المعلومات التي تقدمها لنا طواعية عند تسجيل حساب، أو إجراء
            طلب، أو التواصل معنا. قد تشمل هذه المعلومات الاسم، البريد الإلكتروني
            (مثل developeramr1@gmail.com)، رقم الهاتف (+201557043883)، والعنوان
            (مثل المنصورة).
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            2. استخدام المعلومات
          </h2>
          <p>
            نستخدم المعلومات التي نجمعها لإتمام طلباتك، تحسين تجربتك على الموقع،
            وإرسال تحديثات حول طلباتك وعروضنا. لا نقوم ببيع أو مشاركة بياناتك
            الشخصية مع أطراف ثالثة لتسويق منتجاتهم.
          </p>
          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            3. أمن البيانات
          </h2>
          <p>
            نحن نستخدم تدابير أمنية متقدمة لحماية معلوماتك الشخصية من الوصول غير
            المصرح به أو التغيير أو الإفصاح أو الإتلاف.
          </p>
          <p className="mt-6 font-semibold">
            باستخدامك لموقعنا، فإنك توافق على جمع واستخدام المعلومات وفقاً لهذه
            السياسة.
          </p>
        </div>
      </div>
    </div>
  );
}
