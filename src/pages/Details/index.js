import React,{useState, useEffect, useCallback} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native"

import styles from "./style";

import { editTask } from '../../services/firestore/index'

export default function Details({navigation, route}){

    const [nameEdit,setNameEdit] = useState(route.params.name)
    const id = route.params.id;

    async function buttonEdit(name, id){
        const result = await editTask(name, id)
        navigation.navigate("Task")
    }

    return(
        <View style={styles.container}>
        <Text style={styles.label}>Name</Text>
        <TextInput 
        style={styles.inputText}
        placeholder="Estudar..."
        onChangeText={setNameEdit}
        value={nameEdit}
        />
        <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={() =>{
                buttonEdit(nameEdit, id)
            }}
        >
            <Text style={styles.iconButton}>Save</Text>
        </TouchableOpacity>
    </View>
    )
}