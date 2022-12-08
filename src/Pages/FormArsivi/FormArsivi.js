import React from "react";
import { FlatList, Text, View } from 'react-native';
import styles from './FormArsivi.style';

export default class FormArsivi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    realm = new Realm({ path: 'FormDatabase.realm' });
    var form_details = realm.objects('form_details');
    this.state = {
      FlatListItems: form_details,
    };
  }

  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
    );
  };

  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.form_id}</Text>
              <Text>Değerlendirme Tarihi: {item.degerlendirme_tarihi}</Text>
              <Text>Dosya Numarası: {item.dosya_numarasi}</Text>
              <Text>Firma/Kuruluş İsmi: {item.firma_kurulus}</Text>
              <Text>Firma Adresi: {item.firma_adres}</Text>
              <Text>Firma Telefon Numarası: {item.firma_telefon_no}</Text>
              <Text>Firma Fax: {item.firma_fax}</Text>
              <Text>Firma e-posta: {item.firma_eposta}</Text>
              <Text>Firma İlgili Kişisi: {item.firma_ilgili_kisi}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}