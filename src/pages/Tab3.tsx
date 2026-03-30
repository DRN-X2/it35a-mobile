import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Modal from '../components/Modal';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Specter-009</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <Modal />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
