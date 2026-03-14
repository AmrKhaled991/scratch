import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-gray-50 py-16"
      style={{ fontFamily: "'Cairo', Arial, sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          اتصل بنا
        </h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-8 text-center text-lg">
            نحن هنا لمساعدتك والإجابة على استفساراتك.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-emerald-50 p-4 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">رقم الهاتف</h3>
                <p className="text-gray-600" dir="ltr">
                  +20 155 704 3883
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-emerald-50 p-4 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  البريد الإلكتروني
                </h3>
                <p className="text-gray-600">developeramr1@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-emerald-50 p-4 rounded-xl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">العنوان</h3>
                <p className="text-gray-600">
                  Mansoura, Egypt (المنصورة، مصر)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
