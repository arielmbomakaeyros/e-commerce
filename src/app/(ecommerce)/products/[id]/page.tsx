import { ProductType } from '@/lib/products';
import { useSearchParams } from 'next/navigation';
import React from 'react'

const ProductDetailsPage = ({ params, searchParams }: {
  params: {
    id: string | number
  },
  searchParams: ProductType
}) => {

  // console.log("searchParams?.namesearchParams?.name", searchParams)
  return (
    <div className='flex min-h-screen flex-col items-center justify-start gap-[3rem] p-24'>
      { params?.id } { searchParams?.name}
    </div>
  )
}

export default ProductDetailsPage







// "use client"
// import { ProductType } from '@/lib/products';
// import { useSearchParams } from 'next/navigation';
// import React from 'react'

// const ProductDetailsPage = () => {
//   const searchParams = useSearchParams (); 
//   // const newParam = searchParams.get("new")
//   console.log("...................", searchParams?.get("id"))
//   // console.log("searchParams?.namesearchParams?.name", params?.name, params?.id, params?.price)
//   return (
//     <div className='flex min-h-screen flex-col items-center justify-start gap-[3rem] p-24'>

//       { searchParams?.get("id") } { searchParams?.get("name")}
//     </div>
//   )
// }

// export default ProductDetailsPage