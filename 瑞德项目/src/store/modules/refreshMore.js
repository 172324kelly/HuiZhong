export default {
	state:{
		dataJson:[]
	},
	getters:{

	},
	mutations:{
		refreshMore_updateData(state,payload){
			state.dataJson=payload.data;
		},
		refreshMore_moreData(state,payload){
			state.dataJson=state.dataJson.concat(payload.data);
		}
	},
	actions:{

	}
};