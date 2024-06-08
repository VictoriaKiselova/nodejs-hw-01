import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  let allContacts = JSON.parse(data);
  allContacts = [];
  await fs.writeFile(PATH_DB, JSON.stringify(allContacts));
};
await removeAllContacts();
