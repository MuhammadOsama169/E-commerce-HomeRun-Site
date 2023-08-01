import { ProductSkeleton } from './ProductSkeleton';

const getProductsData = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch post data. Status: ${res.status}`);
  }

  const data = await res.json();
  return data;
};

interface ProductProps {
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
}
export default async function ItemsGallery(): Promise<JSX.Element> {
  try {
    const products: ProductProps[] = await getProductsData();

    return (
      <main>
        {products.map((product, i) => (
          <div key={i}>
            <ProductSkeleton
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          </div>
        ))}
      </main>
    );
  } catch (error) {
    console.log(error);
    return <div>Error occurred while fetching posts.</div>;
  }
}
