import UrlParser from '../../routes/url-parser';
import RestorantSource from '../../data/restoran-source';
import { createRestoranDetailTemplate } from '../templates/template-create';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div id="restoranDetail" class="restoran-detail"></div>
    <div id="likeButtonContainer" ></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restoran = await RestorantSource.detailRestoran(url.id);
    const restoranContainer = document.querySelector('#restoranDetail');

    restoranContainer.innerHTML = createRestoranDetailTemplate(restoran);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restoran.id,
        name: restoran.name,
        description: restoran.description,
        pictureId: restoran.pictureId,
        rating: restoran.rating,
        city: restoran.city,
      },
    });
  },
};

export default Detail;
