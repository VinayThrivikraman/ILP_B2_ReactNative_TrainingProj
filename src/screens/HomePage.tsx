import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SearchBar from '../component/searchBar';
import Contact from '../component/Contact';
import ScanButton from '../component/ScanButton';
import {getContactList} from '../network/apiHook';
import {getItem} from '../utils/Utils';
import Constants from '../utils/Constants';
import ShimmerComponent from '../component/ShimmerComponent';

const HomePage = () => {
  const [isLoading, setLoading] = useState(true);
  const [contactList, setContactList] = useState([]);

  // const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const userId = (await getItem(Constants.USER_ID)) ?? '';
        const jwtToken = (await getItem(Constants.JWT_TOKEN)) ?? '';
        const result = await getContactList(userId, jwtToken);
        setContactList(result.contactList.data);
        // setFilteredList(result.contactList);
        setLoading(false);
      } catch (error) {}
    };
    fetchContact();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const Item = ({item}: any) => (
    <Contact
      contactName={item.contact_name}
      profileImageLetter={item.contact_name[0]}
      card_id={item.card_id}
      contact_name={item.contact_name}
    />
  );

  return (
    <View style={{backgroundColor: '#F8FCFD', flex: 1}}>
      <View style={styles.mainContainer}>
        <Text style={styles.contactHeading}>Contacts</Text>
        <SearchBar value={searchQuery} onChangeText={handleSearch}></SearchBar>
        {isLoading === true ? (
          <ShimmerComponent />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={contactList.filter(contact =>
              contact.contact_name
                .toLowerCase()
                .includes(searchQuery.toLowerCase()),
            )}
            renderItem={Item}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
        <ScanButton></ScanButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F8FCFD',
    marginLeft: 30,
    marginRight: 30,
    position: 'relative',
  },
  contactHeading: {
    marginTop: 100,
    marginBottom: 20,
    fontSize: 38,
    fontWeight: '500',
    color: 'black',
  },
});

export default HomePage;
