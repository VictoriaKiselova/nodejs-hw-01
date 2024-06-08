import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const allContacts = JSON.parse(data);

  for (let i = 0; i < allContacts.length; i++) {
    let probability = parseInt(Math.random() * 100);
    if (probability >= 50) {
      allContacts.splice(i, 1);
    }
  }
  await fs.writeFile(PATH_DB, JSON.stringify(allContacts, null, 2));
};

await thanos();
