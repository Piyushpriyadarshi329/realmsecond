/*Screen to view all the user*/
import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import Realm from 'realm';
let realm;

function ViewAllUser() {
  const [FlatListItems, setFlatListItems] = useState([]);
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     FlatListItems: [],
  //   };
  //   realm = new Realm({ path: 'UserDatabase.realm' });

  //   var user_details = realm.objects('user_details');
  //   this.state = {
  //     FlatListItems: user_details,
  //   };
  // }

  useEffect(() => {
    realm = new Realm({path: 'UserDatabase.realm'});

    var user_details = realm.objects('user_details');

    setFlatListItems(user_details);
  }, []);

  //  function  ListViewItemSeparator () {
  //     return (

  //       <View style={{ height: 0.5, width: '100%', backgroundColor: '#000' }} />
  //     );
  //   };

  return (
    <View>
      <FlatList
        data={FlatListItems}
        // ItemSeparatorComponent={ListViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={{backgroundColor: 'white', padding: 20}}>
            <Text>Id: {item.user_id}</Text>
            <Text>Name: {item.user_name}</Text>
            <Text>Contact: {item.user_contact}</Text>
            <Text>Address: {item.user_address}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default ViewAllUser;
