const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Resto');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('#/favourite');
});

// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.list-tempat');
  I.see('Daftar Masih Kosong', '.list-tempat');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('.list-tempat');
  I.see('Daftar Masih Kosong', '.list-tempat');

  I.amOnPage('#/explore');
  I.wait(5);

  I.seeElement('.deskripsiResto a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.deskripsiResto a').first();
  // eslint-disable-next-line no-undef
  const nameRestaurant = locate('.juduldesc').first();
  const firstRestaurantName = await I.grabTextFrom(nameRestaurant);
  I.click(firstRestaurant);
  I.wait(5);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favourite');
  I.wait(5);
  I.seeElement('.judulResto');
  const likedRestaurantName = await I.grabTextFrom('.juduldesc');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// eslint-disable-next-line no-undef
Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('.list-tempat');
  I.see('Daftar Masih Kosong', '.list-tempat');

  I.amOnPage('#/explore');
  I.wait(5);

  I.seeElement('.deskripsiResto a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.deskripsiResto a').first();
  // eslint-disable-next-line no-undef
  const nameRestaurant = locate('.juduldesc').first();
  const firstRestaurantName = await I.grabTextFrom(nameRestaurant);
  I.click(firstRestaurant);
  I.wait(5);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favourite');
  I.wait(5);
  I.seeElement('.judulResto');
  const likedRestaurantName = await I.grabTextFrom('.juduldesc');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
  // eslint-disable-next-line no-undef
  const likedRestaurantLink = locate('.deskripsiResto a').first();

  I.clickLink(likedRestaurantLink);
  I.wait(5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favourite');
  I.dontSee(likedRestaurantName);
});
