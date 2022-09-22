import React,{useState} from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native"

import styles from "./style";

import { createTask } from '../../services/firestore/index'


export default function NewTask({ navigation }){

    const [name,setName] = useState(null)

    async function buttonCreate(){
        const result = await createTask(name)
        navigation.navigate("Task")
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput 
            style={styles.inputText}
            placeholder="Estudar..."
            onChangeText={setName}
            value={name}
            />
            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() =>{
                    buttonCreate()
                }}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}