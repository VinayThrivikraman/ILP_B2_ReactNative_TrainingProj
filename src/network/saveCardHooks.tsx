import api from './api';

export async function overwriteExistingCard(
  card_id: string,
  user_id: string,
  updatedCardDetails: any,
) {
  (user_id = '123'), (card_id = 'card001');
  try {
    const overwriteResponse = await api.post('/api/v1/overwriteExistingCard');

    console.log(overwriteResponse);
  } catch (error) {}
}
