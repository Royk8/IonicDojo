import React from "react";
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle } from "@ionic/react";
import { Contact } from "../models/contact.model";

const ContactComponent: React.FC<{ contact: Contact }> = ({contact}) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>
                    {contact.firstName} {contact.lastName}
                </IonCardTitle>
                <IonCardSubtitle>
                    {contact.country}
                    </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                Email: {contact.email} <br />
                Phone: {contact.phone} <br />
                </IonCardContent>
        </IonCard>
    );}

export default ContactComponent;