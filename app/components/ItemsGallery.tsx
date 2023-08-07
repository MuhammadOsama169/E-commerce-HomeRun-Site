import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setItems } from '../store/state/cartSlice';
import { ProductSkeleton } from './ProductSkeleton';
import { ProductProps } from '../types/ProductTypes';
import axios from 'axios';

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

  return (
    <main className="flex justify-center mx-auto mt-10 max-w-[1080px] text-white relative">
      <div className="grid grid-cols-4 gap-[50px]">
        {products.map((product, i) => (
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
}
