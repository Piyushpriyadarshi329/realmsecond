/*Home Screen With buttons to navigate to diffrent options*/
import React, {useEffect} from 'react';
import {View} from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import Realm from 'realm';
let realm;

function HomeScreen({navigation}) {
  useEffect(() => {
    realm = new Realm({
      path: 'UserDatabase.realm',
      schema: [
        {
          name: 'user_details',
          properties: {
            user_id: {type: 'int', default: 0},
            user_name: 'string',
            user_address: 'string',
            user_contact: 'string',
          },
        },
      ],
    });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
      <Mytext text="RealM Example" />
      <Mybutton
        title="Register"
        customClick={() => navigation.navigate('Register')}
      />
      <Mybutton
        title="Update"
        customClick={() => navigation.navigate('Update')}
      />
      <Mybutton title="View" customClick={() => navigation.navigate('View')} />
      <Mybutton
        title="View All"
        customClick={() => navigation.navigate('ViewAll')}
      />
      <Mybutton
        title="Delete"
        customClick={() => navigation.navigate('Delete')}
      />
    </View>
  );
}
export default HomeScreen;
