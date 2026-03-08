export default function RefundPage() {
  return (
    <div
      className="min-h-screen bg-gray-50 py-16"
      style={{ fontFamily: "'Cairo', Arial, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          سياسة الاسترجاع والإلغاء
        </h1>
        <div
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 prose prose-emerald max-w-none text-gray-700 leading-relaxed text-right"
          dir="rtl"
        >
          <p>
            نحرص على رضا عملائنا وتقديم أفضل تجربة شراء. إذا لم تكن راضياً عن
            طلبك، نحن هنا للمساعدة.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            الإلغاء (Cancellation)
          </h2>
          <p>
            يمكنك إلغاء طلبك في أي وقت قبل أن يتم شحنه للشركة الناقلة. بمجرد شحن
            الطلب، لا يمكن إلغاؤه وسيترتب على ذلك تطبيق سياسة الاسترجاع.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            الاسترجاع (Refund / Returns)
          </h2>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>يحق للعميل إرجاع المنتج خلال 14 يوماً من تاريخ استلامه.</li>
            <li>
              لضمان الصحة والسلامة العامة، لا نقبل استرجاع أو استبدال منتجات
              الرعاية الشخصية، الأدوية، أو أي منتجات تم فتح عبوتها الأصلية أو
              استخدامها.
            </li>
            <li>
              يجب أن يكون المنتج في حالته الأصلية والتغليف الأصلي وغير مستخدم
              ليكون مؤهلاً للاسترجاع.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mt-6 mb-3">
            المنتجات التالفة أو الخاطئة
          </h2>
          <p>
            إذا استلمت منتجك بحالة تالفة أو استلمت منتجاً غير الذي طلبته، سنتكفل
            بكافة مصاريف الشحن لعملية الاسترجاع وسيتم إعادة إرسال المنتج الصحيح
            أو استرداد المبلغ بالكامل حسب رغبتك.
          </p>

          <p className="mt-6">
            لتقديم طلب استرجاع أو إلغاء، يرجى التواصل معنا عبر الرقم{" "}
            <span dir="ltr">+20 155 704 3883</span> أو البريد الإلكتروني{" "}
            <span dir="ltr">developeramr1@gmail.com</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
