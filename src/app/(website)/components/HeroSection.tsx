import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-5 bg-gray-50 lg:max-w-2xl lg:w-full">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-50 transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

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
                <Link href="/demo">
                  <Button
                    size="lg"
                    variant="default"
                    className="text-lg px-8 py-6"
                  >
                    Try the demo for free
                    <ChevronRight className="size-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 max-w-xl object-cover sm:h-72 md:h-96 lg:w-full"
            src="https://images.unsplash.com/photo-1640920789307-1df7543f5828"
            alt="Wallet signup illustration"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
