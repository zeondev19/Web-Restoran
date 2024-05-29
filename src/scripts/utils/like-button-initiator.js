import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-create';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant, favoriteRestaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoran = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

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
    const restoran = await this._favoriteRestaurant.getRestoran(id);
    return !!restoran;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestoran(this._restoran);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestoran(this._restoran.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
