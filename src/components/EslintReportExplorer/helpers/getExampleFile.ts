import type { File } from '../abstracts/File';

export const getExampleFile = (): File => ({
    name: 'example.json',
    content: [
        {
            id: 1,
            name: 'Leanne Graham',
            email: 'Sincere@april.biz',
        },
        {
            id: 2,
            name: 'Ervin Howell',
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            email: 'Nathan@yesenia.net',
            phone: '1-463-123-4447',
        },
    ],
});
