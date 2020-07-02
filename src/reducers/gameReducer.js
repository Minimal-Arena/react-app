// Use this for game related functions -- keeping track of health, attack power, ect.

const initialState = {
	current_turn: 1,
	isAttacking: false,
	isDamaged: false,
	isUsingSkill: false,
	level: 1,
	current_xp: 0,
	stageNumber: "One",
	health: 100,
	mana: 250,
	power: 50,

	enemy: {
		hp: 100,
		isAttacking: false,
		isDamaged: false,
		isDead: false,
	},

	game: {
		win: false,
		lose: false,
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
		case "SWITCH_TURN":
			return {
				...state,
				current_turn: action.payload,
			};
		case "IS_ATTACKING":
			return {
				...state,
				isAttacking: true,
				mana: state.mana - action.payload,
			};
		case "CPU_ATTACK":
			return {
				...state,
				health: state.health - action.payload,
				isDamaged: true,
				enemy: {
					...state.enemy,
					isAttacking: true,
				},
			};
		case "REMOVE_DAMAGE_PLAYER":
			return {
				...state,
				isDamaged: false,
				enemy: {
					...state.enemy,
					isAttacking: false,
				},
			};
		case "REMOVE_DAMAGE_ENEMY":
			return {
				...state,
				enemy: {
					...state.enemy,
					isDamaged: false,
				},
			};
		case "REMOVE_SKILL_STATE":
			return {
				...state,
				mana: state.mana - action.payload,
				isUsingSkill: false,
			};
		case "HEALING":
			return {
				...state,
				isUsingSkill: true,
				health: state.health + action.payload * Math.round(state.level * 2),
			};
		case "ENEMY_HIT":
			return {
				...state,
				isAttacking: false,
				enemy: {
					...state.enemy,
					isDamaged: true,
					hp: state.enemy.hp - action.payload,
				},
			};
		case "ENEMY_DEFEATED" : 
		return {
			...state,
			enemy: {
				...state.enemy,
				isDead: true,
			}
		}
		case "WIN":
			return {
				...state,
				game: {
					...state.game,
					win: true,
				},
			};
		case "LOSE":
			return {
				...state,
				game: {
					...state.game,
					lose: true,
				},
			};
	}
};
