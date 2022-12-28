import React from 'react';
import { View } from 'react-native';
import Mybutton from '../../Components/Mybutton';
import Realm from 'realm';

const SelectedForm = ({navigation}) => {
  
  new Realm({
    path: 'FormDatabase.realm',
    schema: [
      {
        name: 'form_details',
        properties: {
          form_id: {type: 'int', default: 0},
          degerlendirme_tarihi: 'string',
          dosya_numarasi: 'string',
          firma_kurulus: 'string',
          firma_adres: 'string',
          firma_telefon_no: 'string',
          firma_fax: 'string',
          firma_eposta: 'string',
          firma_ilgili_kisi: 'string',
          bas_denetci_ismi: 'string',
          yedek_denetci_1_ismi: 'string',
          yedek_denetci_2_ismi: 'string',
        },
      },
    ],
  });

  return (
    <View style={{flex: 1}}>
      <Mybutton
        title="Soru Listesi"
        customClick={() => navigation.navigate('LoginForm')}
      />
    </View>
  );
}

export default SelectedForm;
