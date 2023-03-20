import MapView from "./components/MapView.vue";

const MapViewSimple = {
 install(Vue) {
  Vue.component("map-view", MapView);
 }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(MapViewSimple);
}

export default MapViewSimple;