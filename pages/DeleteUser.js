/*Screen to delete the user*/
import React, {useState, useEffect} from 'react';
import {Button, Text, View, Alert} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;

function DeleteUser({navigation}) {
  const [input_user_id, setinput_user_id] = useState('');

  useEffect(() => {
    realm = new Realm({path: 'UserDatabase.realm'});
  }, []);

  function deleteUserfun() {
    realm.write(() => {
      var ID = input_user_id;

      if (
        realm.objects('user_details').filtered('user_id =' + input_user_id)
          .length > 0
      ) {
        realm.delete(
          realm.objects('user_details').filtered('user_id =' + input_user_id),
        );

        // var user_details = realm.objects('user_details');

        // console.log(user_details);

        Alert.alert(
          'Success',
          'User deleted successfully',
          [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('HomeScreen'),
            },
          ],
          {cancelable: false},
        );
      } else {
        alert('Please insert a valid User Id');
      }
    });
  }

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Mytextinput
        placeholder="Enter User Id"
        onChangeText={text => setinput_user_id(text)}
      />
      <Mybutton title="Delete User" customClick={deleteUserfun} />
    </View>
  );
}
export default DeleteUser;
