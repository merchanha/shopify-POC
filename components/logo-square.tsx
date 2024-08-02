import Image from 'next/image';
import logo from '../public/arg-logo.jpg';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <Image src={logo} width={100} height={50} alt="Picture of the author" />
  );
}
