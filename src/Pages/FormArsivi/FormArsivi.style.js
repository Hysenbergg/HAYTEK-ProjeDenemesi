import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    separator: { 
        height: 0.5, 
        width: '100%', 
        backgroundColor: '#000' 
    },
    body_container: { 
        backgroundColor: 'white', 
        padding: 20 
    },
    formveritext: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    centeredView: {
        marginTop: 12
    },
    body_container: { 
        backgroundColor: 'white', 
        padding: 20 
    },
    formveritext: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
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
    button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
    },
    buttonOpen: {
    backgroundColor: "#F194FF",
    },
    buttonClose: {
    backgroundColor: "#2196F3",
    },
    textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    },
    modalText: {
    marginBottom: 15,
    textAlign: "center"
    }
})