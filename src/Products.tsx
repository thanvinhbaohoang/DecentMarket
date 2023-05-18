import React from "react";
import Product from "./Product";


export default function Products() {
    return(
        <section className="max-w-screen m-10"> 
    <h2 class="text-3xl font-bold">Products</h2>
    <p className="text-neutral-200">The easiest way to shop with crypto</p>


      <div class="max-w-screen-xl py-10">
        <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         
          
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
         <Product/>
      


        </div>
      </div>

      
    </section>
    )
}