import { StyleSheet } from "react-native";

export default StyleSheet.create({
    separator: { 
        height: 0.5, 
        width: '100%', 
        backgroundColor: '#000' 
    },
    centeredView: {
        flex: 1,
        backgroundColor: '#9ec4cb',
    },
    baslik: {
        borderWidth: 1,
        borderColor: 'black',
        textAlign: "center",
        color: 'black',
        fontSize: 30,
        fontWeight: "bold",
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
    },
    modal_container: {
        flex: 1,
        backgroundColor: 'white'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }, 
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    modal_offButton: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    body_container: { 
        flex: 1,
        borderRadius: 10,
        backgroundColor: '#45a7b3', 
        padding: 15,
        margin: 10, 
        flexDirection: "row",
    },
    formid: {
        width: 50,
        fontSize: 42,
        color: 'black',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    id_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    formveritext: {
        color: "black",
        fontSize: 15,
        fontWeight: "bold",
    },
    
})