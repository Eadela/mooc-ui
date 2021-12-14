import Vue from 'vue'
import App from './App.vue'

// import "../components/css/demo.scss";
// import "../components/css/card.scss";
// import Demo1 from "../components/lib/demo/src/main.vue"
// Vue.component(Demo1.name, Demo1)
// import Demo from "../components/lib/demo/index.js"
// Vue.use(Demo)
// import Card from "../components/lib/card/index.js"
// Vue.use(Card)
import 'mooc-ui-wzq/dist/css/index.css';
import MUI from 'mooc-ui-wzq';
Vue.use(MUI);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
