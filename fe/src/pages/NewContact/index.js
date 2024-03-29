import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        contact_id: formData.contactId,
      };

      const response = await ContactsService.createContact(contact);
      console.log(response);
    } catch {
      alert('Ocorreu um erro ao cadastrar o contato.');
    }
  }

  return (
    <>
      <PageHeader
        title="Novo contato"
      />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
      />
    </>
  );
}
