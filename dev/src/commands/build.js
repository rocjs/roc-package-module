import path from 'path';
import chalk from 'chalk';
import prettyMs from 'pretty-ms';

import { execute, getAbsolutePath } from 'roc';
import { getValueFromPotentialObject } from 'roc-package-core-dev';

export default function build({
    configObject,
    parsedArguments
}) {
    let { targets } = parsedArguments.arguments;

    if (!targets) {
        targets = configObject.settings.build.targets;
    }

    targets.forEach(async function(target) {
        const preset = target === 'es5' ?
            require.resolve('babel-preset-es2015') :
            require.resolve('babel-preset-es2015-webpack');

        const babel = path.join(__dirname, '..', '..', 'node_modules', '.bin', 'babel');
        const src = getAbsolutePath(getValueFromPotentialObject(configObject.settings.build.input, target));
        const out = getAbsolutePath(getValueFromPotentialObject(configObject.settings.build.output, target));

        /* eslint-disable no-console */
        console.log(`Building for ${target.toUpperCase()}`);
        /* eslint-enable */
        const startTime = process.hrtime();

        await execute(`${babel} ${src} --out-dir ${out} --presets=${preset} --source-maps --copy-files`);

        const totalTime = process.hrtime(startTime);

        /* eslint-disable no-console */
        console.log(chalk.green(`Completed ${target.toUpperCase()} in ` +
            `${prettyMs(totalTime[0] * 1000 + totalTime[1] / 1000000)}`));
        /* eslint-enable */
    });
}
