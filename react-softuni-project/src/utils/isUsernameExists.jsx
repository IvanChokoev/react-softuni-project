import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../lib/firebase"

export default async function isUsernameExists() {
    const q = query(
        collection(db, "users"), 
        where("username", "===", username)
        );

    const querrySnapshot = await getDocs(q);

    return querrySnapshot.size > 0;
}