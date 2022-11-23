import React from 'react';
import { View } from 'react-native';
import { TextInput } from '@react-native-material/core';
import styles from './TextInput.style';

const Input = ({label, variant, onChangedText, value, multiline}) => {
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
                transitionDuration= { 500}
            />
        </View>
    )
};

export default Input;