/*Custom TextInput*/
import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './TextInput.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyTextInput = props => {
  return (
    <View style={styles.container}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="purple"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={styles.input}
        blurOnSubmit={false}
        value={props.value}
      />
      <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} />
    </View>
  );
};
export default MyTextInput;