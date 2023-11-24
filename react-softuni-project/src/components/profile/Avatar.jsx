import { Avatar as ChakraAvatar } from "@chakra-ui/react";
import { PROTECTED } from "../../lib/routes";
import { Link } from "react-router-dom";

export default function UserAvatar({ user, size = "xl"}) {

  if (!user) {
    return null; 
  }
  
  return (
    <ChakraAvatar
      as={Link}
      to={`${PROTECTED}/profile/${user.id}`}
      name={user.username}
      size={size}
      src={user.avatar}
      _hover={{ cursor: "pointer", opacity: "0.8" }}
    />
  );
}

//something is wrong with the UseAvatar, try to fix it FIXED