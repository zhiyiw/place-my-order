import AppMap from 'can-ssr/app-map';
import route from 'can/route/';
import 'can/route/pushstate/';
import 'can/map/define/';

const AppViewModel = AppMap.extend({
  define: {
    title: {
      serialize: false,
      value: 'place-my-order'
    }
  }
});

route(':page', { page: 'home' });
route(':page/:slug', { slug: null });
route(':page/:slug/:action', { slug: null, action: null });

export default AppViewModel;
