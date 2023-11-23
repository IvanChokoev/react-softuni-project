import {useDocumentData} from "react-firebase-hooks/firestore";
import { db } from "../lib/firebase";
import { doc, query } from "firebase/firestore"; 

export function useUser(id) {
    const q = query(doc(db, "users", id));
    const [user, isLoading] = useDocumentData(q);
    
    return { user, isLoading };
}