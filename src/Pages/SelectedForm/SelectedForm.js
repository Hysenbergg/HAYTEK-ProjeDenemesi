import React from "react";
import { SafeAreaView, View, Text} from 'react-native';
import Mybutton from '../../Components/Mybutton';
import Realm from "realm";

let realm;
export default class SelectedForm extends React.Component {
  constructor(props) {
    super(props);
    realm = new Realm({
      path: 'FormDatabase.realm',
      schema: [
        {
          name: 'form_details',
          properties: {
            user_id: { type: 'int', default: 0 },
            degerlendirme_tarihi: 'string',
            dosya_numarasi: 'string',
            firma_kurulus: 'string',
            adres: 'string',
            telefon_no: 'int',
            fax: 'string',
            eposta: 'string',
            ilgili_kisi: 'string',
          },
        },
      ],
    });
  }

  render () {
    return(
      <View style={{flex: 1}}>
        <Mybutton title="Soru Listesi" cumtomClick={() => this.props.navigation.navigate('LoginForm')} />
        <Mybutton title="Yedek" cumtomClick={SorularaGitme} />
      </View>
    )
  }
}



/*
const SelectedForm = ({navigation}) => {

  function handleQuestionForm(){
    navigation.navigate("LoginForm");
  }

  return(
    <SafeAreaView style={{flex: 1}}>
      <Text> Welcome to Selected Form</Text>
      <Mybutton title="Soru Listesi" customClick={handleQuestionForm} />
    </SafeAreaView>
  )
}

export default SelectedForm;
*/