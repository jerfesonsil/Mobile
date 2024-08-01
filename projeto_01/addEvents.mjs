// addEvents.mjs
import { db } from './firebaseConfig.mjs';
import { collection, addDoc } from "firebase/firestore"; 

const events = [
  { 
    id: '1', 
    title: 'Título do Evento 1', 
    date: '1 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 1', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://welcometozante.com/wp-content/uploads/2021/01/party-zakynthos-welcometozante.jpg' 
  },
  { 
    id: '2', 
    title: 'Título do Evento 2', 
    date: '2 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 2', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://cdn.ome.lt/aymPkEO0fYzmsD2TRjQ9XebO-6k=/970x360/smart/uploads/conteudo/fotos/44138122945_56e3294da5_o.jpg' 
  },
  { 
    id: '3', 
    title: 'Título do Evento 3', 
    date: '3 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 3', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://agendor-blog-uploads.s3.sa-east-1.amazonaws.com/2021/07/29161146/como-vender-eventos-corporativos.jpg' 
  },
  { 
    id: '4', 
    title: 'Título do Evento 4', 
    date: '4 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 4', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://i.ytimg.com/vi/Jrhz1Xno_gY/maxresdefault.jpg' 
  },
  { 
    id: '5', 
    title: 'Título do Evento 5', 
    date: '5 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 5', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg?fit=1280%2C720&ssl=1' 
  },
  { 
    id: '6', 
    title: 'Título do Evento 6', 
    date: '6 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 6', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://agendor-blog-uploads.s3.sa-east-1.amazonaws.com/2021/07/29161146/como-vender-eventos-corporativos.jpg' 
  },
  { 
    id: '7', 
    title: 'Título do Evento 7', 
    date: '7 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 7', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://welcometozante.com/wp-content/uploads/2021/01/party-zakynthos-welcometozante.jpg' 
  },
  { 
    id: '8', 
    title: 'Título do Evento 8', 
    date: '8 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 8', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://cdn.ome.lt/aymPkEO0fYzmsD2TRjQ9XebO-6k=/970x360/smart/uploads/conteudo/fotos/44138122945_56e3294da5_o.jpg' 
  },
  { 
    id: '9', 
    title: 'Título do Evento 9', 
    date: '9 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 9', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://i.ytimg.com/vi/Jrhz1Xno_gY/maxresdefault.jpg' 
  },
  { 
    id: '10', 
    title: 'Título do Evento 10', 
    date: '10 de Janeiro de 2025', 
    location: 'Centro de Convenções Local 10', 
    tags: ['Música', 'Arte', 'Comida'], 
    imageUrl: 'https://i0.wp.com/assets.b9.com.br/wp-content/uploads/2021/03/shows-ao-vivo.jpg?fit=1280%2C720&ssl=1' 
  },
];

const addEventsToFirestore = async () => {
  try {
    const eventsCollection = collection(db, "events");

    for (const event of events) {
      await addDoc(eventsCollection, event);
    }

    console.log("Eventos adicionados com sucesso!");
  } catch (e) {
    console.error("Erro ao adicionar eventos: ", e);
  }
};

addEventsToFirestore();
