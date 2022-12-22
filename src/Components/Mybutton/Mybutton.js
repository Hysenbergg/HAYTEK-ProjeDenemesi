/*Custom Button*/
import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import styles from './Mybutton.style';

const Mybutton = ({title, customClick, loading}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={customClick} disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white"/>
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Mybutton;
