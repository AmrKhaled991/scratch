export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-gray-50 py-16"
      style={{ fontFamily: "'Cairo', Arial, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          من نحن
        </h1>
        <div
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 prose prose-emerald max-w-none text-gray-700 leading-relaxed text-right"
          dir="rtl"
        >
          <p className="text-lg">
            مرحباً بك في <strong>صيدليات الاتحاد الخليجي</strong>. نحن صيدلية
            وصرح متكامل لمنتجات الرعاية الصحية والتجميلية.
          </p>
          <p>
            تأسسنا بهدف توفير منتجات صيدلانية أصلية وعالية الجودة للمستهلكين
            بأسعار تنافسية. فريقنا من الخبراء والصيادلة يضمن لك الحصول على أفضل
            منتجات العناية بالبشرة، العناية بالشعر، الفيتامينات، والمكملات
            الغذائية، والعناية الشخصية.
          </p>
          <p>
            رسالتنا هي تسهيل وصول الجميع لمنتجات الصحة والجمال بضغطة زر وتوصيلها
            حتى باب المنزل، بجانب تقديم خدمة عملاء استثنائية للإجابة عن تساؤلاتك
            ومساعدتك على اختيار الأنسب لك.
          </p>
        </div>
      </div>
    </div>
  );
}
