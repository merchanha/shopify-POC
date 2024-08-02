import { Carousel } from 'components/carousel';
import HeroSection from 'components/hero/HeroSection';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* <ThreeItemGrid /> */}
      <HeroSection/>
      <Carousel />
    </>
  );
}
