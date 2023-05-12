import type { GetStaticProps, GetStaticPaths } from 'next';
import type { Product as ProductType } from '@/types';
import Product from '@/components/product';
import { useRouter } from 'next/router';

type ProductDetailsProps = {
  product: ProductType;
};

type ProductDetailsParams = {
  productId: string;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h3>Loading...</h3>;
  }

  return <Product product={product} />;
};

export const getStaticProps: GetStaticProps<
  ProductDetailsProps,
  ProductDetailsParams
> = async (context) => {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params?.productId}`,
  );

  const data = (await response.json()) as ProductType;

  return {
    props: { product: data },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths<
  ProductDetailsParams
> = async () => ({
  fallback: true,
  paths: [{ params: { productId: '1' } }],
});

export default ProductDetails;
