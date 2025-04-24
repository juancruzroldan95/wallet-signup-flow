import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-primary/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
          Testimonials
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          What Our Users Say
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
          Hear from those who have experienced the benefits of Walletly
          firsthand.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <p className="text-lg font-semibold text-gray-900">
              &quot;Walletly has transformed how we handle digital wallet
              onboarding. It&#39;s seamless, secure, and super easy to
              integrate.&quot;
            </p>
            <p className="mt-4 text-gray-500">John Doe</p>
            <p className="text-sm text-gray-400">
              Product Manager, DigitalTech
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <p className="text-lg font-semibold text-gray-900">
              &quot;The customization options are fantastic! We&#39;ve been able
              to tailor the user experience to fit our brand perfectly.&quot;
            </p>
            <p className="mt-4 text-gray-500">Jane Smith</p>
            <p className="text-sm text-gray-400">CTO, SecureWallets</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-center">
            <div className="flex justify-center mb-4">
              <Star className="h-8 w-8 text-yellow-400" />
            </div>
            <p className="text-lg font-semibold text-gray-900">
              &quot;We&#39;ve seen a major improvement in user retention and
              conversion rates since implementing Walletly. Highly
              recommended!&quot;
            </p>
            <p className="mt-4 text-gray-500">Robert Johnson</p>
            <p className="text-sm text-gray-400">Founder, WalletMaster</p>
          </div>
        </div>
      </div>
    </section>
  );
}
