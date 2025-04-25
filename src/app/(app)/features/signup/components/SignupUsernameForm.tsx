"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../schema";

import StepIndicator from "./StepIndicator";
import { Button } from "@/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { useSignupStore } from "../store";
import FormTransition from "./FormTransition";

const signupUsernameSchema = signupSchema.pick({
  username: true,
  email: true,
  password: true,
});

type SignupUsernameSchema = z.infer<typeof signupUsernameSchema>;

interface SignupUsernameFormProps {
  registeredEmails: string[];
}

export default function SignupUsernameForm({
  registeredEmails,
}: SignupUsernameFormProps) {
  const router = useRouter();

  const { username, email, password } = useSignupStore((state) => state);

  const setData = useSignupStore((state) => state.setData);

  const form = useForm<SignupUsernameSchema>({
    resolver: zodResolver(signupUsernameSchema),
    defaultValues: {
      username: username || "",
      email: email || "",
      password: password || "",
    },
  });

  async function onSubmit(values: SignupUsernameSchema) {
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (registeredEmails.includes(values.email.toLowerCase())) {
      form.setError("email", {
        type: "manual",
        message: "Email is already taken",
      });
      return;
    }

    setData(values);
    router.push("/signup/kyc");
  }

  return (
    <FormTransition>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold text-primary">
              Create your Wallet
            </h1>
            <p className="text-balance text-sm text-muted-foreground">
              Choose your username and a strong password to get started.
            </p>
          </div>

          <StepIndicator current={1} />

          <div className="grid gap-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Choose your username</FormLabel>
                  <FormControl>
                    <Input placeholder="SuperWallet123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your email address</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
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
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Create a password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="At least 8 characters"
                      {...field}
                    />
                  </FormControl>
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
                  Verifying...
                  <Loader2 className="animate-spin size-4" />
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </FormTransition>
  );
}
