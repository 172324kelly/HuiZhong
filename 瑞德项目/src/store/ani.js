export default {
	state:{
		ani_A_leave:"animated fadeOut",
		ani_A_enter:"animated fadeIn",
		ani_B_leave:"animated leave",
		ani_B_enter:"animated enter",
		ani_leave:"animated fadeOut",
		ani_enter:"animated fadeIn"
	},
	getters:{

	},
	mutations:{
		ani_transition(state,payload){
			console.log(payload);
			if(payload.class==1){
				state.ani_leave=state.ani_A_leave;
				state.ani_enter=state.ani_A_enter;
			}else if(payload.class==2){
				state.ani_leave=state.ani_B_leave;
				state.ani_enter=state.ani_B_enter;
			}
		}
	},
	actions:{

	}
};