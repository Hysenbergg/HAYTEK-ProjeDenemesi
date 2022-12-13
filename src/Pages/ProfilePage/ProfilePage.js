import React, { useState } from "react";
import { Alert, Modal, Text, Pressable, View, TouchableOpacity, FlatList } from "react-native";
import styles from './ProfilePage.style';

export default class Tiklama extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
      modalVisible: false,
    };
    realm = new Realm({ path: 'FormDatabase.realm' });
    var form_details = realm.objects('form_details');
    this.state = {
      FlatListItems: form_details,
      modalVisible: false,
    };
  }

  render() {
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
}

/*
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
});

export default App;*/