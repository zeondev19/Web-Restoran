import CONFIG from '../../globals/config';

const createListRestoranTemplate = (restoran) => `
        <div class="judulResto" >
        <div class="gambarResto">
            <p><i>${restoran.city}</i></p>
            <img src="${restoran.pictureId ? CONFIG.BASE_IMAGE_URL + restoran.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restoran.name}">
        </div>
        <div class="deskripsiResto">
        <p class="juduldesc">${restoran.name}</p>
        <p class="ratedesc">Rating ${restoran.rating}</p>
        <p class="deskripsi">${restoran.description.slice(0, 200)}...</p>
        <a href="/#/detail/${restoran.id}">
        Detail
        </a>
        </div>
        </div>
`;

const createRestoranDetailTemplate = (restoran) => `
    <div class="detail-header" >
        <h2 class="restoran-name">${restoran.name}</h2>
        <img class="restoran-image" src="${CONFIG.BASE_IMAGE_URL + restoran.pictureId}" alt="${restoran.name}" />
    </div>
    <div class="detail-info" >
        <h3>Information</h3>
        <div class ="alamat">
            <h4>Alamat</h4>
            <p>${restoran.address}</p>
            <h4>Kota</h4>
            <p>${restoran.city}</p>
        </div>
    </div>
    <br/>
    <h3>Menu</h3>
    <div class="menu" >
        <div class="makanan">
            <h4>Menu Makanan</h4>
            <p>${restoran.menus.foods.map((food) => `- ${food.name}`).join('<br>')}</p>
        </div>
        <div class="minuman">
            <h4>Menu Minuman</h4>
            <p>${restoran.menus.drinks.map((drink) => `- ${drink.name}`).join('<br>')}</p>
        </div>
    </div>
    <h3 class="detail-review-header">Costumer Reviews</h3>
    <div class="judul-review" >
            ${restoran.customerReviews
    .map(
      (review) => `
                <div class="ulasan-item">
                    <div class="review-item_bold">
                        <p class="review-item_date">${review.date}</p>
                        <p class="review-item_name">${review.name}</p>
                        <p class="review-item_review">${review.review}</p>
                    </div>
                    
                </div>
                `,
    )
    .join('')}
    </div>
    <div class="detail-description" >
        <h3>Description</h3>
        <p>${restoran.description.slice(0, 250)}</p>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  // eslint-disable-next-line max-len
  createListRestoranTemplate, createRestoranDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate,
};
