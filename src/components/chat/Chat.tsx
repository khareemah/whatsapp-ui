import { Flex } from "@chakra-ui/react";
import ChatList from "./ChatList";
import Header from "./Header";
import Form from "./Form";

const Chat = () => {
  return (
    <>
      <Flex
        h="full"
        w="420px"
        direction="column"
        alignItems="flex-start"
        borderRightColor="gray.100"
        borderWidth={1}
        bg="white"
      >
        <Header />
        <Form />
        <ChatList />
      </Flex>
    </>
  );
};
export default Chat;
