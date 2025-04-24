import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/ui/button";

export default function FinalCTASection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Give your users the signup experience they deserve
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Whether you&#39;re launching your first wallet or scaling globally,
          Walletly is your best first impression.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/demo">
            <Button size="lg" variant="default" className="text-lg px-8 py-6">
              Try Walletly for Free
              <ChevronRight className="size-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
