import {
  Flex,
  Avatar,
  VStack,
  HStack,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import { DeliveredIcon } from "../../assets/icons";

type Props = {
  data: {
    name: string;
    src: string;
    message: string;
    date: string;
    seen: boolean;
  };
};

const SingleChat = (props: Props) => {
  const { data } = props;

  return (
    <Flex pb="10px" justifyContent="center">
      <Avatar aria-label="chat image" size="md" src={data.src} mr="15px" />
      <VStack w="full" alignItems="flex-start" lineHeight="14px">
        <HStack justifyContent="space-between" w="full">
          <Text fontSize="lg" fontWeight="400">
            {data.name}
          </Text>
          <Text as="small" color="grey.100">
            {data.date}
          </Text>
        </HStack>
        <HStack pb="10px">
          <DeliveredIcon color={data.seen ? "#53bdeb" : "#667781"} />
          <Text>{data.message}</Text>
        </HStack>
        <Box w="full">
          <Divider />
        </Box>
      </VStack>
    </Flex>
  );
};

export default SingleChat;
