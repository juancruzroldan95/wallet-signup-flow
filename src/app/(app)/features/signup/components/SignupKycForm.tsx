"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Country } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
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

const signupKycSchema = signupSchema.pick({
  fullName: true,
  dob: true,
  address: true,
  country: true,
  governmentId: true,
});

type SignupKycSchema = z.infer<typeof signupKycSchema>;

interface SignupKycFormProps {
  countries: Country[];
}

export default function SignupKycForm({ countries }: SignupKycFormProps) {
  const router = useRouter();

  const form = useForm<SignupKycSchema>({
    resolver: zodResolver(signupKycSchema),
    defaultValues: {
      fullName: "",
      dob: undefined,
      address: "",
      country: "",
      governmentId: "",
    },
  });

  async function onSubmit(values: SignupKycSchema) {
    console.log("onSubmit", values);
    await new Promise((resolve) => setTimeout(resolve, 2000));

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

    router.push("/signup/setup");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-primary">Complete your KYC</h1>
          <p className="text-balance text-sm text-muted-foreground">
            We need a few more details to verify your identity.
          </p>
        </div>

        <StepIndicator current={2} />

        <div className="grid gap-6">
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
            name="dob"
            render={({ field }) => (
              <FormItem>
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

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
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
            name="governmentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Government-issued ID</FormLabel>
                <FormControl>
                  <Input placeholder="National ID, Passport, etc." {...field} />
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
  );
}
