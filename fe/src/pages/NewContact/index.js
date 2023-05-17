import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <Input
        placeholder="Nome"
      />
      <Input
        placeholder="E-mail"
      />
      <Input
        placeholder="Telefone"
      />
      <Select>
        <option value="123">Instagram</option>
        <option value="123">Facebook</option>
        <option value="123">Twitter</option>
      </Select>

      <Button type="button" disabled>Salvar alterações</Button>
    </>
  );
}
