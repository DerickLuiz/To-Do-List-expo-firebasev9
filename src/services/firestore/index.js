import { collection, getDocs, addDoc, deleteDoc, doc, Timestamp, updateDoc } from "firebase/firestore";
import database from "../../config/firebaseconfig";

export const listTask = async ()=>{
    const list = []
    const querySnapshot = await getDocs(collection(database, "tasks"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    list.push({...doc.data(),id:doc.id})
    });
    return list
}

export const createTask = async (name) => {
    const result = await addDoc(collection(database, "tasks"), {
            createdAt: Timestamp.now(),
            name: name
        });
    return result;
};

export const editTask = async (name,id) => {
    const result = await updateDoc(doc(database, "tasks", id), {
            name: name
        });
    return result;
};

export const deleteTask = async (id) => {
    const result = await deleteDoc(doc(database, "tasks", id))
    return result
}