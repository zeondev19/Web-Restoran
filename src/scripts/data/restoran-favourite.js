import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestoranIdb = {
  async getRestoran(id) {
<<<<<<< HEAD
    if (!id) {
      return;
    }
    // eslint-disable-next-line consistent-return
=======
>>>>>>> ec89dbb281ad28a969e211f4efd93ba022d3ea61
    return (await dbPromise).get(OBJECT_STORE_NAME, id);
  },
  async getAllRestoran() {
    return (await dbPromise).getAll(OBJECT_STORE_NAME);
  },
  async putRestoran(restoran) {
<<<<<<< HEAD
    // eslint-disable-next-line no-prototype-builtins
    if (!restoran.hasOwnProperty('id')) {
      return;
    }
    // eslint-disable-next-line consistent-return
=======
>>>>>>> ec89dbb281ad28a969e211f4efd93ba022d3ea61
    return (await dbPromise).put(OBJECT_STORE_NAME, restoran);
  },
  async deleteRestoran(id) {
    return (await dbPromise).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteRestoranIdb;
