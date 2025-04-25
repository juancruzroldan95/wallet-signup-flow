import Image from "next/image";
import Link from "next/link";
import { WalletMinimal } from "lucide-react";

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/images/signup.webp"
          alt="Signup"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, 60vw"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          priority
        />
        <div className="absolute bottom-6 left-6 max-w-md bg-black/60 text-white p-4 rounded-xl shadow-lg">
          <i data-lucide="quote" className="w-6 h-6 mb-2 text-purple-400"></i>
          <figure>
            <blockquote className="italic">
              <p>
                This signup flow was just what we were after; it&rsquo;s modern,
                works perfectly and is visually beautiful &mdash; we
                couldn&rsquo;t be happier.
              </p>
            </blockquote>
            <figcaption className="mt-2 text-gray-300">
              &mdash; Richard, Walletly User
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10 max-h-screen overflow-y-auto">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link
            href="#"
            className="flex items-center gap-2 text-primary font-extrabold"
          >
            <div className="flex items-center justify-center text-primary">
              <WalletMinimal className="size-5 stroke-[3]" />
            </div>
            Walletly
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
    </div>
  );
}
