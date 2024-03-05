import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardComponent from '../component/CardComponent';

const CardListScreenTest = () => {
  const cardList = [
    {
      card_id: '466d5376-5c3e-4820-abc5-5b2d43a1ee33',
      card_name: 'Rose ',
      email: 'alice.johnson@example.com',
      phone: '+1987654321',
      job_title: 'Software Engineer',
      company_name: 'XYZ Tech Solutions',
    },
    {
      card_id: '4e982cf2-781f-47d0-8278-c768c46db8f8',
      card_name: 'Rose ',
      email: 'alice.johnson@example.com',
      phone: '+1987654321',
      job_title: 'Software Engineer',
      company_name: 'XYZ Tech Solutions',
    },
    {
      card_id: '57',
      card_name: 'Eva Martinez',
      email: 'eva.martinez@example.com',
      phone: '+6677889900',
      job_title: 'Sales Representative',
      company_name: 'Sales Inc',
    },
    {
      card_id: '466d5376-5c3e-4820-abc5-5b2d843a1ee33',
      card_name: 'Rose ',
      email: 'alice.johnson@example.com',
      phone: '+1987654321',
      job_title: 'Software Engineer',
      company_name: 'XYZ Tech Solutions',
    },
    {
      card_id: '4e982cf2-781f-47dK0-8278-c768c46db8f8',
      card_name: 'Rose ',
      email: 'alice.johnson@example.com',
      phone: '+1987654321',
      job_title: 'Software Engineer',
      company_name: 'XYZ Tech Solutions',
    },
    {
      card_id: '59',
      card_name: 'Eva Martinez',
      email: 'eva.martinez@example.com',
      phone: '+6677889900',
      job_title: 'Sales Representative',
      company_name: 'Sales Inc',
    },
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topIconContainer}>
        <TouchableOpacity>
          <MaterialIcons
            name="arrow-back"
            color={'black'}
            size={34}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons
            name="more-vert"
            color={'black'}
            size={34}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.letterCardContainer}>
        <View style={styles.letterCircle}>
          <Text style={styles.letter}>M</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.contactNameContainer}>
            <Text style={styles.contactName}>Makoto Shinkai</Text>
          </View>
          <Text style={styles.cardHeading}>Cards</Text>
          <FlatList
            contentContainerStyle={styles.flatListStyle}
            showsVerticalScrollIndicator={true}
            data={cardList}
            renderItem={({item}) => (
              <CardComponent
                name={item.card_name}
                job_position={item.job_title}
                email={item.email}
                phone_number={item.phone}
                company_name={item.company_name}
                alignToSides={true}
              />
            )}
            keyExtractor={item => item.card_id}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#058C42',
  },
  letterCircle: {
    borderRadius: 60,
    height: 120,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#058C42',
    borderColor: '#FFFF',
    borderWidth: 2,
    zIndex: 1,
    marginBottom: -40,
    marginLeft: 140,
  },
  topIconContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  letterCardContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  letter: {
    fontSize: 48,
    color: '#ffff',
  },
  icon: {
    color: '#ffff',
    alignSelf: 'center',
  },
  cardContainer: {
    backgroundColor: '#ffff',
    height: 700,
    width: 400,
    borderRadius: 26,
    paddingHorizontal: 20,
  },
  contactNameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flatListStyle: {
    gap: 20,
    paddingHorizontal: 10,
    paddingBottom: 150,
  },
  contactName: {
    color: '#0B0B0B',
    fontSize: 40,
    marginTop: 40,
  },
  cardHeading: {
    color: '#0B0B0B',
    fontSize: 24,
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
export default CardListScreenTest;
