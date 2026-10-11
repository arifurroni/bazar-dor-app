
import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import baseUrl from "@/services/baseUrl";

async function ProductDetails({ params }) {
  const { id } = await params;

  let product;

  try {
    const res = await fetch(
      `${baseUrl}/api/bazardor/products/${id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      notFound();
    }

    product = await res.json();
  } catch (error) {
    if (error?.digest?.startsWith("NEXT_HTTP_ERROR_FALLBACK")) {
      throw error;
    }

    throw new Error("Failed to fetch product details.");
  }

  if (!product || !product.id) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/"
          className="mb-6 inline-block text-blue-600 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="grid gap-8 rounded-2xl bg-white p-6 shadow-lg md:grid-cols-2 md:p-10">
          <div className="flex min-h-72 items-center justify-center rounded-xl bg-green-50 p-10">
            <span className="text-8xl">
              {product.image || product.categoryIcon || "🛒"}
            </span>
          </div>

          <div>
            <p className="mb-2 text-sm font-semibold text-green-700">
              {product.categoryNameBn || product.category}
            </p>

            <h1 className="mb-4 text-3xl font-bold text-gray-900">
              {product.nameBn}
            </h1>

            <p className="text-sm text-gray-500">
              Today&apos;s price per {product.unit}
            </p>

            <p className="mb-6 mt-1 text-4xl font-bold text-green-700">
              ৳{product.today}
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Yesterday</p>
                <p className="text-xl font-semibold">
                  ৳{product.yesterday}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Last week</p>
                <p className="text-xl font-semibold">
                  ৳{product.lastWeek}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Last month</p>
                <p className="text-xl font-semibold">
                  ৳{product.lastMonth}
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Price change</p>
                <p className="text-xl font-semibold">
                  {product.change
                    ? `${product.change.pct}%`
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-5 text-2xl font-bold">
            Market Price Comparison
          </h2>

          {product.markets?.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3">Market</th>
                    <th className="p-3">Division</th>
                    <th className="p-3">Minimum</th>
                    <th className="p-3">Maximum</th>
                  </tr>
                </thead>

                <tbody>
                  {product.markets.map((market, index) => (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-b hover:bg-green-50"
                    >
                      <td className="p-3">{market.market}</td>
                      <td className="p-3">{market.division}</td>
                      <td className="p-3 text-green-700">
                        ৳{market.min}
                      </td>
                      <td className="p-3">৳{market.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">
              No market prices available.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}

export default function Page({ params }) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-5xl animate-pulse p-6">
          <div className="mb-4 h-8 w-64 rounded bg-gray-200" />
          <div className="h-6 w-40 rounded bg-gray-200" />
        </div>
      }
    >
      <ProductDetails params={params} />
    </Suspense>
  );
}



