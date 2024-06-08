import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const arrData = JSON.parse(data);
  let quantity = 0;
  for (let i = 0; i < arrData.length; i++) {
    quantity += 1;
  }
  return quantity;
};

console.log(await countContacts());
