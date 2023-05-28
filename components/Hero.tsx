'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { HeroProps, HeroWithSideImageProps } from '@/types';
import { Container } from './Container';

export const Hero = ({
  heroImage,
  heroTitle,
  heroSubtitle,
  CTAProps,
}: HeroProps) => {
  const router = useRouter();

  const handleCTA = (url: string) => {
    router.push(url);
  };

  const className =
    "hero md:min-h-[80%] min-h-full top-0 bg-[url('https://picsum.photos/1080/720')]";

  return (
    <div className={className}>
      <div className="hero-overlay bg-opacity-70">I</div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{heroTitle}</h1>
          <p className="mb-5">{heroSubtitle}</p>
          <button
            className="rounded-lg btn btn-primary"
            onClick={() => handleCTA(CTAProps.url)}
          >
            {CTAProps.label}
          </button>
        </div>
      </div>
    </div>
  );
};

export const HeroWithSideImage = ({
  side,
  heroImage,
  heroTitle,
  heroSubtitle,
  bgColor = 'currentColor',
  CTAProps,
}: HeroWithSideImageProps) => {
  const router = useRouter();

  const handleCTA = (url: string) => {
    router.push(url);
  };

  return (
    <div className={`h-[450px] hero ${bgColor}`}>
      <Container>
        <div className="flex-col min-w-full hero-content md:flex-row">
          {side == 'left' ? (
            <Image
              src={heroImage}
              alt={heroImage}
              className="max-w-sm rounded-lg shadow-2xl"
              width={300}
              height={400}
            />
          ) : (
            <></>
          )}

          <div>
            <h1 className="text-5xl font-bold">{heroTitle}</h1>
            <p className="py-6">{heroSubtitle}</p>
            <button
              className="btn btn-primary"
              onClick={() => handleCTA(CTAProps.url)}
            >
              {CTAProps.label}
            </button>
          </div>

          {side == 'right' ? (
            <Image
              src={heroImage}
              alt={heroImage}
              className="max-w-sm rounded-lg shadow-2xl"
              width={300}
              height={400}
            />
          ) : (
            <></>
          )}
        </div>
      </Container>
    </div>
  );
};
