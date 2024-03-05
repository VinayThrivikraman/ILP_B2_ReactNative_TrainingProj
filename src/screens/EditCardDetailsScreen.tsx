//EditCardScreen
import React, {useState} from 'react';
import EditInputComponent from '../component/InputComponent';
import BackButtonIcon from '../assets/images/backButton.svg';
import CompanyIcon from '../assets/images/companyIcon.svg';
import PhoneIcon from '../assets/images/phoneIcon.svg';
import MailIcon from '../assets/images/mailIcon.svg';
import WebsiteIcon from '../assets/images/websiteIcon.svg';
import DesignationIcon from '../assets/images/companyIcon.svg';
import PersonIcon from '../assets/images/person.svg';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getSimilarCards} from '../network/apiHook';
import {getItem} from '../utils/Utils';
import Constants from '../utils/Constants';
import Modal from 'react-native-modal';
import CardComponent from '../component/CardComponent';
import colors from '../utils/colorPallete';
import MainButtonComponent from '../component/MainButtonComponent';
import CommonImageComponent from '../component/CommonImageComponent';
import {useNavigation} from '@react-navigation/native';
import EditCardNameComponent from '../component/EditCardNameComponent';

type Card = {
  card_id: string;
  card_name: string;
  email: string;
  phone: string;
  job_title: string;
  company_name: string;
  company_website: string;
};
type ContactCards = {
  contact_name: string;
  cards: Card[];
};

const EditCardDetailsScreen = () => {
  const [title, setTitle] = useState('');
  const [company_name, setCompanyName] = useState('');
  const [card_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [cardList, setCardList] = useState<ContactCards[] | undefined>([]);
  const [isModal1Visible, setModal1Visible] = useState(false);
  const navigation = useNavigation();
  const renderItem = ({item}: any) => (
    <View
      style={[
        styles.similarCardsContainer,
        {flexDirection: 'column', marginBottom: 20, gap: 20},
      ]}>
      <Text style={styles.contactName}>{item.contact_name}</Text>
      {item.cards.map((card: any) => (
        <CardComponent
          key={card.card_id}
          alignToSides={false}
          job_position={card.job_title}
          name={card.card_name}
          email={card.email}
          phone_number={card.phone}
          company_name={card.company_name}
          card_id={''}
        />
      ))}
    </View>
  );

  const getSimilarCardsHere = async () => {
    try {
      const user_id = (await getItem(Constants.USER_ID)) ?? '';
      const jwtToken = (await getItem(Constants.JWT_TOKEN)) ?? '';
      const result = await getSimilarCards(
        user_id,
        card_name,
        phone,
        email,
        jwtToken,
      );
      console.log('From editPage', result);

      if (result.status == 200) {
        setCardList(result.similarCardData);
        setModal1Visible(true);
      }
    } catch (error) {}
  };
  return (
    <View style={styles.editContainer}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.navigate('Contacts' as never);
        }}>
        <BackButtonIcon />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <CommonImageComponent />
      </View>
      <View style={styles.cardNameHead}>
        <EditCardNameComponent
          placeholder={'Card Name'}
          value={card_name}
          setter={setName}
        />
      </View>
      <View style={styles.iconField}>
        <View style={styles.icon}>
          <DesignationIcon width={30} height={20} />
        </View>
        <View style={styles.input}>
          <EditInputComponent
            placeholder="Job title"
            header="Job Title"
            hidden={false}
            value={title}
            setter={setTitle}
          />
        </View>
      </View>
      <View style={styles.iconField}>
        <View style={styles.icon}>
          <CompanyIcon width={30} height={20} />
        </View>
        <View style={styles.input}>
          <EditInputComponent
            placeholder="Company Name"
            header="Company Name"
            hidden={false}
            value={company_name}
            setter={setCompanyName}
          />
        </View>
      </View>
      <View style={styles.iconField}>
        <View style={styles.icon}>
          <PhoneIcon width={30} height={20} />
        </View>
        <View style={styles.input}>
          <EditInputComponent
            placeholder="Phone Number"
            header="Phone Number"
            hidden={false}
            value={phone}
            setter={setPhone}
          />
        </View>
      </View>
      <View style={styles.iconField}>
        <View style={styles.icon}>
          <MailIcon width={30} height={20} />
        </View>
        <View style={styles.input}>
          <EditInputComponent
            placeholder="E-mail"
            header="E-mail"
            hidden={false}
            value={email}
            setter={setEmail}
          />
        </View>
      </View>
      <View style={styles.iconField}>
        <View style={styles.icon}>
          <WebsiteIcon width={30} height={20} />
        </View>
        <View style={styles.input}>
          <EditInputComponent
            placeholder="Website"
            header="Website"
            hidden={false}
            value={website}
            setter={setWebsite}
          />
        </View>
      </View>
      <View style={styles.save}>
        <MainButtonComponent
          children={undefined}
          title={'Save'}
          onPressing={getSimilarCardsHere}
        />
      </View>
      <Modal
        isVisible={isModal1Visible}
        animationIn={'slideInUp'}
        onBackButtonPress={() => setModal1Visible(false)}
        style={styles.view}>
        <View style={styles.bottomSheet}>
          <Text
            style={{
              fontSize: 28,
              color: colors['primary-text'],
              fontWeight: '600',
              marginBottom: 20,
            }}>
            Similar cards already exist!
          </Text>
          <FlatList
            data={cardList}
            renderItem={renderItem}
            keyExtractor={item => item.contact_name}
            contentContainerStyle={{paddingBottom: 20}}
          />
          <View style={styles.buttonContainer}>
            <Text
              style={[
                styles.contactName,
                {textAlign: 'center', paddingVertical: 10},
              ]}>
              Choose An Option
            </Text>
            <MainButtonComponent
              title="Overwrite Existing Card"
              onPressing={() => console.log('Overwrite')}
              children={<></>}
            />
            <MainButtonComponent
              title="Add Card To Existing Card"
              onPressing={() => console.log('Overwrite')}
              children={<></>}
            />
            <MainButtonComponent
              title="Create New Card"
              onPressing={() => console.log('Create new card')}
              children={<></>}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
  },
  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheet: {
    width: '100%',
    height: '85%',
    alignItems: 'center',
    paddingTop: 25,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: colors['secondary-light'],
  },
  similarCardsText: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
  },
  similarCardsContainer: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
    borderRadius: 14,
    width: 350,
  },
  contactName: {
    paddingStart: 10,
    fontSize: 24,
    color: colors['primary-text'],
    fontWeight: 'bold',
  },
  buttonContainer: {
    gap: 10,
    paddingVertical: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: 400,
    height: 250,
    backgroundColor: '#FFF',
    marginTop: 20,
  },
  backButton: {
    width: '100%',
    marginTop: 20,
    marginLeft: 20,
  },
  cardName: {
    fontSize: 35,
    fontWeight: '700',
    color: colors['primary-text'],
  },
  iconField: {
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    flex: 1,
    alignSelf: 'center',
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    backgroundColor: '#E8EDF2',
  },
  input: {
    flex: 10,
    paddingRight: 10,
  },
  save: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardNameHead: {
    marginTop: 5,
    marginBottom: 5,
  },
});

export default EditCardDetailsScreen;
