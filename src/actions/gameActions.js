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

export const healPlayer = (basePower) => {
	return {
		type: "HEALING",
		payload: basePower,
	}
}

export const removeSkillState = (mana) => {
	return {
		type: "REMOVE_SKILL_STATE",
		payload: mana,
	}
}

export const win = (xp) => {
	increaseXP(xp);
	return {
		type: "WIN",
		payload: xp
	}
}

export const lose = () => {
	return {
		type: "LOSE",
		payload: ""
	}
}