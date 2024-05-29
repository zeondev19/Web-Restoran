const itActsAsFavoriteRestoranModel = (favoriteRestaurant) => {
  // eslint-disable-next-line no-undef
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestoran({ id: 1 });
    favoriteRestaurant.putRestoran({ id: 2 });

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestoran(1))
      .toEqual({ id: 1 });
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestoran(2))
      .toEqual({ id: 2 });
    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getRestoran(3))
      .toEqual(undefined);
  });

  // eslint-disable-next-line no-undef
  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestoran({ aProperty: 'property' });

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestoran())
      .toEqual([]);
  });

  // eslint-disable-next-line no-undef
  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestoran({ id: 1 });
    favoriteRestaurant.putRestoran({ id: 2 });

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestoran())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  // eslint-disable-next-line no-undef
  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestoran({ id: 1 });
    favoriteRestaurant.putRestoran({ id: 2 });
    favoriteRestaurant.putRestoran({ id: 3 });

    await favoriteRestaurant.deleteRestoran(1);

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestoran())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  // eslint-disable-next-line no-undef
  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestoran({ id: 1 });
    favoriteRestaurant.putRestoran({ id: 2 });
    favoriteRestaurant.putRestoran({ id: 3 });

    await favoriteRestaurant.deleteRestoran(4);

    // eslint-disable-next-line no-undef
    expect(await favoriteRestaurant.getAllRestoran())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestoranModel };
