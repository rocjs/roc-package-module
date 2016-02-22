import path from 'path';

import { execute, getAbsolutePath } from 'roc';
import { getValueFromPotentialObject } from 'roc-package-core-dev';

export default function dev({
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
        console.log(`Starting in watch mode for ${target.toUpperCase()}`);
        /* eslint-enable */

        await execute(`${babel} ${src} --out-dir ${out} --presets=${preset} --source-maps --copy-files --watch`);
    });
}
