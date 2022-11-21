/*Screen to view single user*/
import React, { useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import Realm from 'realm';
let realm;

function ViewUser() {
  const [input_user_id, setinput_user_id] = useState('');
  const [userData, setuserData] = useState({ userData: '' });

  useEffect(() => {
    realm = new Realm({ path: 'UserDatabase.realm' });
  }, []);

  const searchUser = () => {
    console.log(input_user_id);

    var user_details = realm
      .objects('user_details')
      .filtered('user_id =' + input_user_id);
    console.log(user_details);
    if (user_details.length > 0) {
      console.log(user_details[0]);
      setuserData(user_details[0]);
    } else {
      alert('No user found');
      setuserData({
        userData: '',
      });
    }
  };

  return (
    <View>
      <Mytextinput
        placeholder="Enter User Id"
        onChangeText={text => {
          setinput_user_id(text);
        }}
      />
      <Mybutton title="Search User" customClick={searchUser} />
      <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
        <Text>User Id: {userData.user_id}</Text>
        <Text>User Name: {userData.user_name}</Text>
        <Text>User Contact: {userData.user_contact}</Text>
        <Text>User Address: {userData.user_address}</Text>
      </View>
    </View>
  );
}

export default ViewUser;
