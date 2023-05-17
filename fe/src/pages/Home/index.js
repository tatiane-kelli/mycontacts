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
        <a href="/">Novo contato</a>
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
          <a href="/">
            <img src={editIcon} alt="Edit" />
          </a>
          <button type="button">
            <img src={trashIcon} alt="Delete" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Jotaro Kujo</strong>
            <small>instagram</small>
          </div>
          <span>jotarokujo@mail.com</span>
          <span>(11) 12233-4455</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={editIcon} alt="Edit" />
          </a>
          <button type="button">
            <img src={trashIcon} alt="Delete" />
          </button>
        </div>
      </Card>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Jolyne Kujo</strong>
            <small>instagram</small>
          </div>
          <span>jolynekujo@mail.com</span>
          <span>(11) 12233-4455</span>
        </div>
        <div className="actions">
          <a href="/">
            <img src={editIcon} alt="Edit" />
          </a>
          <button type="button">
            <img src={trashIcon} alt="Delete" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
