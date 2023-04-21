import React from "react";
import {BiRightArrowAlt} from "react-icons/bi";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center justify-center h-[40vh] bg-slate-800">

        <h1 className="font-bold text-6xl m-6"> Be Your Own Bank</h1>
        <p>Pay for your daily needs with Bitcoin, ETH and more cryptocurrencies.
        </p>


        <div className="w-1/2 m-6 flex justify-center">
            <button type="button" class="text-white flex items-center justify-center w-1/4 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800  font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Gift Cards <BiRightArrowAlt size={20}/>
            </button>
            <button type="button" class="text-white flex items-center justify-center w-1/4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800  font-medium rounded-3xl text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Phone Refills <BiRightArrowAlt size={20}/>
            </button>
        </div> 

        <div className="font-bold flex justify-around items-center mt-20">
            <BiRightArrowAlt size={30}/>
             Trusted by 1,000,000 Customers 
        </div>

    </div>
  );
}