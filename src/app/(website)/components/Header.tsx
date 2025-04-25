"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/ui/button";
import { WalletMinimal } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "#how-it-works", label: "How it works" },
    { href: "#faq", label: "FAQ" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <header className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-center md:flex-nowrap">
        <Link
          href="#"
          className="text-3xl font-extrabold text-primary flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <WalletMinimal className="hidden md:inline size-8 mr-2 stroke-[3]" />
          Walletly
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
          <Button
            size="lg"
            className="text-md md:font-semibold hover:text-white"
          >
            <Link href="/signup/username" onClick={() => setIsOpen(false)}>
              Try it for free
            </Link>
          </Button>
          <button
            type="button"
            className="inline-flex items-center p-2 size-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col w-full p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-3 rounded md:p-0 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
