export const useLevelUp = (level) => {
    return [300 * (Math.pow(level, 2)) - (300 * level)]
}