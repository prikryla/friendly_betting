export const getRandomNumber = <T>(arr: T[]): number => {
    return Math.floor(Math.random() * arr.length);
};
