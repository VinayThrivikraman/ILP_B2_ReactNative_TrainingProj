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
    loginResp = logInResponse.data;
    console.log(loginResp);
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
