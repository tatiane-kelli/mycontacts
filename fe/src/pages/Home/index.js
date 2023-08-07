import { Link } from 'react-router-dom';
import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';
import arrowIcon from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrowIcon} alt="Arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Joseph Joestar</strong>
            <small>instagram</small>
          </div>
          <span>josephjoestar@mail.com</span>
          <span>(11) 12233-4455</span>
        </div>
        <div className="actions">
          <Link to="/edit:123">
            <img src={editIcon} alt="Edit" />
          </Link>
          <button type="button">
            <img src={trashIcon} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}

fetch('http://localhost:3000/contacts', {
  method: 'DELETE',
  headers: new Headers({
    'X-App-Id': '123',
  }),
})
  .then(async (response) => {
    const json = await response.json();
    console.log('response', response);
    json.forEach((contact) => {
      console.log(contact.name);
    });
  })
  .catch((error) => {
    console.log('erro', error);
  });
