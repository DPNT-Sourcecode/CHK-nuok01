'use strict';

import PropertiesReader from 'properties-reader';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

function readRawValue(key) {
    const properties = readPropertiesFile();
    let value = properties.getRaw(key);
    if(value) {
        value = value.replace(/\\=/g, "=");
    }
    return value;
}

export function readFromConfigFile(key) {
    const value = readRawValue(key);
    if (value === null) {
        throw new Error(`The "credentials.config" file does not contain key ${key}`);
    }
    return value;
}

export function readFromConfigFileWithDefault(key, defaultValue) {
    const value = readRawValue(key);
    return value !== null ? value : defaultValue;
}

export function isTrue(value) {
    return value.toString() === 'true';
}

//~~~~
function readPropertiesFile() {
    const pathToPropertiesFile = resolve(__dirname, '..', '..', 'config', 'credentials.config');
    try {
        return PropertiesReader(pathToPropertiesFile);
    }
    catch(e) {
        throw new Error(`The "credentials.config" has not been found. Please download from challenge page. (Reason: "${e.message}")`);
    }
}
