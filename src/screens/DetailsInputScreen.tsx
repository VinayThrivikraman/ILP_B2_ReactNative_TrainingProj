import React, {useEffect, useState} from 'react';
import InputComponent from '../component/InputComponent';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import MainButtonComponent from '../component/MainButtonComponent';
import colors from '../utils/colorPallete';
import CardComponent from '../component/CardComponent';
import Constants from '../utils/Constants';
import {getItem} from '../utils/Utils';
import {getSimilarCards} from '../network/apiHook';

const renderItem = ({item}: any) => (
  <View
    style={[
      styles.similarCardsContainer,
      {flexDirection: 'column', marginBottom: 20},
    ]}>
    <Text style={styles.contactName}>{item.contact_name}</Text>

    {item.cards.map((card: any) => (
      <View style={styles.singleCard}>
        <CardComponent
          key={card.card_id}
          alignToSides={false}
          job_position={card.job_title}
          name={card.card_name}
          email={card.email}
          phone_number={card.phone}
          company_name={card.company_name}
        />
      </View>
    ))}
  </View>
);

const DetailsInputScreen = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [similarCardList, setSimilarCardList] = React.useState([]);

  //Modal Things
  const [isModalVisible, setModalVisible] = useState(false);

  const fetchSimilarCards = async () => {
    try {
      const user_id = (await getItem(Constants.USER_ID)) ?? '';
      const jwtToken = (await getItem(Constants.JWT_TOKEN)) ?? '';
      console.log('\n\nJWT TOKEN is: ', jwtToken);
      const result = await getSimilarCards(
        user_id,
        name,
        phone,
        email,
        jwtToken,
      );
      console.log('Result Is: ', result);

      setSimilarCardList(result.similarCardData);
      console.log('\n\nSimilar Card List = ', similarCardList[0]);

      if (result.status === 200) {
        openModal(true);
      }
    } catch (error) {}
  };

  const openModal = (value: boolean) => {
    setModalVisible(value);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <InputComponent
        placeholder={'Name'}
        hidden={false}
        header={'Name'}
        value={name}
        setter={setName}></InputComponent>
      <InputComponent
        placeholder={'Email'}
        hidden={false}
        header={'Email'}
        value={email}
        setter={setEmail}></InputComponent>
      <InputComponent
        placeholder={'Phone'}
        hidden={false}
        header={'Phone'}
        value={phone}
        setter={setPhone}></InputComponent>

      <MainButtonComponent
        title="Save"
        onPressing={fetchSimilarCards}></MainButtonComponent>

      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onBackdropPress={closeModal}>
        <View style={[styles.modalContainer, {flex: 1}]}>
          <Text style={styles.similarCardsText}>
            Similar Cards Alredy Exists!
          </Text>

          <FlatList
            data={similarCardList}
            renderItem={renderItem}
            keyExtractor={item => item.card_id}
          />
          <View style={styles.buttonContainer}>
            <Text style={styles.chooseOptionText}>Choose an Option</Text>
            <MainButtonComponent title="Overwrite Existing Card"></MainButtonComponent>
            <MainButtonComponent title="Add to Existing Contacts"></MainButtonComponent>
            <MainButtonComponent title="Add as a New Contact"></MainButtonComponent>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    color: colors['primary-text'],
    flex: 1,
  },
  text: {
    color: colors['primary-text'],
    fontSize: 40,
  },
  showButton: {
    marginTop: 20,
    height: 30,
    marginHorizontal: 20,
    backgroundColor: '#488a99',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modal: {
    justifyContent: 'flex-end',
  },
  modalContainer: {
    marginTop: 100,
    borderRadius: 10,
    backgroundColor: colors['secondary-light'],
    alignItems: 'center',
    marginHorizontal: -20,
  },

  similarCardsText: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: colors['primary-text'],
  },
  similarCardsContainer: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 14,
    width: 350,
  },
  contactName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 20,
    color: colors['primary-text'],
  },
  singleCard: {
    marginBottom: 20,
  },
  buttonContainer: {
    width: 350,
    marginBottom: 30,
    marginTop: 20,
    flexDirection: 'column',
    gap: 10,
    textAlign: 'center',
  },
  chooseOptionText: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: colors['primary-text'],
  },
});

export default DetailsInputScreen;
