import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestoranIdb from '../../src/scripts/data/restoran-favourite';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestoranIdb,
    restaurant,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestaurant };
