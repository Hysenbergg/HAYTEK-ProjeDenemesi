import React from "react";
import { SafeAreaView, FlatList, Text, View, Alert, TouchableOpacity, Modal, Pressable } from 'react-native';
//import MyTextInput from "../../Components/TextInput/TextInput";
//import MyButton from '../../Components/Mybutton/Mybutton';
import styles from './FormArsivi.style';

export default class FormArsivi extends React.Component {
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

  // Önceden gerçekleştirilmiş soru çizelgelerinin bulunduğu arşiv içerisinde soru çizelgesi silme fonksiyonu.
  deleteForm = () => {
    var that = this;
    const { input_form_id } = this.state;
    realm.write(() => {
      var ID = this.state.input_form_id;
      if ( 
        realm.objects('form_details').filtered('form_id =' + input_form_id).length > 0
      ) {
        realm.delete(
          realm.objects('form_details').filtered('form_id =' + input_form_id)
        );
        var form_details = realm.objects('form_details');
        console.log(form_details);
        Alert.alert(
          'Success',
          'User deleted successfully',
          [
            {
              text: 'Tamam',
              onPress: () => that.props.navigation.navigate('FormStack'),
            },
          ],
          { cancelable: false }
        );
      } else {
        alert(' Lütfen geçerli bir form id numarası giriniz. ');
      }
    }); 
  };

  // Arşiv içerisinde kaydedilmiş soru çizelgeleri arasında onları birbiriden ayrı gözükmesini sağlayan ayırıcı.
  ListViewItemSeparator = () => {
    return (
      <View style={styles.separator} />
    );
  };
  
  // tıklanabilir listenin fonksiyonu.
  FormListesi = () => {

    return (
      <FlatList
        data={this.state.FlatListItems}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>  this.setState(prevState => ({
            modalVisible: !prevState.modalVisible
          }))}>
            <View style={styles.body_container}>
              <Text style={styles.formid}>{item.form_id}</Text>
              <View style={styles.id_container} >
                <Text style={styles.formveritext}>Dosya Numarası: {item.dosya_numarasi}</Text>
                <Text style={styles.formveritext}>Firma/Kuruluş İsmi: {item.firma_kurulus}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };

  // Form Listesinde tıklanabilir olan itemların tıklandıktan sonra ki açılaccak olan pop-up ekranı.
  FormListeAyrinti = () => {
    return (
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
          <View style={styles.modal_container} >
            <View style={styles.modalView}>
              <Text style={{margin: 10}}> Buraya tıklanan formun bilgileri gelecek. </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setState(prevState => ({
                  modalVisible: !prevState.modalVisible
                }))}
              > 
                <Text style={styles.modal_offButton}>Form Ekranını Kapat</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
    )
  }

  //Şu anda geçici olarak kapalı.
  FormListeAyrintiChild = () => {
    return (
      <FlatList
        data={this.state.FlatListItems}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.setState(prevState => ({
            modalVisible: !prevState.modalVisible
          }))}>
            <View style={styles.body_container}>
              <View style={styles.id_container} >
                <Text style={styles.formveritext}>Değerlendirme Tarihi: {item.degerlendirme_tarihi}</Text>
                <Text style={styles.formveritext}>Dosya Numarası: {item.dosya_numarasi}</Text>
                <Text style={styles.formveritext}>Firma/Kuruluş İsmi: {item.firma_kurulus}</Text>
                <Text style={styles.formveritext} >Firma Adresi: {item.firma_adres}</Text>
                <Text style={styles.formveritext}>Firma Telefon Numarası: {item.firma_telefon_no}</Text>
                <Text style={styles.formveritext}>Firma Fax: {item.firma_fax}</Text>
                <Text style={styles.formveritext}>Firma e-posta: {item.firma_eposta}</Text>
                <Text style={styles.formveritext}>Firma İlgili Kişisi: {item.firma_ilgili_kisi}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }

  render() {
    return (
      <SafeAreaView style={styles.centeredView}>
        <Text style={styles.baslik} > Form Arşivi </Text>
        <this.FormListeAyrinti />               
        <this.FormListesi />
      </SafeAreaView>
    )
  }
}

/*
  <MyTextInput 
    placeholder="ID numarası griniz.." 
    onChangeText={input_form_id => this.setState({ input_form_id })}
  />

  <MyButton 
    title="Form Sil"
    customClick={this.deleteForm.bind(this)}
  />
  <Text style={styles.formveritext}>Değerlendirme Tarihi: {item.degerlendirme_tarihi}</Text>
  <Text>Firma Adresi: {item.firma_adres}</Text>
  <Text>Firma Telefon Numarası: {item.firma_telefon_no}</Text>
  <Text>Firma Fax: {item.firma_fax}</Text>
  <Text>Firma e-posta: {item.firma_eposta}</Text>
  <Text>Firma İlgili Kişisi: {item.firma_ilgili_kisi}</Text>

*/