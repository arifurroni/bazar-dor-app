# 🛒 বাজার দর | BazarDor

### Your Daily Market Price Guide 🇧🇩

**BazarDor (বাজার দর)** is a modern, responsive web application that helps users explore daily market prices of essential products in Bangladesh. From vegetables and fruits to fish, meat, eggs, and other groceries, BazarDor makes it easy to check product prices, compare price changes, and stay informed about the daily market.

---

## ✨ Key Features

* 📊 **Daily Market Prices** — Explore the latest prices of essential products through a clean and user-friendly dashboard.
* 📈 **Price Change Tracking** — Identify products with increasing or decreasing prices and view percentage changes.
* 🛍️ **Product Catalog** — Browse products with their names, images, prices, units, and categories.
* 🗂️ **Category-Based Browsing** — Explore products by categories such as vegetables, fruits, fish, meat, eggs, and more.
* 🔐 **Secure User Authentication** — Support user registration, login, and session management with Better Auth.

---

## 🛠️ Technologies Used

| Technology                                    | Purpose                                           |
| --------------------------------------------- | ------------------------------------------------- |
| [Next.js](https://nextjs.org/)                | React framework for building the web application  |
| [React](https://react.dev/)                   | Building reusable UI components                   |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and maintainable code                 |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first styling and responsive layouts      |
| [DaisyUI](https://daisyui.com/)               | Prebuilt UI components and design utilities       |
| [Sonner](https://sonner.emilkowal.ski/)       | Toast notifications and user feedback             |
| [Better Auth](https://www.better-auth.com/)   | Authentication and session management             |
| REST API                                      | Fetching product, category, and market price data |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

* [Node.js](https://nodejs.org/) (LTS recommended)
* npm
* Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR_USERNAME/bazardor.git
```

**2. Navigate to the project directory**

```bash
cd bazardor
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Visit http://localhost:3000 in your browser.

---

## 🌐 API Integration

BazarDor uses a REST API to retrieve product and category information.

<!-- **API Base URL:**

```text
https://api.api-store.workers.dev/api/bazardor
``` -->

| Endpoint        | Description                             |
| --------------- | --------------------------------------- |
| `/categories`   | Retrieve all product categories         |
| `/products`     | Retrieve all products                   |
| `/products/:id` | Retrieve details for a specific product |

---

## 🎨 Design & User Experience

* Clean, modern dashboard with a green-themed design.
* Bengali and English language interface for users.
* Responsive layout for desktop, tablet, and mobile devices.
* Product cards with clear pricing and price-change indicators.
* Easy navigation between categories and product details.

---

## 🎯 Project Goal

The goal of BazarDor is to make everyday market price information more accessible to people in Bangladesh, helping them stay informed about price changes and make better-informed shopping decisions.

---

## 👨‍💻 Developer

## Md. Arifur Rahman

Developed with ❤️ using Next.js, JavaScript, and modern web technologies.

**বাজার দর — প্রতিদিনের বাজারদর, এক নজরে!** 🇧🇩





---
---
---
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
