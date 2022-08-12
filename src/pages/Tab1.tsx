import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useState } from 'react';
import { Contact } from '../models/contact.model';
import ContactComponent from '../components/ContactComponent';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [contacts, setContacts] = useState<Contact[]>([]);

  function addContact() {
    const formatedContact : Contact = { "firstName": firstName, "lastName": lastName, "country": country, "email": email, "phone": phone };
    setContacts(contacts => [...contacts, formatedContact]);
    setShowModal(false);
  }

  return (
    <IonPage>
      <IonHeader class="ion-margint-top">
        <IonToolbar>
          <IonTitle class='ion-text-center'>Contact List</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonList>
          {contacts.map((contact, index) => <ContactComponent key={index} contact={contact} />)}
        </IonList>
      </IonContent>
      <IonButton onClick={() => setShowModal(true)}>Add Contact</IonButton>
      <IonModal isOpen={showModal}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
            </IonButtons>
            <IonTitle>Add Contact</IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={addContact}>Save</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className='ion-padding'>
          <IonItem>
            <IonLabel position="stacked">First Name</IonLabel>
            <IonInput value={firstName} placeholder='First Name' onIonChange={(e: any) => setFirstName(e.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Last Name</IonLabel>
            <IonInput value={lastName} placeholder='Last Name' onIonChange={(e: any) => setLastName(e.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Country</IonLabel>
            <IonInput value={country} placeholder='Country' onIonChange={(e: any) => setCountry(e.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput value={email} placeholder='Email' onIonChange={(e: any) => setEmail(e.detail.value!)} />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Phone</IonLabel>
            <IonInput value={phone} placeholder='Phone' onIonChange={(e: any) => setPhone(e.detail.value!)} />
          </IonItem>
        </IonContent>
      </IonModal>

    </IonPage>
  );
};

export default Tab1;
