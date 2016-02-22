import build from '../commands/build';
import dev from '../commands/dev';

const rocPackageConfig = {
    settings: {
        build: {
            targets: ['es5', 'es6'],
            input: 'src',
            output: {
                es5: 'lib/es5',
                es6: 'lib/es6'
            }
        }
    },

    commands: {
        build,
        dev
    }
};

/**
 * Exports the default `roc.config.js`.
 *
 * @return {object} The default `roc.config.js`.
 */
export default rocPackageConfig;
