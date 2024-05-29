// eslint-disable-next-line import/extensions
import API_ENDPOINT from '../globals/api-endpoint.js';

class RestorantSource {
  static async exploreRestoran() {
    const response = await fetch(API_ENDPOINT.EXPLORE_RESTO);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestoran(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseData = await response.json();
    return responseData.restaurant;
  }
}

export default RestorantSource;
