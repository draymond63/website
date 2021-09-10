import Vue from 'vue';
import VueGtag from 'vue-gtag';

export default ({ app }) => {
	Vue.use(VueGtag, {
		config: {id: 'UA-148416481-2'}
	});
}