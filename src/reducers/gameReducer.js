// Use this for game related functions -- keeping track of health, attack power, ect.

const initialState = {
	level: 1,
	current_xp: 0,
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
	}
};
