import { setItems } from '../store/state/cartSlice';
import { ProductSkeleton } from './ProductSkeleton';
import { useDispatch } from 'react-redux';

const getProductsData = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
    {}
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch post data. Status: ${res.status}`);
  }

  const data = await res.json();
  dispatch(setItems(data));
  return data;
};

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  id: string;
}
export default async function ItemsGallery(): Promise<JSX.Element> {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  try {
    const products: ProductProps[] = await getProductsData();

    return (
      <main className="flex justify-center mx-auto mt-10 max-w-[1080px] text-white ">
        <div className="grid grid-cols-4 gap-[50px] ">
          {products.map((product, i) => (
            <div key={i}>
              <ProductSkeleton
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                category={product.category}
                product={product}
              />
            </div>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.log(error);
    return <div>Error occurred while fetching posts.</div>;
  }
}
