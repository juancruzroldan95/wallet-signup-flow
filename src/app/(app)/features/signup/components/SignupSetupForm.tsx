"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Currency } from "@/types/types";
import { HelpCircle, Loader2 } from "lucide-react";
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
import FormTransition from "./FormTransition";
import { currenciesIcons } from "@/lib/CurrencyIcon";

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

  const setData = useSignupStore((state) => state.setData);

  const form = useForm<SignupSetupSchema>({
    resolver: zodResolver(signupSetupSchema),
    defaultValues: {
      recoveryEmail: "",
      currency: "",
      terms: false,
    },
  });

  async function onSubmit(values: SignupSetupSchema) {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const payload = {
      username,
      email,
      password,
      fullName,
      dob,
      address,
      country,
      governmentId,
      ...values,
      createdAt: new Date().toISOString(), // Usually generated on the backend
    };

    console.log("Final payload:", payload);
    setData(values);
    router.push("/signup/success");
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
    <FormTransition>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold text-primary">
              Setup Your Wallet
            </h1>
            <p className="text-balance text-sm text-muted-foreground">
              Provide additional details to complete your wallet setup.
            </p>
          </div>

          <StepIndicator current={3} />

          <div className="grid gap-5">
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
                          <SelectItem
                            key={currency.value}
                            value={currency.value}
                          >
                            <div className="flex items-center gap-2">
                              {currenciesIcons[
                                currency.value.toLowerCase() as keyof typeof currenciesIcons
                              ] ?? <HelpCircle />}{" "}
                              {currency.label}
                            </div>
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

            <div className="flex flex-col">
              <Button
                variant="link"
                type="button"
                className="p-0 text-sm text-muted-foreground hover:underline self-start hover:text-primary"
                onClick={() => router.push("/signup/kyc")}
              >
                &lt; Back
              </Button>
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
          </div>
        </form>
      </Form>
    </FormTransition>
  );
}
