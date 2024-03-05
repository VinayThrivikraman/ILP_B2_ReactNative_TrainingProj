//ApiHook-to view card details
import api from './api';

interface CardDetailsProp {
  user_id: string;
  token: string;
  card_id: string;
}

interface CardDetailsResponse {
  statusCode: string;
  cardDetailsResp: any;
}

export async function listCardDetails({
  user_id,
  token,
  card_id,
}: CardDetailsProp): Promise<CardDetailsResponse> {
  let statusCode: string = '';
  let cardDetailsResp: any = '';

  const CardDetailPayload = {
    user_id: user_id,
    card_id: card_id,
  };

  try {
    const CardDetailsResponse = await api.get('api/v1/getCardDetails', {
      params: CardDetailPayload,
      headers: {Authorization: `Bearer ${token}`},
    });

    console.log(
      '\n\nAPI: Card Details Response : ',
      CardDetailsResponse.data.data,
    );
    statusCode = CardDetailsResponse.status.toString();

    cardDetailsResp = CardDetailsResponse.data;
  } catch (error: any) {
    console.log('Error while logging in:', error);
  }

  return {statusCode, cardDetailsResp};
}
