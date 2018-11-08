import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '../vuex/index.js'
import indexView from '../view/indexView.vue';

Vue.use(VueRouter);
const baseTitle = "heatmap";

const Router = new VueRouter({
	mode: 'history',
	base: GLOBALPATH,
	routes:[
	  { path: '/', component: indexView }
	]
});

Router.beforeEach((to, from, next) => {
	let source = to.params.source;

	let metaDesc = document.head.children;
	let metaLength = metaDesc.length;
	let desc = '';
	let twdesc = '';
	let ogdesc = '';
	let fDesc = '';
	for(let i = 0;i < metaLength;i++){
		let name = metaDesc[i].getAttribute('name');
		let prop = metaDesc[i].getAttribute('property');
		if(name === 'description'){
			desc = metaDesc[i];
		}

		if(name === 'twitter:description'){
			twdesc = metaDesc[i];
		}

		if(prop === 'og:description'){
			ogdesc = metaDesc[i];
		}
	}

	Store.commit('setOverlay', true);

	next();
});
export default Router;
