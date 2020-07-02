// Use this for game related functions -- keeping track of health, attack power, ect.

const initialState = {
	level: 1,
	current_xp: 0,
	stageNumber: "One",
	health: 100,
	mana: 250,

	enemy: {
		health: 100,
	},
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case "LEVEL_UP":
			return {
				...state,
				level: state.level + 1,
			};
		case "INCREASE_XP":
			return {
				...state,
				current_xp: state.current_xp + action.payload,
			};
		case "ENEMY_HIT":
			return {
				...state,
				enemy: {
					...state.enemy,
					health: state.health - action.payload,
				},
			};
	}
};
