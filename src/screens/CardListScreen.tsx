import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CardComponent from '../component/CardComponent';
import {getCardList} from '../network/CardListHook';
import {getItem} from '../utils/Utils';
import Constants from '../utils/Constants';
import {useNavigation} from '@react-navigation/native';

const CardListScreen = ({route}: any) => {
  const navigation = useNavigation();

  const contact_name = route.params.contact_name ?? '';
  interface CardParameters {
    company_name: string;
    card_id: string;
    card_name: string;
    email: string;
    phone: string;
    job_title: string;
  }
  const [cardList, setCardList] = useState<CardParameters[]>([]);
  useEffect(() => {
    const fetchCardList = async () => {
      try {
        const userId = (await getItem(Constants.USER_ID)) ?? '';
        const jwtToken = (await getItem(Constants.JWT_TOKEN)) ?? '';
        const cardId = route.params.card_id;
        console.log('cardlist screen' + cardId);

        const result = await getCardList({userId, jwtToken, cardId});
        console.log('c');
        setCardList(result.cardResp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCardList();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topIconContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
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
          <Text style={styles.letter}>{contact_name[0]}</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.contactNameContainer}>
            <Text style={styles.contactName}>{contact_name}</Text>
          </View>
          <Text style={styles.cardHeading}>Cards</Text>
          <FlatList
            contentContainerStyle={styles.flatListStyle}
            showsVerticalScrollIndicator={false}
            data={cardList}
            renderItem={({item}) => (
              <CardComponent
                name={item.card_name}
                job_position={item.job_title}
                email={item.email}
                phone_number={item.phone}
                company_name={item.company_name}
                alignToSides={true}
                card_id={item.card_id}
                contact_name={item.card_name}
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
    fontWeight: 'bold',
  },
  icon: {
    color: '#ffff',
    alignSelf: 'center',
  },
  cardContainer: {
    backgroundColor: '#ffff',
    height: 700,
    width: '100%',
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
    fontWeight: '600',
  },
  cardHeading: {
    color: '#0B0B0B',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
export default CardListScreen;
