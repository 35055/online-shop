import { Box, Flex, Rating, Tabs, Text, Title } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
  IconFileDescription,
} from "@tabler/icons-react";
import { TProduct } from "../types/product";
import FormattedDate from "../Shared/formatted-date";

type TProps = {
  product: TProduct;
};

const ReviewsProductModal = (props: TProps) => {
  const { product } = props;

  console.log(product.reviews[0].date);

  return (
    <Tabs mt="md" variant="outline" radius="md" defaultValue="description">
      <Tabs.List>
        <Tabs.Tab value="description" icon={<IconFileDescription stroke={2} />}>
          Description
        </Tabs.Tab>
        <Tabs.Tab value="reviews" icon={<IconMessageCircle stroke={2} />}>
          Reviews
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="description" pt="xs">
        {product.description}
      </Tabs.Panel>

      <Tabs.Panel value="reviews" pt="xs">
        <Flex direction="column" rowGap="sm">
          {product.reviews.map((review, i) => (
            <Box key={i}>
              <Title order={4}>{review.reviewerName}</Title>
              <Flex align="center" columnGap="xs">
                <Rating size="xs" value={review.rating} readOnly />
                <Text size="xs">
                  <FormattedDate dateString={review.date} />
                </Text>
              </Flex>
              <Text>{review.comment}</Text>
            </Box>
          ))}
        </Flex>
      </Tabs.Panel>
    </Tabs>
  );
};

export default ReviewsProductModal;
