import { Blocks, Handshake, ShieldCheck, UserRoundPlus } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/ui/card";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 bg-primary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            What is Walletly?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The easiest way to onboard users into your wallet app
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Walletly is a plug-and-play signup flow that handles KYC, identity,
            and UX—all in a customizable experience that makes your product
            shine.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="size-12 flex items-center justify-center rounded-md text-primary">
                <Handshake className="size-6" />
              </div>
              <div>
                <CardTitle className="text-xl">Made for Wallet Teams</CardTitle>
                <CardDescription>
                  Focus on your wallet’s core logic while Walletly handles the
                  first mile—signup, verification, and identity checks.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="size-12 flex items-center justify-center rounded-md text-primary">
                <UserRoundPlus className="size-6" />
              </div>
              <div>
                <CardTitle className="text-xl">
                  Optimized for Conversion
                </CardTitle>
                <CardDescription>
                  Our user-centric flow reduces friction at every step. Fewer
                  drop-offs, more verified users.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="size-12 flex items-center justify-center rounded-md text-primary">
                <ShieldCheck className="size-6" />
              </div>
              <div>
                <CardTitle className="text-xl">Compliant & Secure</CardTitle>
                <CardDescription>
                  Built with privacy and compliance in mind. Designed to
                  integrate with any third-party KYC provider or work with your
                  own.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="size-12 flex items-center justify-center rounded-md text-primary">
                <Blocks className="size-6" />
              </div>
              <div>
                <CardTitle className="text-xl">Easy to Integrate</CardTitle>
                <CardDescription>
                  Use it as an embedded component or standalone route. Flexible,
                  scalable, and fully brandable.
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
