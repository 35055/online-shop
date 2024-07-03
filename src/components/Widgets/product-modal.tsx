import { Carousel } from "@mantine/carousel";
import { Modal, Text } from "@mantine/core";

type TProps = {
  opened: boolean;
  close: () => void;
};

const ProductModal = (props: TProps) => {
  const { opened, close } = props;

  return (
    <Modal size="70%" opened={opened} onClose={close}>
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
        <Carousel.Slide>
          <img
            style={{
              objectFit: "cover",
              width: "300px",
              height: "300px",
            }}
            src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
            alt=""
          />
        </Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
        {/* ...other slides */}
      </Carousel>
    </Modal>
  );
};

export default ProductModal;
