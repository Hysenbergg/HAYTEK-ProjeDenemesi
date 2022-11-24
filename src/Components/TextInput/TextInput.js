import React from 'react';
import { View } from 'react-native';
import { TextInput } from '@react-native-material/core';
import styles from './TextInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({label, variant, iconName, iconSize, iconColor, onChangedText, value, multiline}) => {
    return (
        <View style={styles.container} >
            <TextInput 
                style={styles.input}
                label = {label}     
                variant = {variant}
                onChangeText = {onChangedText}  // inputun içerisinde ki veriyi tutacak kısım
                value = {value}                 // ilk olarak input içerisinde yyazan ksıım.
                multiline = {multiline}
                color="purple"
                transitionDuration= { 500 }
                trailing = { props => <Icon name={iconName} size={iconSize} color={iconColor} />  }
            />
        </View>
    )
};

export default Input;