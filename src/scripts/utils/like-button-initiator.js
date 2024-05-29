<<<<<<< HEAD
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-create';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant, favoriteRestaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoran = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;
=======
import FavoriteRestoranIdb from '../data/restoran-favourite';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-create';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoran = restaurant;
>>>>>>> ec89dbb281ad28a969e211f4efd93ba022d3ea61

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restoran;

    if (await this._isRestoranExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoranExist(id) {
<<<<<<< HEAD
    const restoran = await this._favoriteRestaurant.getRestoran(id);
=======
    const restoran = await FavoriteRestoranIdb.getRestoran(id);
>>>>>>> ec89dbb281ad28a969e211f4efd93ba022d3ea61
    return !!restoran;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
<<<<<<< HEAD
      await this._favoriteRestaurant.putRestoran(this._restoran);
=======
      await FavoriteRestoranIdb.putRestoran(this._restoran);
>>>>>>> ec89dbb281ad28a969e211f4efd93ba022d3ea61
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
<<<<<<< HEAD
      await this._favoriteRestaurant.deleteRestoran(this._restoran.id);
=======
      await FavoriteRestoranIdb.deleteRestoran(this._restoran.id);
>>>>>>> ec89dbb281ad28a969e211f4efd93ba022d3ea61
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
