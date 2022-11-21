/*Screen to update the user*/
import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  TextInput,
} from 'react-native';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
import _ from 'lodash';
import Mytextinput from './components/Mytextinput';
let realm;

function UpdateUser({ navigation }) {
  const [data, setdata] = useState({
    user_id: '',
    user_name: '',
    user_contact: '',
    user_address: '',
  });

  useEffect(() => {
    realm = new Realm({ path: 'UserDatabase.realm' });
  }, []);

  console.log('datatop', data);

  function searchUser() {
    console.log(data.user_id);
    var user_details = realm
      .objects('user_details')
      .filtered('user_id =' + data.user_id);
    console.log('user_details', user_details);

    if (user_details.length > 0) {
      setdata(user_details[0]);
    } else {
      alert('No user found');

      setdata({
        user_id: '',
        user_name: '',
        user_contact: '',
        user_address: '',
      });
    }
  }

  function updateUser() {
    console.log('data', data);

    if (data.user_id) {
      if (data.user_name) {
        if (data.user_contact) {
          if (data.user_address) {
            realm.write(() => {
              var ID = data.user_id;
              console.log('ID', ID);

              var obj = realm
                .objects('user_details')
                .filtered('user_id =' + data.user_id);

              console.log('obj', obj);
              if (obj.length > 0) {
                obj[0].user_name = data.user_name;
                obj[0].user_contact = data.user_contact;
                obj[0].user_address = data.user_address;
                Alert.alert(
                  'Success',
                  'User updated successfully',
                  [
                    {
                      text: 'Ok',
                      onPress: () => navigation.navigate('HomeScreen'),
                    },
                  ],
                  { cancelable: false },
                );
              } else {
                alert('User Updation Failed');
              }
            });
          } else {
            alert('Please fill Address');
          }
        } else {
          alert('Please fill Contact Number');
        }
      } else {
        alert('Please fill Name');
      }
    } else {
      alert('Please fill User Id');
    }
  }
  const change = React.useCallback(
    text => {
      setdata(p => ({
        ...p,
        user_name: text,
      }));
    },
    [setdata],
  );
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }}>
          <Mytextinput
            placeholder="Enter User Id"
            onChangeText={text => {
              setdata(p => {
                console.log('pid', p);
                return { ...data, user_id: text };
              });
            }}
          />
          <Mybutton title="Search User" customClick={searchUser} />
          <Mytextinput
            placeholder="Enter Name"
            value={data.user_name}
            onChangeText={change}
          />
          <Mytextinput
            placeholder="Enter Contact No"
            value={data.user_contact}
            onChangeText={text => {
              setdata(p => {
                console.log('Changed contact');

                return { ...p, user_contact: text };
              });
            }}
            maxLength={10}
            keyboardType="numeric"
          />
          <Mytextinput
            value={data.user_address}
            placeholder="Enter Address"
            onChangeText={text => {
              setdata(p => {
                console.log('p', p);

                return { ...data, user_address: text };
              });
            }}
            style={{ textAlignVertical: 'top' }}
          />
          <Mybutton title="Update User" customClick={updateUser} />
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
}

export default UpdateUser;
