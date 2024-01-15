import Contact from './Contact';

export default interface Message {
    id: number;
    contact: Contact;
    date_of_send: Date;
    date_of_receive: Date;
    content: string;
}
