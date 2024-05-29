import { itActsAsFavoriteRestoranModel } from './contracts/favoriteRestoranContract';

let favoriteRestoran = [];

const FavoriteRestoranArray = {

  getRestoran(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return favoriteRestoran.find((restaurant) => restaurant.id === id);
  },

  getAllRestoran() {
    return favoriteRestoran;
  },

  putRestoran(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar Restoran Favorit
    if (this.getRestoran(restaurant.id)) {
      return;
    }

    favoriteRestoran.push(restaurant);
  },

  deleteRestoran(id) {
    // cara boros menghapus film dengan meng-copy restoran yang ada
    // kecuali restoran dengan id == id
    favoriteRestoran = favoriteRestoran.filter((restaurant) => restaurant.id !== id);
  },
};

// eslint-disable-next-line no-undef
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef, no-return-assign
  afterEach(() => favoriteRestoran = []);

  itActsAsFavoriteRestoranModel(FavoriteRestoranArray);
});
