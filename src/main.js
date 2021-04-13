import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
<<<<<<< HEAD
import axios from "axios";
import VueAxios from "vue-axios";

=======
import axios from 'axios'
import VueAxios from 'vue-axios'
<<<<<<< HEAD
=======

>>>>>>> 2c328c1dcfd3fb7ea93d123b34227fd3d0465c0c
Vue.use(VueAxios,axios)
>>>>>>> 1d4e3da6b6002bd21a05d80a12d1614be0e72476

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios,axios);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
