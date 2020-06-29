export const UseRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
        return Math.round(Math.random() * (max - min + 1) + min);
}