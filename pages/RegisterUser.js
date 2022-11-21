/*Screen to register the user*/
import React, { useState, useEffect } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;

function RegisterUser({ navigation }) {
  const [data, setdata] = useState({
    user_name: '',
    user_contact: '',
    user_address: '',
  });

  useEffect(() => {
    realm = new Realm({ path: 'UserDatabase.realm' });
  }, []);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user_name: '',
  //     user_contact: '',
  //     user_address: '',
  //   };
  //   realm = new Realm({ path: 'UserDatabase.realm' });
  // }

  function register_user() {
    realm.write(() => {
      var ID =
        realm.objects('user_details').sorted('user_id', true).length > 0
          ? realm.objects('user_details').sorted('user_id', true)[0].user_id + 1
          : 1;

      realm.create('user_details', {
        user_id: ID,
        user_name: data.user_name,
        user_contact: data.user_contact,
        user_address: data.user_address,
      });
      Alert.alert(
        'Success',
        'registration successfull',
        [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('HomeScreen'),
          },
        ],
        { cancelable: false },
      );
    });
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }}>
          <Mytextinput
            placeholder="Enter Name"
            onChangeText={text => {
              setdata(p => {
                return { ...p, user_name: text };
              });
            }}
          />
          <Mytextinput
            placeholder="Enter Contact No"
            onChangeText={text => {
              setdata(p => {
                return { ...p, user_contact: text };
              });
            }}
            maxLength={10}
            keyboardType="numeric"
          />
          <Mytextinput
            placeholder="Enter Address"
            onChangeText={text => {
              setdata(p => {
                return { ...p, user_address: text };
              });
            }}
            maxLength={225}
            numberOfLines={5}
            multiline={true}
            style={{ textAlignVertical: 'top' }}
          />
          <Mybutton title="Submit" customClick={register_user} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

export default RegisterUser;
