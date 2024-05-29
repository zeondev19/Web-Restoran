import FavoriteRestoranIdb from '../src/scripts/data/restoran-favourite';
import * as TestFactories from './helpers/testFactories';

// eslint-disable-next-line no-undef
describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  // eslint-disable-next-line no-undef
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoranIdb.putRestoran({ id: 1 });
  });

  // eslint-disable-next-line no-undef
  afterEach(async () => {
    await FavoriteRestoranIdb.deleteRestoran(1);
  });

  // eslint-disable-next-line no-undef
  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="unlike this restoran"]')).toBeTruthy();
  });

  // eslint-disable-next-line no-undef
  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    // eslint-disable-next-line no-undef
    expect(document.querySelector('[aria-label="like this restoran"]')).toBeFalsy();
  });

  // eslint-disable-next-line no-undef
  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoranIdb.getAllRestoran()).toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('should not throw error when user click unlike widget if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });
    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoranIdb.deleteRestoran(1);
    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));
    // eslint-disable-next-line no-undef
    expect(await FavoriteRestoranIdb.getAllRestoran()).toEqual([]);
  });
});
