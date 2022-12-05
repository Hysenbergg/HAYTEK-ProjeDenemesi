/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Mybutton.style';

const Mybutton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.customClick}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Mybutton;
