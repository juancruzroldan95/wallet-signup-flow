import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Button } from "@/ui/button";
import Link from "next/link";

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
          FAQ
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
          Have more questions? We have the answers to help you get started with
          Walletly.
        </p>

        <div className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                What is Walletly?
              </AccordionTrigger>
              <AccordionContent>
                Walletly is a modern onboarding flow designed for digital
                wallets. It handles signup, identity checks, and user
                verification so you can focus on your core product.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                How do I integrate it?
              </AccordionTrigger>
              <AccordionContent>
                You can embed Walletly as a component or link to it as a
                standalone route. It’s fully brandable and works out of the box
                with most wallet backends.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Is Walletly secure and compliant?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Walletly follows best practices in data privacy and
                security. It supports KYC and AML flows, and is built with
                regulatory compliance in mind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Can I customize the user experience?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. You can personalize the look & feel to match your
                brand, and tweak steps in the flow depending on your needs.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
