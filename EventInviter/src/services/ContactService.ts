import { Contact } from "../types/contact";

const CONTACTS: Contact[] = [
  {
    id: 1,
    firstName: "Hanna",
    lastName: "Rodler",
    telNumber: "+43 680 45576284",
    email: "hannah@example.com",
  },
  {
    id: 2,
    firstName: "Tobias",
    lastName: "Kothbauer",
    telNumber: "+43 650 2109448",
    email: "tobias@example.com",
  },
  {
    id: 3,
    firstName: "Elena",
    lastName: "Ebetshuber",
    telNumber: "+43 664 88440326",
    email: "elena@example.com",
  },
  {
    id: 4,
    firstName: "Max",
    lastName: "Mustermann",
    telNumber: "+43 664 12345678",
    email: "max@example.com",
  },
  {
    id: 5,
    firstName: "Maria",
    lastName: "Musterfrau",
    telNumber: "+43 664 87654321",
    email: "maria@example.com",
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Doe",
    telNumber: "+43 664 12345678",
    email: "john@example.com",
  },
];

export function getContacts() {
  return new Promise<{ data: Contact[] }>((resolve) =>
    setTimeout(() => resolve({ data: CONTACTS }), 500)
  );
}

export const initializeContacts = (): Contact[] => {
  return CONTACTS;
};
