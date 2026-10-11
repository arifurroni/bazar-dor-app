
import Link from "next/link";

export default function ProductCard({
  product,
}) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  const unitLabel = {
    kg: "কেজি",
    gram: "গ্রাম",
    piece: "পিস",
    liter: "লিটার",
    dozen: "ডজন",
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="block rounded-[20px] border border-[#dce7df] bg-[#fbfdfb] p-4 transition-all duration-200 hover:border-green-300 hover:shadow-md sm:p-5"
    >
      {/* Product information */}
      <div className="flex items-center gap-3">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#f0f5f0] text-3xl">
          {product.image || product.categoryIcon || "🛒"}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm md:text-lg font-bold leading-7 text-[#26352b]">
            {product.nameBn}
          </h3>

          <p className="text-sm text-[#59665d]">
            প্রতি {unitLabel[product.unit] || product.unit}
          </p>
        </div>
      </div>

      {/* Price and price change */}
      <div className="mt-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-sm text-[#536057]">
            আজকের দাম
          </p>

          <p className="mt-0.5 text-lg font-extrabold leading-7 text-[#26352b]">
            {product.today.toLocaleString("bn-BD")} টাকা
          </p>
        </div>

        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold ${
            isUp
              ? "bg-[#fff0f0] text-[#ef4444]"
              : isDown
                ? "bg-[#e8f8ee] text-[#159447]"
                : "bg-gray-100 text-gray-600"
          }`}
        >
          {isUp ? "▲" : isDown ? "▼" : "—"}

          {product.change.pct.toLocaleString("bn-BD", {
            maximumFractionDigits: 2,
          })}%
        </span>
      </div>
    </Link>
  );
}