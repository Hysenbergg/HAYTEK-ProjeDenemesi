import React, {useState} from "react";
import { SafeAreaView, View, Text, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './Checkbox.style';

const Checkbox = () => {
  const [isEvet, setEvet] = useState(false);
  const [isHayır, setHayır] = useState(false);
  const [isKapsamDisi, setKapsamDisi] = useState(false);

  function EvetCheckboxKontrol() {
    setEvet(true);
    setHayır(false);
    setKapsamDisi(false);
  }

  function HayırCheckboxKontrol() {
    setHayır(true);
    setEvet(false);
    setKapsamDisi(false);
  }
  
  function KapsamDisiCheckboxKontrol() {
    setKapsamDisi(true);
    setEvet(false);
    setHayır(false);
  }

  return(
    <SafeAreaView style={styles.container} >
      <View style={styles.bodyContainer} >
        <View style={styles.checkboxContainer} >
          <CheckBox 
            value={isEvet}
            onValueChange={EvetCheckboxKontrol}
            style={styles.checkbox}
          />
          <Text style={styles.label}> Evet </Text>
        </View>
        <View style={styles.checkboxContainer} >
          <CheckBox 
            value={isHayır}
            onValueChange={HayırCheckboxKontrol}
            style={styles.checkbox}
          />
          <Text style={styles.label}> Hayır </Text>
        </View>
        <View style={styles.checkboxContainer} >
          <CheckBox 
            value={isKapsamDisi}
            onValueChange={KapsamDisiCheckboxKontrol}
            style={styles.checkbox}
          />
          <Text style={styles.label}> Kapsam Dışı </Text>
        </View>
      </View>
      <View style={styles.inputContainer} >
        <TextInput 
          style={styles.textinput} 
          placeholder="Eksik olanlar.." 
          placeholderTextColor="red" 
          multiline={true} 
          editable={isKapsamDisi ? false : true} 
        />
      </View>
    </SafeAreaView>
  )
}

export default Checkbox;

/*

      <Text> Evet mi? {isEvet ? <Text>Evet</Text> : <Text>Cevap Yok</Text> }</Text>
      <Text> Hayır mı? {isHayır ? "👍" : "👎"}</Text>
      <Text> Kapsam Dısı mı? {isKapsamDisi ? "👍" : "👎"}</Text>
*/