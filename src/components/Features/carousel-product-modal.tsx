import { Carousel } from "@mantine/carousel";
import { TProduct } from "../types/product";

type TProps = {
  product: TProduct;
};

const CarouselProductModal = (props: TProps) => {
  const { product } = props;

  return (
    <Carousel
      maw={320}
      mx="auto"
      withIndicators
      height={300}
      styles={{
        indicator: {
          width: "30px",
          height: "10px",
          transition: "width 250ms ease",

          "&[data-active]": {
            width: "60px",
          },
        },
      }}
    >
      {product.images.map((img, i) => (
        <Carousel.Slide key={i}>
          <img
            style={{
              objectFit: "cover",
              width: "300px",
              height: "300px",
            }}
            src={img}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};

export default CarouselProductModal;
