import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase";
import { useState } from "react";
import { DASHBOARD, LOGIN } from "../lib/routes";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { setDoc, doc } from "firebase/firestore";
import isUsernameExists from "../utils/isUsernameExists";

export function useAuth() {
    const [authUser, isLoading, error] = useAuthState(auth); 
    return {user: authUser, isLoading, error};
}

export function useLogin() {
    const [isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function login({ email, password, redirectTo = DASHBOARD }) {
        setLoading(true);

        try {
            await signInWithEmailAndPassword(auth, email, password);
            toast({
                title: "You are logged in",
                status: "success",
                isClosable: true,
                position: "top",
                duration: 5000,
            });
            navigate(redirectTo);
        } catch (error) {
            toast({
                title: "Logging in failed",
                description: error.message,
                status: "error",
                isClosable: true,
                position: "top",
                duration: 5000,
            });
            return false; //return false if login failed
        } finally {
            setLoading(false);
            return true; //return true of login succeeded
        }
    }

    return { login, isLoading };
}

export function useRegister() {
    const[isLoading, setLoading] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    async function register({
        username, 
        email, 
        password, 
        redirectTo = DASHBOARD,
    }) {
        setLoading(true);

        const usernameExists = await isUsernameExists(username);

        if(usernameExists) {
            toast({
                title: "Userame already exists",
                status: "error",
                isClosable: true,
                position:"top",
                duration: 5000,
            });
            setLoading(false);

        }else{
            try{
                const res = createUserWithEmailAndPassword(auth, email, password);

                await setDoc(doc(db, "users", res.user.uid), {
                    id: res.user.uid,
                    username: username.toLowerCase(),
                    avatar: "",
                    date: Date.now(),
                });

                toast({
                    title: "Account created",
                    description: "You are logged in",
                    status: "success",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });

                navigate(redirectTo);
            } catch(error){
                toast({
                    title: "Signing Up failed",
                    description: error.message,
                    status: "error",
                    isClosable: true,
                    position: "top",
                    duration: 5000,
                });
            } finally {
                setLoading(false);
            }
        }
        setLoading(false);
    }

    return{register, isLoading};
}

export function useLogout() {
    const [signOut, isLoading, error] = useSignOut(auth);
    const toast = useToast();
    const navigate = useNavigate();

    async function logout() {
        if(await signOut()) {
            toast({
                title:"Successfully logged out",
                status: "success",
                isClosable: true,
                position: "top",
                duration: 5000,
            })
            navigate(LOGIN);
        };
    }

    return{logout, isLoading};
}