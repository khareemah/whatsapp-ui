import { Flex } from "@chakra-ui/react";
import SingleChat from "./SingleChat";
import { chatData } from "../../assets/chatData";
const ChatList = () => {
  return (
    <Flex direction="column" overflowY="auto" w="full" px="15px">
      {chatData.map((data, index) => {
        return <SingleChat key={index} data={data} />;
      })}
    </Flex>
  );
};

export default ChatList;
