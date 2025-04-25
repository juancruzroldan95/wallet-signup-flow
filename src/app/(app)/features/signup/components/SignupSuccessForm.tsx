"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import FormTransition from "./FormTransition";
import AnimatedCheckCircle from "./MotionCheckCircle";
import { Button } from "@/ui/button";
import { ChevronRight } from "lucide-react";
import { useSignupStore } from "../store";

export default function SignupSuccessForm() {
  const router = useRouter();

  const {
    username,
    email,
    password,
    fullName,
    dob,
    address,
    country,
    governmentId,
    recoveryEmail,
    currency,
    terms,
    hasHydrated,
  } = useSignupStore((state) => state);

  useEffect(() => {
    if (!hasHydrated) return;

    if (!username || !email || !password) {
      router.push("/signup/username");
      return;
    }

    if (!fullName || !dob || !address || !country || !governmentId) {
      router.push("/signup/kyc");
      return;
    }

    if (!recoveryEmail || !currency || !terms) {
      router.push("/signup/setup");
      return;
    }
  }, [
    hasHydrated,
    username,
    email,
    password,
    fullName,
    dob,
    address,
    country,
    governmentId,
    recoveryEmail,
    currency,
    terms,
    router,
  ]);

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
            Go to your wallet
            <ChevronRight />
          </Link>
        </Button>
      </div>
    </FormTransition>
  );
}
