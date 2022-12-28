import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import styles from './FormArsivi.style';

const realm = new Realm({path: 'FormDatabase.realm'});

const Arsiv = () => {
  var form_details = realm.objects('form_details');

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);

  const showModal = car => {
    setModalVisible(true);
    setSelectedForm(car);
  };

  const hideModal = () => {
    setModalVisible(false);
    setSelectedForm(null);
  };

  const FormListesi = () => {
    return (
      <>
        <FlatList
          data={form_details}
          keyExtractor={item => item.form_id}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => showModal(item)}>
              <View style={styles.body_container}>
                <Text style={styles.formid}>{item.form_id}</Text>
                <View style={styles.id_container}>
                  <Text style={styles.formveritext}>
                    Dosya Numarası: {item.dosya_numarasi}
                  </Text>
                  <Text style={styles.formveritext}>
                    Firma/Kuruluş İsmi: {item.firma_kurulus}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={hideModal}>
          {selectedForm && (
            <View style={styles.modal_container}>
              <View style={styles.modalView}>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>Dosya Numarası:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.dosya_numarasi} </Text>
                </View>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>Değerlendirme Tarihi:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.degerlendirme_tarihi} </Text>
                </View>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>Firma/Kuruluş:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.firma_kurulus} </Text>
                </View>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>Adres:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.firma_adres} </Text>
                </View>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>Telefon No:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.firma_telefon_no} </Text>
                </View>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>İlgili Kişi:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.firma_ilgili_kisi} </Text>
                </View>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>Baş Denetçi:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.bas_denetci_ismi} </Text>
                </View>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>Denetçi:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.yedek_denetci_1_ismi} </Text>
                </View>
                <View style={styles.formGiris_aciklamalar}>
                  <Text style={styles.formBaslik}>Denetçi:</Text>
                  <Text style={styles.formBilgi_aciklama} > {selectedForm.yedek_denetci_2_ismi} </Text>
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.modal_offButton}>
                    Form Ekranını Kapat
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </Modal>
      </>
    );
  };

  return (
    <SafeAreaView style={styles.centeredView}>
      <Text style={styles.baslik}> Form Arşivi </Text>
      <FormListesi />
    </SafeAreaView>
  );
};

export default Arsiv;

/*
  <MyTextInput 
    placeholder="ID numarası griniz.." 
    onChangeText={input_form_id => this.setState({ input_form_id })}
  />

  <MyButton 
    title="Form Sil"
    customClick={this.deleteForm.bind(this)}
  />

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

*/
