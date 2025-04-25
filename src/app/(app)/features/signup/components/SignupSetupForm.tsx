"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Currency } from "@/types/types";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../schema";

import StepIndicator from "./StepIndicator";
import { Button } from "@/ui/button";
import { Checkbox } from "@/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { useSignupStore } from "../store";

const signupSetupSchema = signupSchema.pick({
  recoveryEmail: true,
  currency: true,
  terms: true,
});

type SignupSetupSchema = z.infer<typeof signupSetupSchema>;

interface SignupSetupFormProps {
  currencies: Currency[];
}

export default function SignupSetupForm({ currencies }: SignupSetupFormProps) {
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
    hasHydrated,
  } = useSignupStore((state) => state);

  const form = useForm<SignupSetupSchema>({
    resolver: zodResolver(signupSetupSchema),
    defaultValues: {
      recoveryEmail: "",
      currency: "",
      terms: false,
    },
  });

  async function onSubmit(values: SignupSetupSchema) {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const payload = {
      ...values,
      username,
      email,
      password,
      fullName,
      dob,
      address,
      country,
      governmentId,
    };

    console.log("Final payload:", payload);
    // router.push("/signup/confirmation");
  }

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
    router,
  ]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-primary">Setup Your Wallet</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Provide additional details to complete your wallet setup.
          </p>
        </div>

        <StepIndicator current={3} />

        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="recoveryEmail"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Recovery Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Your Currency</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a currency" />
                    </SelectTrigger>
                    <SelectContent>
                      {currencies.map((currency) => (
                        <SelectItem key={currency.value} value={currency.value}>
                          {currency.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-center space-x-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>I accept the terms and conditions</FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? (
              <>
                Submitting...
                <Loader2 className="animate-spin size-4" />
              </>
            ) : (
              "Continue"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
