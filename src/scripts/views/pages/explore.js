import RestorantSource from '../../data/restoran-source';
import { createListRestoranTemplate } from '../templates/template-create';

const ExploreRestoran = {
  async render() {
    return `
    <div class="tempat-makan">
    <h2>Rekomendasi restaurant di dekatmu</h2>
    <div class="list-tempat" id="list-tempat"></div>
  </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restoran = await RestorantSource.exploreRestoran();
    const restoranContainer = document.querySelector('#list-tempat');
    restoran.forEach((data) => {
      const listRestoTemplate = createListRestoranTemplate(data);
      restoranContainer.innerHTML += listRestoTemplate;
    });
  },
};

export default ExploreRestoran;
