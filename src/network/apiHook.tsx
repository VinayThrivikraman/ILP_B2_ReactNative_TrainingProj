import api from './api';

interface LogInUserProp {
  loginUserEmail: string;
  loginPassword: string;
}

interface LoginUserResponse {
  success: boolean;
  errorMessage: string;
  statusCode: string;
  loginResp: any;
}

export async function loginUser({
  loginUserEmail,
  loginPassword,
}: LogInUserProp): Promise<LoginUserResponse> {
  let success: boolean = false;
  let errorMessage: string = '';
  let statusCode: string = '';
  let loginResp: any;

  const logInPayload = {
    user_email: loginUserEmail,
    password: loginPassword,
  };

  try {
    console.log('REACHED HERE');
    const logInResponse = await api.post('/userLogin', logInPayload);
    statusCode = logInResponse.status.toString();
    {
      statusCode === '200' ? (success = true) : (success = false);
    }
    loginResp = logInResponse.data.data;
    console.log('\n\nLoginRESP IS : ', loginResp);
  } catch (error: any) {
    console.log('Error while logging in:', error);
    errorMessage = error.message;
  }

  return {
    success,
    statusCode,
    loginResp,
    errorMessage,
  };
}

export async function getContactList(userId: string, jwtToken: string) {
  let statusCode: string = '';
  let contactList = [];
  try {
    const contactListResponse = await api.get(
      `api/v1/getContactList/?user_id=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    );
    statusCode = contactListResponse.status.toString();
    contactList = contactListResponse.data;
    return {statusCode, contactList};
  } catch (error) {
    console.log(error);
    return {error};
  }
}

export async function getSimilarCards(
  user_id: string,
  card_name: string,
  phone: string,
  email: string,
  jwtToken: string,
) {
  try {
    let similarCardData = [];
    console.log('\n\nReached HERE!!!!!!!!!!');
    console.log(
      'User ID: ',
      user_id,
      'Card Name: ',
      card_name,
      'Phone Number',
      phone,
      'Email',
      email,
    );
    const similarCardResponse = await api.get(
      `api/v1/getSimilarCards/?user_id=${user_id}&card_name=${card_name}&phone=${phone}&email=${email}`,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      },
    );
    console.log('\n\nSimilar Card Response: ', similarCardResponse.data);
    similarCardData = similarCardResponse.data.data;
    let status = similarCardResponse.status;
    return {similarCardData, status};
  } catch (error) {
    console.log(error);
    return {error};
  }
}
