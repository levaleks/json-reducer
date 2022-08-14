import type { ValidJSONValue } from '../core/input-json-handler';

export interface File {
    content: ValidJSONValue;
    name: string;
}
