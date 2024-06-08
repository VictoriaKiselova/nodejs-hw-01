import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { faker } from '@faker-js/faker';

export const addOneContact = async () => {
  const newContact = {
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
  };

  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.push(newContact);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

await addOneContact();
