import { createContext } from 'react';
import { makeAutoObservable, observable } from 'mobx';
import type { File } from './abstracts/File';
import { getExampleFile } from './helpers/getExampleFile';
import { createHandlerFromBodyString, HANDLER_BODY, InputJsonHandler, ValidJSONValue } from './core/input-json-handler';

export interface Output {
    value: ValidJSONValue;
    error: Error | null;
}

export interface Handler {
    fn: InputJsonHandler;
    error: Error | null;
}

export class EslintReportExplorerStore {
    constructor() {
        makeAutoObservable(
            this,
            {
                inputFile: observable.ref,
                handler: observable.ref,
                output: observable.ref,
            },
            { autoBind: true },
        );
    }

    shouldShowOnBeforeUnloadPopup = false;

    inputFile = getExampleFile();

    setInputFile(file: File): void {
        this.inputFile = file;
        this.shouldShowOnBeforeUnloadPopup = true;
    }

    handler: Handler = {
        fn: createHandlerFromBodyString(HANDLER_BODY),
        error: null,
    };

    setHandler(handlerBody: string): void {
        try {
            this.handler = { fn: createHandlerFromBodyString(handlerBody), error: null };
            this.shouldShowOnBeforeUnloadPopup = true;
        } catch (e) {
            this.handler = {
                fn: this.handler.fn,
                error: e instanceof Error ? e : new Error(`Unknown: ${e}`),
            };
        }
    }

    output: Output = { value: {}, error: null };

    applyHandlerToInputFileContent(): void {
        try {
            this.output = { value: this.handler.fn(this.inputFile.content), error: null };
            this.shouldShowOnBeforeUnloadPopup = true;
        } catch (e) {
            this.output = {
                value: {},
                error: e instanceof Error ? e : new Error(`Unknown: ${e}`),
            };
        }
    }
}

export const EslintReportExplorerStoreContext = createContext<EslintReportExplorerStore | null>(null);
