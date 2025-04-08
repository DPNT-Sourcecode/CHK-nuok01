'use strict';

import TDL from 'tdl-client-nodejs';
import * as ConfigFile from './credentials_config_file.js';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export function getConfig() {
    return TDL.ChallengeSessionConfig
        .forJourneyId(ConfigFile.readFromConfigFile('tdl_journey_id'))
        .withServerHostname(ConfigFile.readFromConfigFile('tdl_hostname'))
        .withColours(ConfigFile.isTrue(ConfigFile.readFromConfigFileWithDefault('tdl_use_coloured_output', 'true')))
        .withRecordingSystemShouldBeOn(ConfigFile.isTrue(ConfigFile.readFromConfigFileWithDefault('tdl_require_rec', 'true')))
        .withWorkingDirectory(resolve(__dirname, '..', '..'));
}

export function getRunnerConfig() {
    return new TDL.ImplementationRunnerConfig()
        .setRequestQueueName(ConfigFile.readFromConfigFile('tdl_request_queue_name'))
        .setResponseQueueName(ConfigFile.readFromConfigFile('tdl_response_queue_name'))
        .setHostname(ConfigFile.readFromConfigFile('tdl_hostname'));
}
