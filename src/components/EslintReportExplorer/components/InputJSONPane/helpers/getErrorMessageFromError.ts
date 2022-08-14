import type { FileError } from 'use-file-picker/src/interfaces';

export const getErrorMessageFromError = (e: FileError): string => {
    if (e.fileSizeTooSmall) return 'File size is too small!';
    if (e.fileSizeToolarge) return 'File size is too large!';
    if (e.readerError) return 'Problem occured while reading file!';
    if (e.maxLimitExceeded) return 'Too many files';
    if (e.minLimitNotReached) return 'Not enought files';

    return 'Unknown error';
};
