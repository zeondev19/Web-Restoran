import FavouriteRestoran from '../views/pages/favourite';
import Detail from '../views/pages/detail';
import ExploreRestoran from '../views/pages/explore';

const routes = {
  '/': ExploreRestoran, // default page
  '/explore': ExploreRestoran,
  '/favourite': FavouriteRestoran,
  '/detail/:id': Detail,
};

export default routes;
