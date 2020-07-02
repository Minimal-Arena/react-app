export const increaseXP = amount => {
	return {
		type: "INCREASE_XP",
		payload: amount,
	};
};

export const levelUp = () => {
	return {
		type: "LEVEL_UP",
		payload: "",
	};
};

export const hitEnemy = amount => {
	return {
		type: "ENEMY_HIT",
		payload: amount,
	};
};

export const attackSelected = (mana) => {
	return {
		type: "IS_ATTACKING",
		payload: mana,
	};
};

export const removeDamageClass = () => {
	return {
		type: "REMOVE_DAMAGE_ENEMY",
		payload: "",
	};
};

export const removeDamagePlayer = () => {
	return {
		type: "REMOVE_DAMAGE_PLAYER",
		payload: "",
	}
}

export const setEnemyTurn = (amount) => {
	return {
		type: "CPU_ATTACK",
		payload: amount,
	};
};

export const switchTurn = (turn) => {
	return {
		type: "SWITCH_TURN",
		payload: turn,
	}
}