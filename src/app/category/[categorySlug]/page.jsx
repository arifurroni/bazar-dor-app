import ProductCard from "@/components/ProductCard";
import baseUrl from "@/services/baseUrl";
import Link from "next/link";
import { Suspense } from "react";
import React from 'react';

const getCategoryProduts = async (categorySlug) => {
    const res = await fetch(`${baseUrl}/api/bazardor/products?category=${categorySlug}`);
    const data = await res.json();
    return data;
}

const getCategories = async () => {
    const res = await fetch(`${baseUrl}/api/bazardor/categories`);
    const data = await res.json();
    return data;
}

const CategoryContent = async ({ params }) => {
  const { categorySlug } = await params;

  const categoryProducts = await getCategoryProduts(categorySlug);
//   console.log(categoryProducts);

const categories = await getCategories();
// console.log(categories);

const currentCategory = categories.find(c => c.slug == categorySlug);
// console.log(currentCategory);


  return (
      <div className="mx-[5%] md:mx-[10%] mt-2">
          <div className="flex gap-1 my-3">
              <Link href={'/'}>Home</Link>
              <span>≫</span>
              <h1>Category: {currentCategory?.nameBn}</h1>
          </div>
          <div>
            <div className="flex gap-2 items-center border rounded-2xl p-2 bg-white">
                <div className="text-4xl">{currentCategory?.icon}</div>
                <div>
                    <h2 className="text-md font-bold">{currentCategory?.nameBn}</h2>
                    <p className="text-xs">{`Today's ${categoryProducts?.length} items price & changes`}</p>
                </div>
            </div>
            <div className="flex gap-1 items-center justify-end border rounded-2xl p-2 my-2 bg-white">
                <div className="my-2 px-2"><p>Sort:</p></div>
                {/* Need to implement Sort */}
                <div className="border border-gray-300 rounded-lg px-3">Default</div>
            </div>
            <div>
                <div className="my-2 px-2">{`Showing total: ${categoryProducts?.length} products`}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {
                categoryProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
            }
          </div>
          
          {/* Fetch and display category products here */}
      </div>
  );
};

const CategoryProducts = ({ params }) => {
  return (
    <Suspense fallback={<div>Loading products...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  );
};

export default CategoryProducts;



// import React from 'react';

// const CategoryProducts = async ({params}) => {
//     const {categorySlug} = await params;
//     console.log(categorySlug);
//     return (
//         <div>
//             Product of a Category
//         </div>
//     );
// };

// export default CategoryProducts;