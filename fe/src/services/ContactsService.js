import delay from '../utils/delay';

class ContactsService {
  async listContacts(orderBy = 'asc') {
    const response = await fetch(
      `http://localhost:3000/contacts?orderBy=${orderBy}`,
    );

    await delay(500);

    const json = await response.json();
    return json;
  }
}

export default new ContactsService();
