import { Grid, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import useGetProduct from "../Hooks/use-get-product";
import CarouselProductModal from "../Features/carousel-product-modal";
import DescriptionProductModal from "../Features/description-product-modal";
import ReviewsProductModal from "../Features/reviews-product-modal";

const ProductModal = () => {
  const [opened, { open, close }] = useDisclosure(true);
  const { product, isLoading } = useGetProduct();
  const navigate = useNavigate();

  if (isLoading || !product) return <h1>Loading...</h1>;

  return (
    <Modal
      size="70%"
      opened={opened}
      onClose={() => {
        close();
        navigate(-1);
      }}
    >
      <Grid>
        <Grid.Col span={4}>
          <CarouselProductModal product={product} />
        </Grid.Col>
        <Grid.Col span={8}>
          <DescriptionProductModal product={product} />
        </Grid.Col>
      </Grid>
      <ReviewsProductModal product={product}/>
    </Modal>
  );
};

export default ProductModal;
