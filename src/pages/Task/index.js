import React,{useState, useEffect, useCallback} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    RefreshControl
} from "react-native"

import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

import { listTask, deleteTask } from '../../services/firestore/index'

const temLIst = [
    {id:"teste01", name:"teste01", createdAt:Date.now()},
    {id:"teste02", name:"teste02", createdAt:Date.now()},
    {id:"teste03", name:"teste03", createdAt:Date.now()},
    {id:"teste04", name:"teste04", createdAt:Date.now()},
    {id:"teste05", name:"teste05", createdAt:Date.now()},
    {id:"teste06", name:"teste06", createdAt:Date.now()},
    {id:"teste07", name:"teste07", createdAt:Date.now()},
]

export default function Task({ navigation }){

    const [ task, setTask ] = useState(temLIst)
    const [ refreshing, setRefreshing ] = useState(false)

    const wait = timeout => {
        return new Promise(resolve => setTimeout(resolve,timeout))
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => {
            buttonListTask()
            setRefreshing(false)
        });
    },[]);
    

    async function buttonDeleteTask(id){
        await deleteTask(id)
        setTask(task.filter(item => item.id !== id))

    }

    async function buttonListTask() {
        var result = await listTask()
        setTask(result)
        return result
    }

    useEffect(() => {
        // buttonListTask()
    },[task])

    return(
        <View style={styles.container}>
            <FlatList
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
            data={task}
            renderItem={({item}) =>{
                return(
                <View style={styles.Tasks}>
                    <TouchableOpacity style={styles.buttonDeleteTask}
                    onPress={() => {
                        buttonDeleteTask(item.id)
                    }}>
                        <FontAwesome name="star"
                        size={23}
                        color="#f92e6a">

                        </FontAwesome>
                    </TouchableOpacity>
                    <Text style={styles.name}
                    onPress={()=>{
                        navigation.navigate("Details", {
                            id: item.id, name: item.name
                        })
                    }}>{
                    item.name}
                    </Text>
                </View>
                )
            }}
            />
            <TouchableOpacity style={styles.buttonNewTask}
            onPress={() => navigation.navigate("New Task")}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}