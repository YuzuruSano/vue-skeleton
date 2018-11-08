import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

/**
 * App共通で利用する状態データの集約
 */
const Store = new Vuex.Store({
	/**
	 * Storeで扱うデータの初期値を定義
	 * @type {Object}
	 */
	state: {
		ref:location.href,
		overlay: true,
		hasData:false,
		datachache:{},
		hasTagData:false,
		tagdatachache:{},
		wrapperClass:false,
		erro:null
	},
	/**
	 * getterメソッド
	 * @type {Object}
	 */
	getters: {
		getRef: (state) => state.ref,
		getGlobalPath: (state) => state.global_path,
		error: (state) => state.error,
		getOverlay:(state) => state.overlay,
		getData:(state) => state.datachache,
		getDataStatus:(state) => state.hasData,
		getWrapperClass:(state) => state.wrapperClass
	},
	/**
	 * データの変更時に呼ばれるsetterメソッド
	 * @type {Object}
	 */
	mutations: {
		setOverlay(state, mode) {
			state.overlay = mode;
		},
		setData(state, data) {
			state.datachache = data;
		},
		setDataStatus(state, boolean) {
			state.hasData = boolean;
		},
		setWrapperClass(state, boolean) {
			state.wrapperClass = boolean;
		},
		// エラーメッセージをセット
		setError(state, msg) {
			state.error = msg;
		},
		// エラーメッセージをリセット
		resetError(state) {
			state.error = null
		}
	},
	/**
	 * 各コンポーネントでthis.$store.dispatch('xx')で呼び出すメソッド
	 * 第一引数にこのStore自身のオブジェクトを取る
	 * @type {Object}
	 */
	actions: {
		// load(context) {
		// 	return axios.get('').then(response => {
		// 		// context.commit('setData', response.data.items);
		// 		// context.commit('setDataStatus', true);
		// 	}).catch(error => {
		// 		console.log('Error! Check API Init.');
		// 	});
		// }
	},
	strict: process.env.NODE_ENV !== 'production'
})

export default Store
