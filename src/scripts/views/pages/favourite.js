import FavoriteRestoranIdb from '../../data/restoran-favourite';
import { createListRestoranTemplate } from '../templates/template-create';

const FavouriteRestoran = {
  async render() {
    return `
    <div class="tempat-makan">
    <h2>Restoran Favorit Kamu</h2>
    <div class="list-tempat" id="tempat-list"></div>
  </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restoran = await FavoriteRestoranIdb.getAllRestoran();
    const restoranContainer = document.querySelector('#tempat-list');

    if (restoran.length === 0) {
      restoranContainer.innerHTML = '<p >Daftar Masih Kosong</p>';
    } else {
      restoran.forEach((data) => {
        restoranContainer.innerHTML += createListRestoranTemplate(data);
      });
    }
  },
};

export default FavouriteRestoran;
