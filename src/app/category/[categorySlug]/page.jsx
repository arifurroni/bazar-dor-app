import baseUrl from "@/services/baseUrl";
import Link from "next/link";
import { Suspense } from "react";
import React from 'react';

const getCategoryProduts = async (categorySlug) => {
    const res = await fetch(`${baseUrl}/api/bazardor/products?category=${categorySlug}`);
    const data = await res.json();
    return data;
}

const CategoryContent = async ({ params }) => {
  const { categorySlug } = await params;

  const categoryProducts = await getCategoryProduts(categorySlug);
//   console.log(categoryProducts);

  return (
      <div className="mx-[5%] md:mx-[10%] my-5">
          <div className="flex gap-1">
              <Link href={'/'}>Home</Link>
              <span>≫</span>
              <h1>Category: {categorySlug}</h1>
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