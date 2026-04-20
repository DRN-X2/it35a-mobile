import { IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { chatboxEllipsesOutline, shareOutline, thumbsUpOutline} from 'ionicons/icons';

const Feed: React.FC = () => {

  const games = [
    {name: 'Pokemon Yellow'},
    {name: 'Pokemon Red'},
    {name: 'Pokemon Blue'}
  ]


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
            <IonTitle>Feed</IonTitle>
          </IonButtons>

        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList inset={true}>

          {games.map((item, index) => (
            <IonItem>
               <IonCard>
                  <img alt="Silhouette of mountains" src="https://imgs.search.brave.com/4-rEEUuA7Ex2POouYoAo2h39pvhNpfEXB5sqyfU41F8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG9rZW1vbi5jb20v/c3RhdGljLWFzc2V0/cy9jb250ZW50LWFz/c2V0cy9jbXMyL2lt/Zy9wb2tlZGV4L2Z1/bGwvMzg0X2YyLnBu/Zw" />
                    <IonCardHeader>
                       <IonCardTitle>{item.name}</IonCardTitle>
                           <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    </IonCardHeader>

                       <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
               </IonCard>
            </IonItem>


          ))}


        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Feed;