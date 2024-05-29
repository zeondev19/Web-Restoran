import { itActsAsFavoriteRestoranModel } from './contracts/favoriteRestoranContract';
import FavoriteRestoranIdb from '../src/scripts/data/restoran-favourite';

// eslint-disable-next-line no-undef
describe('Favorite Movie Idb Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    (await FavoriteRestoranIdb.getAllRestoran()).forEach(async (restaurant) => {
      await FavoriteRestoranIdb.deleteRestoran(restaurant.id);
    });
  });

  itActsAsFavoriteRestoranModel(FavoriteRestoranIdb);
});
