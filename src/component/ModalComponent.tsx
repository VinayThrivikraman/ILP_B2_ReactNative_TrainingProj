import React, {useState} from 'react';
import colors from '../utils/colorPallete';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CardComponent from '../component/CardComponent';
import MainButtonComponent from '../component/MainButtoncomponent';
import Modal from 'react-native-modal';

const CardData = [
  {
    contact_name: 'Vinay',
    cards: [
      {
        card_id: 'c11',
        card_name: 'Vinay',
        email: 'vinay.com',
        phone: '1234567',
        job_position: 'Trainee',
        company_name: 'Experion',
      },
    ],
  },
  {
    contact_name: 'Anly S',
    cards: [
      {
        card_id: 'c04',
        card_name: 'Anly',
        email: 'anly.com',
        phone: '1234567',
        job_position: 'Trainee',
        company_name: 'Experion',
      },
      {
        card_id: 'c12',
        card_name: 'Vipin',
        email: 'v@g',
        phone: '1234567',
        job_position: 'Trainee',
        company_name: 'Experion',
      },
    ],
  },
];

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
          job_position={card.job_position}
          name={card.card_name}
          email={card.email}
          phone_number={card.phone}
          company_name={card.company_name}
        />
      </View>
    ))}
  </View>
);

const ModalPage = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.showButton}>
        <Text style={styles.showButtonText}>SHOW MODAL ONE</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Home Screen</Text>

      <Modal
        isVisible={isModalVisible}
        style={styles.modal}
        onBackdropPress={closeModal}>
        <View style={[styles.modalContainer, {flex: 1}]}>
          <Text style={styles.similarCardsText}>
            Similar Cards Alredy Exists!
          </Text>

          <FlatList
            data={CardData}
            renderItem={renderItem}
            keyExtractor={item => item.contact_name}
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

export default ModalPage;
