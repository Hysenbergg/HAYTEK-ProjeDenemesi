import React from 'react';
import { View, Button} from 'react-native';

const FormButton = ({ text, onPress }) => {
    return (
        <View style={styles.container} >
            <Button style={styles.formbutton} title={text} onPress={onPress} />
        </View>
    )
}

export default FormButton;