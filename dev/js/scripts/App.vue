<script>
import Lodash from 'lodash';
import ViewLoading from './view/loading.vue'
import SpNavi from './utils/SpNavi';

export default {
	name: 'app',
	components: {
	 'view-loading':ViewLoading
	},
	data() {
		return {

		}
	},
	created() {

	},
	watch: {
	},
	methods: {
	},
	mounted:function () {
		this.$nextTick(function () {

		});
	}
}
</script>

<template lang="pug">
#app
	view-loading
</template>

<style>
	.fade-enter-active,
	.fade-leave-active {
	  transition: opacity .2s;
	}
	.fade-enter,
	.fade-leave-to {
	  opacity: 0;
	}
	.fade-enter {
	  position: absolute;
	}
</style>
