//CardDetailsScreen
import React, {useEffect, useState} from 'react';
import colors from '../utils/colorPallete';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CardDetailComponent from '../component/CardDetailComponent';
import BackButtonIcon from '../assets/images/backButton.svg';
import DeleteIcon from '../assets/images/deleteIcon.svg';
import ShareIcon from '../assets/images/shareIcon.svg';
import CompanyIcon from '../assets/images/companyIcon.svg';
import PhoneIcon from '../assets/images/phoneIcon.svg';
import MailIcon from '../assets/images/mailIcon.svg';
import WebsiteIcon from '../assets/images/websiteIcon.svg';
import CommonImageComponent from '../component/CommonImageComponent';
import ProfileButtonComponent from '../component/ProfileButtonComponent';
import MainButtonComponent from '../component/MainButtonComponent';
import {getItem} from '../utils/Utils';
import Constants from '../utils/Constants';
import {listCardDetails} from '../network/viewCardApi';
import {useNavigation} from '@react-navigation/native';

const CardDetailsScreen = ({route}: any) => {
  const [cardDetails, setCardDetails] = useState({});
  const navigation = useNavigation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const userData = (await getItem(Constants.USER_DATA)) ?? '{}';
        // console.log('\n\nUserData is : ', userData);
        // const userDataParsed = JSON.parse(userData);
        const userId = (await getItem(Constants.USER_ID)) ?? '';
        const token = (await getItem(Constants.JWT_TOKEN)) ?? '';
        console.log('\n\nRANDOM THINGSS:: ', userId, '\n', token);
        const card_id = route.params.card_id;
        console.log('\n\nCARD ID : ', card_id);
        const {cardDetailsResp} = await listCardDetails({
          user_id: userId,
          token: token,
          card_id: card_id,
        });

        console.log('\n\nCard Details: ', cardDetailsResp.data);
        setCardDetails(cardDetailsResp.data);
        console.log('\n\nFrom Groups', cardDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <BackButtonIcon />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <CommonImageComponent />
      </View>
      <View style={styles.conatctHead}>
        <Text style={styles.cardName}>{cardDetails.card_name}</Text>
        <Text style={styles.jobTitle}>{cardDetails.job_title}</Text>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonTitle}>Translate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonTitle}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardDetailsContainer}>
        <CardDetailComponent card_detail={cardDetails.company_name}>
          <CompanyIcon width={20} height={20} />
        </CardDetailComponent>
        <CardDetailComponent card_detail={cardDetails.phone}>
          <PhoneIcon width={20} height={20} />
        </CardDetailComponent>
        <CardDetailComponent card_detail={cardDetails.email}>
          <MailIcon width={20} height={20} />
        </CardDetailComponent>
        <CardDetailComponent card_detail={cardDetails.company_website}>
          <WebsiteIcon width={20} height={20} />
        </CardDetailComponent>
      </View>
      <View style={styles.editButtons}>
        <View style={styles.buttonContainer}>
          <ProfileButtonComponent
            children={<DeleteIcon width={40} height={25} />}
            title={'Delete'}
            proButtonBgColor={'#FFF'}
            proButtonTextColor={colors['primary-danger']}
            onPressing={function () {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <MainButtonComponent
            children={<ShareIcon width={40} height={25} />}
            title={'Share'}
            onPressing={function () {
              throw new Error('Function not implemented.');
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    color: colors['primary-text'],
    flex: 1,
  },
  conatctHead: {
    flexDirection: 'column',
    // marginTop: '3%',
    marginBottom: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardName: {
    fontSize: 35,
    fontWeight: '700',
    color: colors['primary-text'],
  },
  jobTitle: {
    color: '#565656',
    fontSize: 24,
  },
  cardDetailsContainer: {
    backgroundColor: colors['secondary-light'],
    marginLeft: 30,
    alignItems: 'stretch',
    marginBottom: 10,
  },
  imageContainer: {
    width: 400,
    height: 250,
    backgroundColor: '#FFF',
    marginTop: 25,
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFF',
    paddingLeft: 50,
    paddingRight: 50,
    marginTop: 10,
  },
  text: {
    color: colors['primary-text'],
    fontSize: 40,
  },
  cardButton: {
    alignItems: 'center',
    backgroundColor: '#E8EDF2',
    height: 50,
    width: 30,
    borderRadius: 8,
    flex: 0.5,
    padding: 10,
    fontWeight: '700',
    justifyContent: 'center',
    marginRight: 10,
  },
  cardButtonTitle: {
    fontWeight: 'bold',
    color: colors['primary-text'],
    alignSelf: 'center',
    fontSize: 18,
  },
  editButtons: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    gap: 10,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonContainer: {
    width: '48%',
  },
  backButton: {
    width: '100%',
    marginTop: 20,
    marginLeft: 20,
  },
});

export default CardDetailsScreen;
