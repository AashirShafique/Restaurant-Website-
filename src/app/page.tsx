// / pages/index.tsx (or page.tsx if you're using custom entry point)
// import { Product } from "@/sanity/schemaTypes1/product";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import React from 'react';
import Link from 'next/link';
import next from 'next';
import user1 from "@/sanity/schema/user1";

export default async function HomePage() {
  const data = await client.fetch(`*[_type == "user"]`, {}, { cache: 'no-store' })
  console.log(data);

  const data1 = await client.fetch(`*[_type == "user1"]`, {}, { cache: 'no-store' })
  console.log(data);

  const data2 = await client.fetch(`*[_type == "user2"]`, {}, { cache: 'no-store' })
  console.log(data);

  const data3 = await client.fetch(`*[_type == "user3"]`, {}, { cache: 'no-store' })
  console.log(data);

 
  return (

    
  
<div>

<div className="flex px-40 py-14 gap-1">
{/* <Image src= '/images/Foodi.png' alt= 'Foodi Photo' width={100} height={50} /> */}
</div>

<div className="px-40 py-1">
  <h1 className="text-4xl font-bold leading-tight -mt-8">
    Dive into Delights <br />
    Of Delectable <span className="text-green-500">Food</span>
  </h1>
  <h2 className="text-lg font-normal text-gray-600 mt-8 max-w-2xl">
    Where Each Plate Weaves a Story of Culinary  <br /> Mastery  and Passionate Craftsmanship
  </h2>
</div>


<div className="flex px-40 py-8"> 
  

             <button className="bg-green-400 text-white px-6 py-2 rounded-full shadow-md hover:bg-green-600 ">
    Order Now
  </button>

  <div className="flex items-center space-x-2 cursor-pointer px-4 gap-4 ">
    <span className="text-gray-500 font-bold">Watch Video</span>
    <div className="w-10 h-10 flex justify-center items-center bg-white rounded-full shadow-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-6 h-6">
        <path d="M6.5 3.5v9l7-4.5-7-4.5z"/>
      </svg>
    </div>
  </div>
</div>


 <div className="relative flex justify-end px-[100px] -mt-60 absolute right-10 top-[-100px] ">
 <Image src= '/images/Girl2.png' alt= 'Girl2 Photo' width={500} height={500}/>
  </div>

  <div className="px-6 text-center">
  <h1 className="text-red-500 text-sm font-medium uppercase tracking-wide">
    Customer Favorites
  </h1>
  <h1 className="text-4xl font-bold mt-2">
    Popular Categories
  </h1>
</div>


  <div className="flex py-8 gap-20 px-[100px]">
      {/* <h1 className="text-4xl font-bold">Users Data</h1> */}
      {
        data.map((user: any, index: number) => {
          return (

            <div>
              {/* {user.productName} */}
              <Image src={urlFor(user.ProductImage).url()} width={200} height={200} alt="image" />
            </div>
          )
        })
      }

</div>

<div className="px-[100px] py-10">
  <h1 className="text-red-500 text-sm font-medium uppercase tracking-wide">
    Special Dishes
  </h1>
  <h1 className="text-4xl font-bold leading-snug mt-2">
    Standout Dishes <br />
    From Our Menu
  </h1>
</div>
 
 
<div className="flex  px-[200px]  gap-20 justify-center ">
      {/* <h1 className="text-4xl font-bold">Users Data</h1> */}
      {
        data1.map((user: any, index: number) => {
          return (

            <div>
              {/* {user.productName} */}
              <Image src={urlFor(user.ProductImage).url()} width={200} height={200} alt="image" />
            </div>
          )
        })
      }

</div>

<div className="px-40 py-20">
      {/* <h1 className="text-4xl font-bold">Users Data</h1> */}
      {
        data2.map((user: any, index: number) => {
          return (

            <div>
              {/* {user.productName} */}
              <Image src={urlFor(user.ProductImage).url()} width={400} height={400} alt="image" />
            </div>
          )
        })
      }

</div>

<div className="px-80 ml-60 -mt-80 ">
  <h1 className="text-normal text-red-500 text-4x1 font-semibold ">
    T E S T I M O N I A L S 
  </h1>
  <h1 className="text-4xl font-bold mt-2">
    What Our Customers <br/>
    Say About Us 
  </h1>

  <h1 className="text-normal text-gray-600 py-6">
  “I had the pleasure of dining at Foodi last night, and <br/> 
  I'm still raving about the experience! The attention to <br/> 
  detail in presentation and service was impeccable”
  </h1>
</div>

<div className="px-80 ml-40 py-6">
      {/* <h1 className="text-4xl font-bold">Users Data</h1> */}
      {
        data3.map((user: any, index: number) => {
          return (

            <div>
              {/* {user.productName} */}
              <Image src={urlFor(user.ProductImage).url()} width={100} height={100} alt="image" />
            </div>
          )
        })
      }

</div>

<div>
  <h1>
  <div className="ml-80 px-80  -mt-20">
      <p className="text-gray-1000 font-medium">Customer Feedback</p>
      <p className="text-yellow-500 text-sm font-bold">
        ★ 4.9 <span className="text-gray-400">(18.6k Reviews)</span>
      </p>
    </div>
  </h1>
</div>

<div className="flex justify-end gap-6 py-4">
<Image src= '/images/Presentation1000.png' alt= 'presentation1000 Photo' width={150} height={200}/>
<Image src= '/images/Presentation1100.png' alt= 'presentation1100 Photo' width={150} height={200}/>
</div>
<div className="flex justify-end gap-6 ">
<Image src= '/images/Presentation1200.png' alt= 'presentation1200 Photo' width={150} height={200}/>
<Image src= '/images/Presentation1300.png' alt= 'presentation1300 Photo' width={150} height={200}/>
</div>

<div className=" px-20  ml-20">
<h1 className="text-normal text-red-500 text-4x1 font-semibold">
  Our Story & Services
</h1>
<h1 className="text-4xl font-bold mt-6">
  Our Culinary Jurney <br/>
  And Services
</h1>
<h1 className="font-normal text-gray-600 py-4 mt-4">
Rooted in passion, we curate unforgettable dining <br />
 experiences and offer exceptional services,<br />
  blending culinary artistry with warm hospitality.
</h1>
 </div>
<div className="px-40 py-4">
<Image src= '/images/Presentation1400.png' alt= 'presentation1400 Photo' width={150} height={150}/>
</div>


    


 </div>


  );
};

