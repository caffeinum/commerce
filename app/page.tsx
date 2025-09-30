import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';
import Image from 'next/image';

export const metadata = {
  description:
    'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-screen-2xl px-4 pb-8 pt-12 md:px-6 md:pb-12 md:pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Puppy Sneakers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 md:text-xl">
            Premium sneakers designed specifically for your four-legged friends. Keep your pup's
            paws protected and stylish with our collection of comfortable, durable footwear.
          </p>
          <div className="relative mx-auto mt-8 h-64 w-full max-w-2xl overflow-hidden rounded-lg md:h-96">
            <Image
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb"
              alt="Cute puppy"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </div>
      </section>
      <Carousel />
      <ThreeItemGrid />
      <Footer />
    </>
  );
}
