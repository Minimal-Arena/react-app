export const increaseXP = (amount) => {
    return {
        type: "INCREASE_XP",
        payload: amount
    }
}

export const levelUp = () => {
    return {
        type: "LEVEL_UP",
        payload: ""
    }
}