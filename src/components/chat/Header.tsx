import { Avatar, Box, Flex, IconButton } from "@chakra-ui/react";
import {
  CommunityIcon,
  StatusIcon,
  NewChatIcon,
  MenuIcon,
} from "../../assets/icons.tsx";

const iconList = [
  {
    iconName: <CommunityIcon />,
    title: "Community Chat",
  },
  {
    iconName: <StatusIcon />,
    title: "Status",
  },
  {
    iconName: <NewChatIcon />,
    title: "New Chat",
  },
  {
    iconName: <MenuIcon />,
    title: "Menu",
  },
];

const Header = () => {
  return (
    <Flex
      bg="gray.100"
      w="full"
      justifyContent="space-between"
      alignItems="center"
      py="10px"
      px="12px"
    >
      <Avatar
        name="Prosper Otemuyiwa"
        src="https://bit.ly/prosper-baba"
        size="md"
        mr={4}
      />
      <Box>
        {iconList.map((item, index) => {
          return (
            <IconButton
              key={index}
              icon={item.iconName}
              aria-label={item.title}
              color="gray.600"
              fontSize="10px"
              px="10px"
            />
          );
        })}
      </Box>
    </Flex>
  );
};

export default Header;
