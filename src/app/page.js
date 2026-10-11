import BannerPage from "@/components/Banner";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";
import baseUrl from "@/services/baseUrl";
import Image from "next/image";


const getProducts = async () => {
    const res = await fetch(`${baseUrl}/api/bazardor/products`);
    const data = await res.json();
    return data;
}

export default async function Home() {

  const products = await getProducts();

  const upProducts = products.filter(p => p.change.dir == "up")

  const downProducts = products.filter(p => p.change.dir == "down")
  // console.log(downProducts);

  return (
    <div>
      <Marquee products={products}></Marquee>
      <BannerPage />

      <div className="mx[5%] md:mx-[10%] my-10">
        <h2 className="font-bold text-xl"><span className="text-[#D03739]">▲</span> আজ দাম বেড়েছে</h2>
        <div className="my-2 px-2 text-xs">{`Showing total: ${upProducts.length} products`}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-5">
          {
            upProducts.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
          }
        </div>
      </div>

      <div className="mx[5%] md:mx-[10%] my-10">
        <h2 className="font-bold px-2 text-xl"><span className="text-[#1A9951]">▼</span> আজ দাম কমেছে</h2>
        <div className="my-2 px-2 text-xs">{`Showing total: ${downProducts.length} products`}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-5">
          {
            downProducts.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
          }
        </div>
      </div>

      <div className="mx[5%] md:mx-[10%] my-10">
        <h2 className="font-bold px-2 text-xl">সব পণ্য</h2>
        <div className="my-2 px-2 text-sm">{`Showing total: ${products.length} products`}</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-5">
          {
            products.map((product) => <ProductCard key={product.id} product={product}></ProductCard>)
          }
        </div>
      </div>
      
    </div>
  );
}
