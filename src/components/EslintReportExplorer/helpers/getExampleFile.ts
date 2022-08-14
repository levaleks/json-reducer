import type { File } from '../abstracts/File';

export const getExampleFile = (): File => ({
    name: 'example.json',
    content: [
        {
            name: 'blueberry',
            calories: 57,
            fat: 0.33,
            carbs: 14.49,
            protein: 0.74,
        },
        {
            name: 'strawberry',
            calories: 32,
            fat: 0.3,
            carbs: 7.68,
            protein: 0.67,
        },
        {
            name: 'blackberry',
            calories: 43,
            fat: 0.49,
            carbs: 9.61,
            protein: 1.39,
        },
    ],
});
