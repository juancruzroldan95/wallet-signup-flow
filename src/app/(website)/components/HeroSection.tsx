import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/ui/button";
import HeroImageBounce from "./HeroImageBounce";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        <div className="relative z-10 pb-5 bg-gray-50 lg:max-w-2xl lg:w-1/2">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 text-center lg:text-left md:text-5xl lg:text-6xl">
                <span className="inline md:block">
                  The modern way to onboard
                </span>{" "}
                <span className="inline md:block">
                  users to <span className="text-primary">digital wallets</span>
                </span>
              </h1>
              <p className="mt-4 text-xl text-gray-600 lg:mt-6 md:max-w-xl mx-auto lg:mx-0">
                Walletly helps you design and integrate a beautiful, secure, and
                fast signup flow—built for KYC and digital identity from day
                one.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  variant="default"
                  className="text-lg flex items-center px-8 py-6 font-semibold hover:text-white"
                >
                  <Link
                    href="/signup/username"
                    className="flex items-center gap-2"
                  >
                    Try the demo for free
                    <ChevronRight className="size-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <HeroImageBounce />
      </div>
    </section>
  );
}
