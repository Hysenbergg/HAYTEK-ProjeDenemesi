import React from "react";
import {View, Modal, Text, Pressable, FlatList, TouchableOpacity} from 'react-native';

const Listeleme = () => {
    return (
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setState(prevState => ({
              modalVisible: !prevState.modalVisible
            }));
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState(prevState => ({
                  modalVisible: !prevState.modalVisible
                }))}
              > 
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>                
        <FlatList
          data={this.state.FlatListItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.setState(prevState => ({
              modalVisible: !prevState.modalVisible
            }))}>
              <View style={styles.body_container}>
                <Text style={styles.formveritext}>Id: {item.form_id}</Text>
                <Text style={styles.formveritext}>Değerlendirme Tarihi: {item.degerlendirme_tarihi}</Text>
                <Text style={styles.formveritext}>Dosya Numarası: {item.dosya_numarasi}</Text>
                <Text style={styles.formveritext}>Firma/Kuruluş İsmi: {item.firma_kurulus}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
}

export default Listeleme();