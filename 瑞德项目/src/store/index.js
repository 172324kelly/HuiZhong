import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);//使用插件vuex

import ani from "./ani"
import refreshMore from "./modules/refreshMore"

export default new Vuex.Store({
	state:{

	},
	getters:{

	},
	mutations:{
		
	},
	actions:{
		
	},
	modules:{
		ani,
		refreshMore,
		app:{
			state:{
				count:0
			},
			getters:{

			},
			mutations:{
				add(state,payload){
					state.count++;
					console.log(payload);
				},
				reduce(state,payload){
					state.count--;
					console.log(payload);
				}
			},
			actions:{
				add(context,payload){
					console.log(context);
					context.commit("add",payload);
				},
				reduce(context,payload){
					console.log(context);
					context.commit("reduce",payload);
				}
			},
			modules:{

			}
		},
		list:{
			state:{
				count:10
			},
			getters:{

			},
			mutations:{
				add(state,payload){
					state.count++;
					console.log(payload);
				},
				reduce(state,payload){
					state.count--;
					console.log(payload);
				}
			},
			actions:{
				add(context,payload){
					console.log(context);
					context.commit("add",payload);
				},
				reduce(context,payload){
					console.log(context);
					context.commit("reduce",payload);
				}
			},
			modules:{

			}
		}
	}
});
