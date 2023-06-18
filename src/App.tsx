import { Flex } from "@chakra-ui/react";
import Chat from "./components/chat/Chat";
import MainPage from "./components/MainPage";
function App() {
  return (
    <>
      <Flex bg="gray.50" h="100vh">
        <Chat />
        <MainPage />
      </Flex>
    </>
  );
}

export default App;
