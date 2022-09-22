import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        paddingTop: 20
    },
    label:{
        width:"90%",
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
        color: "#f92e6a"

    },
    inputText:{
        width:"90%",
        marginTop: 10,
        fontSize: 20,
        padding:10,
        height:50,
        borderBottomWidth:1,
        borderBottomColor: "#f92e6a",
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    buttonNewTask: {
        width:60,
        height:60,
        position: "absolute",
        bottom:30,
        left: 20,
        backgroundColor:"#f92e6a",
        borderRadius:50, 
        justifyContent:"center", 
        alignItems:"center"
    },
    iconButton:{
        color: "#fff",
        fontSize:16,
        fontWeight:"bold"
    }
})

export default styles