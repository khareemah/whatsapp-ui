import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { EncryptedIcon, GeneralIcon } from "../assets/icons";
const MainPage = () => {
  return (
    <Flex
      direction="column"
      borderBottom="6px solid #43c960"
      alignItems="center"
      justifyContent="center"
      flex={1}
      color="#41525d"
      position="relative"
    >
      <Box mb="50px">
        <GeneralIcon />
      </Box>
      <Heading size="xl" pb="15px" fontWeight="thin">
        Whatsapp Web
      </Heading>
      <Text fontSize="sm">
        Send and receive messages without keeping your phone online
      </Text>
      <Text fontSize="sm">
        Use Whatsapp on up to 4 linked device and 1 phone at the same time
      </Text>

      <HStack color="#8696a0" position="absolute" bottom="40px">
        <EncryptedIcon />
        <Text fontSize="sm">End-to-end encryption</Text>
      </HStack>
    </Flex>
    //
  );
};
export default MainPage;
