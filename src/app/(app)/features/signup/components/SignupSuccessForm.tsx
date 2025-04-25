"use client";

import Link from "next/link";
import FormTransition from "./FormTransition";
import AnimatedCheckCircle from "./MotionCheckCircle";
import { Button } from "@/ui/button";
import { ChevronRight } from "lucide-react";

export default function SignupSuccessForm() {
  return (
    <FormTransition>
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
        <AnimatedCheckCircle />

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">
            Wallet created successfully
          </h1>
          <p className="text-muted-foreground text-sm">
            You&rsquo;re all set! You can now start using your Walletly account.
          </p>
        </div>

        <Button asChild>
          <Link href="/">
            Go to wallet
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </FormTransition>
  );
}
