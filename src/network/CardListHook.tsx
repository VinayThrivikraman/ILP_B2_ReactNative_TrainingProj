import api from './api';

interface CardListProps {
  cardId: string;
  userId: string;
  jwtToken: string;
}
interface CardParameters {
  company_name: string;
  card_id: string;
  card_name: string;
  email: string;
  phone: string;
  job_title: string;
}

interface CardListResponse {
  statusCode: string;
  cardResp: CardParameters[];
}
export async function getCardList({
  cardId,
  userId,
  jwtToken,
}: CardListProps): Promise<CardListResponse> {
  let statusCode = '';
  let cardResp: CardParameters[] = [];
  const CardPayload = {
    user_id: userId,
    card_id: cardId,
  };
  try {
    const CardResponse = await api.get('api/v1/getCardList', {
      params: CardPayload,
      headers: {Authorization: `Bearer ${jwtToken}`},
    });

    statusCode = CardResponse.status.toString();

    cardResp = CardResponse.data;
    return {statusCode, cardResp};
  } catch (error) {
    console.log('Error while fetching card list:', error);
    return {statusCode, cardResp};
  }
}
