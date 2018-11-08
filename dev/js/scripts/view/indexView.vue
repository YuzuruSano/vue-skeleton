<script>
import bowser from 'bowser';
import Lodash from 'lodash'
import moment from 'moment';

export default {
	/**
	 * このテンプレートで使用する外部テンプレート
	 */
	components:{
	},
	/**
	 * 親コンポーネントから受け取る値があればこちらに定義することでthis.xで利用できる
	 */
	//props: [],
	/**
	 * コンポーネント起動時の処理
	 */
	created() {
		/**
		 * 記事データをセット
		 */
		this.$store.dispatch('load').then(() => {//storeのloadを起動
			this.loading = false;
		}).catch(e => {
			console.log(e)
		});
	},
	/**
	 * このコンポーネントで使用する変数定義
	 * @return {Object}
	 */
	data() {
		return {
			results:[],
		}
	},
	/**
	 * このコンポーネント
	 * で使用する処理群
	 * @type {Object}
	 */
	methods : {
	},
	/**
	 * 更新を検知して処理を加える
	 * キー名に監視する変数を指定する
	 * @type {Object}
	 */
	watch: {
	}
};
</script>

<template lang="pug">
	//- .grid.js-grid
	//- 	div(v-for='(result , index) in results',v-bind:class="classPriority(result.priority)").item.js-grid-item
</template>
