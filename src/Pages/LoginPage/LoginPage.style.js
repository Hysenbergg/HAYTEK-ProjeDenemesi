import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
    logo_container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 25,
    },
    logo: {
        width: Dimensions.get('window').width/1.5,
        height: Dimensions.get('window').height/3,
        resizeMode: 'contain',
        tintColor: 'purple',
        alignSelf: 'center',
    },
    body_container: {
        flex: 1,
        paddingTop: 25,
    }
})