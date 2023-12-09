import { Box, Stack } from "@chakra-ui/react"
import { useAuth } from "../../hooks/auth";
import { PROTECTED, USERS } from "../../lib/routes";
import { Link } from "react-router-dom";
import UserAvatar from "../profile/Avatar";
import "./Navbar.css";


function ActiveUser() {
    const { user, isLoading } = useAuth();

    if(isLoading) return "Loading..."

    return (
        <Stack align="center" spacing="5" my="8">
            <UserAvatar user={user} />
            <Link to={`${PROTECTED}/profile/${user?.id}`}>
            <p>@{user.username}</p>
            <br></br>
            <button className='edit-custom-button'>
                Edit Profile
            </button>
            </Link>
        </Stack>
    );
}

export default function Sidebar() {
    return (
        <Box
            px="6"
            height="100vh"
            w="100%"
            maxW="300px"
            borderLeft="1px solid"
            borderLeftColor="teal.100"
            position="sticky"
            top="16"
            display={{ base: "none", md: "block" }}
        >
        <ActiveUser />
        <Box align ="center">
            <Box as="ul" borderBottom="2px solid" borderColor="teal.200" />
                <Link to={USERS}>
                    <button style={{
                        border: "1px solid",
                        borderRadius: "5px",
                        color:"teal",
                        marginTop: "1rem",
                        fontSize: "1rem",
                        padding: "0.35rem 1rem",
                        height: "auto"
                    }}>
                        All Users
                    </button>
                </Link>
            </Box>
        </Box>
    );
    }