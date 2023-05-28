import Image from 'next/image';

const Carousel = () => {
  return (
    <div className="max-w-md p-4 space-x-4 carousel carousel-center bg-neutral rounded-box">
      <div className="carousel-item">
        <Image
          src="/images/stock/photo-1559703248-dcaaec9fab78.jpg"
          className="rounded-box"
          alt="Carousel image"
        />
      </div>
    </div>
  );
};

export { Carousel };
