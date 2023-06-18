import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { FilterIcon } from "../../assets/icons";

const Form = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" w="full" p="15px">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon />
        </InputLeftElement>
        <Input
          type="text"
          variant="filled"
          placeholder="Search or start new chat"
          pl="70px"
        />
      </InputGroup>

      <IconButton
        aria-label="filter icon"
        variant="elevated"
        icon={<FilterIcon />}
        ml="10px"
        // size="15px"
      />
    </Flex>
  );
};

export default Form;
