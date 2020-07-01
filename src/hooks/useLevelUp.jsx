export const useLevelUp = (level) => {
    return [500 * (Math.pow(level, 2)) - (500 * level)]
}