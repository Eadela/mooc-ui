// import Vue from "vue";

import Card from "./src/main.vue"

Card.install = function(Vue) {
    Vue.component('m-'+ Card.name, Card)
}

export default Card