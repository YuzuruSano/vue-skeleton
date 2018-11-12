import bowser from 'bowser';
import matchheight from 'jquery-match-height';
import Vue from 'vue';
import Store from './vuex/index'
import Router from './routes/routes';
import axios from 'axios';
import App from './App'
import moment from 'moment';
import Responsive from './utils/Responsive';
import SmoothScroll from './utils/SmoothScroll';
import SpNavi from './utils/SpNavi';

if(bowser.msie === true) {
	let version = 'ie_'+Math.floor(bowser.version);
	$('body').addClass('ie '+version);
}else if(bowser.msedge === true){
	$('body').addClass('edge');
}else if(bowser.firefox === true){
	$('body').addClass('ff');
}else if(bowser.tablet === true){
	$('body').addClass('tablet');
}
if(bowser.mobile === true){
	$('body').addClass('device--mobile');
	if(bowser.android === true) {
		$('body').addClass('device--mobile--android');
	}
}

let os, ua = navigator.userAgent;
if (ua.match(/Win(dows )?NT 10\.0/)) {
	os = "win10";
}
else if (ua.match(/Win(dows )?NT 6\.3/)) {
	os = "win8_1";
}
else if (ua.match(/Win(dows )?NT 6\.2/)) {
	os = "win8";
}
else if (ua.match(/Win(dows )?NT 6\.1/)) {
	os = "win7";
}else{
	os = '';
}

$('body').addClass(os);
/**
 * setup Vue
 */
Vue.config.productionTip = false
new Vue({
	store:Store,
	router:Router,
	el: '#app',
	render: h => h(App)
});

const sms = new SmoothScroll();
sms.exec();

