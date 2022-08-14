import React, { useState } from 'react';

export type ErrorMessage = {
    title: React.ReactNode;
    body: React.ReactNode;
} | null;

export const useErrorMessage = (
    initialErrorMessage: ErrorMessage,
): {
    errorMessage: ErrorMessage;
    setErrorMessage(errorMessage: ErrorMessage): void;
    clearErrorMessage(): void;
} => {
    const [errorMessage, setErrorMessage] = useState<ErrorMessage>(initialErrorMessage);

    const clearErrorMessage = (): void => setErrorMessage(null);

    return { errorMessage, setErrorMessage, clearErrorMessage };
};
