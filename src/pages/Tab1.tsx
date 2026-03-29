import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Specter-009</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* Everything must be inside IonContent to be visible/centered properly */}
        <div className="container">
          <IonCard className="qr-card">
            <img alt="QR Code" src="src/pages/qrcode.png" />
            <IonCardHeader>
              <IonCardTitle>Scan Me!</IonCardTitle>
              <IonCardSubtitle></IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              Point your camera at the code.
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};


export default Tab1;

