import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'

const AllProducts = () => {

    const { products, searchQuery } = useAppContext()
    const [ filteredProducts, setFilteredProducts] = useState([])
    
    useEffect(()=>{
      if(searchQuery.length > 0 ){
        setFilteredProducts(products.filter(
          products => products.name.toLowerCase().includes(searchQuery.toLowerCase())
        ))}else{
          setFilteredProducts(products)
        }
    },[products, searchQuery])

  return (
    <div className='mt-16 flex flex-col'>
        <div className='flex flex-col items-end w-max'>
          <p className='text-2xl font-medium uppercase'>All Products</p>
          <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>

        <div>
          {filteredProducts.filter((product)=>product.inStock).map((products, index)=>(
            <ProductCard key={index} products={products} />
          ))}
        </div>

    </div>
  )
}

export default AllProducts