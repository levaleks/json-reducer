import type { JsonArray, JsonObject } from 'type-fest';

export const HANDLER_KEYWORD = 'function';
export const HANDLER_NAME = 'anonymous';
export const HANDLER_ARG_NAME = 'jsonValue';
export const HANDLER_BODY = `return ${HANDLER_ARG_NAME};`;

export type ValidJSONValue = JsonObject | JsonArray;

export type InputJsonHandler = (jsonValue: ValidJSONValue) => ValidJSONValue;

export const createHandlerFromBodyString = (body: string): InputJsonHandler => {
    // eslint-disable-next-line no-new-func
    return new Function(HANDLER_ARG_NAME, body) as InputJsonHandler;
};
