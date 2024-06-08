import path from 'node:path';

const ownDir = process.cwd();
export const PATH_DB = path.join(ownDir, 'src', 'db', 'db.json');
console.log(PATH_DB);
