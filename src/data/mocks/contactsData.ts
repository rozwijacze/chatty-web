import { Contact } from '../../types/Contact';

const contactsData: Contact[] = [
    {
        id: 1,
        name: 'Jeff',
        surname: 'Besos',
        img: '/src/data/mocks/images/Contact_1.jpg',
        online: true
    },
    {
        id: 2,
        name: 'Karolajn',
        surname: 'Derpieński',
        img: '/src/data/mocks/images/Contact_2.jpg',
        online: false
    },
    {
        id: 3,
        name: 'Marcin',
        surname: 'Krasucki',
        img: '/src/data/mocks/images/Contact_3.jpg',
        online: false
    },
    {
        id: 4,
        name: 'Rafonix',
        surname: 'Rafonix',
        img: '/src/data/mocks/images/Contact_4.jpg',
        online: true
    }
];

export default contactsData;
