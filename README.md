# Walletly

Walletly is a modern onboarding experience for digital wallets. It focuses on creating smooth, validated, multi-step signup flows — ideal for fintech and finance-related products where regulatory and KYC compliance is required.

This repository includes a fully functional demo of Walletly's signup experience, showcasing clean architecture, strong UX patterns, and type-safe form handling.

> **Note**: This is a technical demo of Walletly’s signup flow. It is not a production-ready application.

## Features

- Full responsive design, optimized for mobile and desktop.
- Multistep signup flow with route protection and progress indicators.
- Upload and verify documents securely during KYC.
- Persistence of signup data across sessions and refreshes.
- Smooth animated transitions between steps.

## Technologies

- **Next.js 15 (App Router)** as de React framework.
- **React 19** for client-side interactivity.
- **Tailwind CSS v4** as the CSS framework.
- **shadcn/ui** for UI components.
- **React Hook Form** For performant, accessible form handling.
- **Zod** as the type-safe schema validation and error handling.
- **Zustand** as the state management, used for persisting form state across steps.
- **TypeScript** as the programming language.
- **Vercel** for deployment.

## Getting Started

```bash
# Clone the repo
git clone https://github.com/juancruzroldan95/wallet-signup-flow.git
cd wallet-signup-flow

# Install dependencies
npm install

# Run the app locally
npm run dev
```

Access the app at http://localhost:3000.

## Live Demo

🚀 [walletly-demo.vercel.app](https://walletly-demo.vercel.app)

## Acknowledgements
- Icons from [Lucide](https://lucide.dev/).
- Fonts from [Fontsource](https://fontsource.org/).
- More components from [Flowbite](https://flowbite.com/).
- Mockups made with [Shots](https://shots.so/).
- Image optimization with [Squoosh](https://squoosh.app/).
