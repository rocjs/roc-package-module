import {
    isArray,
    isPath
} from 'roc/validators';

import {
    toArray
} from 'roc/convertors';

const defaultSettings = {
    settings: ['build'],
    arguments: [{
        name: 'targets',
        validation: isArray(/^es5|es6$/),
        description: 'For what targets the project should be built for, overrides the settings if provided.',
        convertor: toArray
    }]
};

const rocPackageMetaConfig = {
    settings: {
        descriptions: {
            build: {
                output: {
                    es5: 'The output directory for the ES5 build.',
                    es6: 'The output directory for the ES6 build.'
                }
            }
        },
        validations: {
            build: {
                output: {
                    es5: isPath,
                    es6: isPath
                }
            }
        }
    },
    commands: {
        build: {
            ...defaultSettings,
            description: 'Build the current project.'
        },
        dev: {
            ...defaultSettings,
            description: 'Start the current project in watch mode.'
        }
    }
};

/**
 * Exports the `roc.config.meta.js`.
 *
 * @return {object} The `roc.config.meta.js`.
 */
export default rocPackageMetaConfig;
