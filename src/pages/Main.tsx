import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IonContent, IonPage, IonButton, IonImg } from '@ionic/react';
import './Main.css';

function alerta() {
  alert('Olá, bem-vindo ao site');
};

const Main: React.FC = () => {
  const [randomImage, setRandomImage] = useState<any>(null);

  const fetchRandomImage = async () => {
    const accessKey = 'aH6exAolwNULW4OpOM5KCHkGh6Kkpp6GarJXt7UVc5o';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}`;

    try {
      const response = await axios.get(apiUrl);
      setRandomImage(response.data);
    } catch (error) {
      console.error("Erro ao buscar imagem aleatória:", error);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h1 className='titulo'>Bem-vindo ao meu site</h1>
        <p className='paragrafo'>Parágrafo de exemplo</p>
        <IonButton className='button' onClick={alerta}>Clique aqui</IonButton>
      </IonContent>

      <IonContent className='importante'>
        <h1 className='titulo'>Seção importante</h1>
        <p className='paragrafo'>Essa é uma seção importante</p>
      </IonContent>

      <IonContent>
        <IonImg src="assets\images\Logo_Unijui_Home.png" className='img'>
        </IonImg>
      </IonContent>

      <IonContent className='random-image'>
        <IonButton onClick={fetchRandomImage}>Carregar Imagem Aleatória</IonButton>
        {randomImage && (
          <IonImg src={randomImage.urls.small} alt={randomImage.alt_description} className='img'></IonImg>
        )}
      </IonContent>

    </IonPage>
  );
};

export default Main;