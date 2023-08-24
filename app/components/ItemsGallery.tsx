'use client';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../store/state/cartSlice';
import { ProductSkeleton } from './ProductSkeleton';
import { ProductProps } from '../types/ProductTypes';
import axios from 'axios';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ItemGallery() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`
        );

        const data = response.data;
        setProducts(data);
        dispatch(setItems(data));
      } catch (error) {
        console.log('Error fetching product data:', error);
      }
    };

    fetchProductsData();
  }, [dispatch]);

  // filter logic
  const targetMens = 'Mens Clothing';
  const targetWomens = 'Womens Clothing';
  const targetShoes = 'Shoes';

  const filteredMens = products.filter((mens) => mens.category === targetMens);
  const filteredWomens = products.filter(
    (womens) => womens.category === targetWomens
  );
  const filteredShoes = products.filter(
    (shoes) => shoes.category === targetShoes
  );

  // Function to render product grid
  const renderProductGrid = (filteredProducts: ProductProps[]) => (
    <main className="flex justify-center mx-auto mt-10 max-w-[1080px] text-white relative">
      <div className="grid grid-cols-2 sm:grid-cols-3 p-2  lg:grid-cols-4 md:gap-[50px] gap-[16px] ">
        {filteredProducts.map((product, i) => (
          <div key={i}>
            <ProductSkeleton
              id={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          </div>
        ))}
      </div>
    </main>
  );

  return (
    <>
      <main className=" flex  justify-center w-auto">
        <Tabs defaultValue="all" className="md:flex md:flex-col hidden">
          <TabsList className="">
            <TabsTrigger value="all" className="md:text-xl text-sm">
              All Categories
            </TabsTrigger>
            <TabsTrigger value="Mens" className="md:text-xl text-sm">
              Mens Clothing
            </TabsTrigger>
            <TabsTrigger value="Womens" className="md:text-xl text-sm">
              Womens Clothing
            </TabsTrigger>
            <TabsTrigger value="Shoes" className="md:text-xl text-sm">
              Shoes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">{renderProductGrid(products)}</TabsContent>
          <TabsContent value="Mens">
            {renderProductGrid(filteredMens)}
          </TabsContent>
          <TabsContent value="Womens">
            {renderProductGrid(filteredWomens)}
          </TabsContent>
          <TabsContent value="Shoes">
            {renderProductGrid(filteredShoes)}
          </TabsContent>
        </Tabs>
      </main>
      {/* mobile  */}
      <section>{renderProductGrid(products)}</section>
    </>
  );
}
