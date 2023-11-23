import { useState } from "react";
import { doc, setDoc, query, collection, where, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";
import { uuidv4 } from "@firebase/util"
import { useToast } from "@chakra-ui/react";
import { useCollectionData } from "react-firebase-hooks/firestore"

export function useAddPost() {
    const[isLoading, setLoading] = useState(false);
    const toast = useToast();

    async function addPost(post) {
        setLoading(true);
        const id = uuidv4();
        await setDoc(doc(db, "posts", id), {
            ...post, 
            id,
            date: Date.now(),
            likes: [],
        });
        toast({
            title: "Post added successfully!",
            status: "success",
            isClosable: true,
            position: "top",
            duration: 5000,
        });
        setLoading(false);
    }
    return{addPost, isLoading};
}

export function usePost(id) {
    let q;

    // Check if id is defined before constructing the query
    if (id) {
        q = query(collection(db, 'posts'), where('id', '==', id), orderBy('date', 'desc'));
    } else {
        // Handle the case where id is undefined
        q = query(collection(db, 'posts'));
    }

    
    const [posts, isLoading, error] = useCollectionData(q);

    if (error) {
        throw error;
    }

    return { posts, isLoading };
}