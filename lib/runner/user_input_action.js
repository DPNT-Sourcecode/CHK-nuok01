'use strict';

import { createInterface } from 'node:readline';

const readFromConsole = () => {
    return new Promise((resolve) => {
        const consoleIn = createInterface({
            input: Deno.stdin
        });
        consoleIn.question('', (answer) => {
            resolve(answer);
            consoleIn.close();
            Deno.stdin.close();
        });
    });
};

class UserInputAction {
    constructor(args) {
        this._args = args;
    }

    get() {
        return this._args.length > 0
            ? Promise.resolve(this._args[0])
            : readFromConsole();
    }
}

export default UserInputAction;
