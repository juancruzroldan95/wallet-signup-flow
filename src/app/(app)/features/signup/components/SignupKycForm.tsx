"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Country } from "@/types/types";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { signupSchema } from "../schema";

import { cn } from "@/utils/utils";
import StepIndicator from "./StepIndicator";
import { Button } from "@/ui/button";
import { Calendar } from "@/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { Input } from "@/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/ui/select";
import { useSignupStore } from "../store";
import FormTransition from "./FormTransition";
import { Progress } from "@/ui/progress";

const signupKycSchema = signupSchema.pick({
  fullName: true,
  dob: true,
  address: true,
  country: true,
  governmentId: true,
  governmentFile: true,
});

type SignupKycSchema = z.infer<typeof signupKycSchema>;

interface SignupKycFormProps {
  countries: Country[];
}

export default function SignupKycForm({ countries }: SignupKycFormProps) {
  const [progress, setProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [startUploading, setStartUploading] = useState(false);
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

  const form = useForm<SignupKycSchema>({
    resolver: zodResolver(signupKycSchema),
    defaultValues: {
      fullName: fullName || "",
      dob: dob ? new Date(dob) : undefined,
      address: address || "",
      country: country || "",
      governmentId: governmentId || "",
      governmentFile: "",
    },
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setIsUploading(true);
      setStartUploading(true);
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            return 100;
          }
          return prev + 25;
        });
      }, 1000);
    }
  };

  async function onSubmit(values: SignupKycSchema) {
    await new Promise((resolve) => setTimeout(resolve, 200));

    const selectedCountry = countries.find(
      (country) => country.value === values.country
    );

    if (selectedCountry && !selectedCountry.isSupported) {
      form.setError("country", {
        type: "manual",
        message: "This country is not supported",
      });
      return;
    }

    setData(values);
    router.push("/signup/setup");
  }

  useEffect(() => {
    if (!hasHydrated) return;

    if (!username || !email || !password) {
      router.push("/signup/username");
    }
  }, [hasHydrated, username, email, password, router]);

  return (
    <FormTransition>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold text-primary">
              Complete your KYC
            </h1>
            <p className="text-balance text-sm text-muted-foreground">
              We need a few more details to verify your identity.
            </p>
          </div>

          <StepIndicator current={2} />

          <div className="grid gap-5">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name</FormLabel>
                  <FormControl>
                    <Input placeholder="Jane Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Residential address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St, Apt 4B" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col md:flex-row gap-6">
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Country</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto size-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="governmentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Government ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="National ID, Passport, etc."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="governmentFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload ID Document</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      id="governmentFile"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        handleFileUpload(e);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                  {startUploading && (
                    <div className="mt-2">
                      <Progress value={progress} className="w-full" />
                      <p className="text-sm text-muted-foreground mt-1">
                        {progress < 100
                          ? "Validating..."
                          : "Verification complete!"}
                      </p>
                    </div>
                  )}
                </FormItem>
              )}
            />

            <div className="flex flex-col">
              <Button
                variant="link"
                type="button"
                className="p-0 text-sm text-muted-foreground hover:underline self-start hover:text-primary"
                onClick={() => router.push("/signup/username")}
              >
                &lt; Back
              </Button>
              <Button
                type="submit"
                className="w-full cursor-pointer"
                disabled={form.formState.isSubmitting || isUploading}
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
          </div>
        </form>
      </Form>
    </FormTransition>
  );
}
