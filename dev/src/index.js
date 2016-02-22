/**
* Configuration
*
* All packages must export this for them to be considered valid packages.
*/
export { rocPackageConfig } from './config';
export { rocPackageMetaConfig } from './config';

/**
* Commands
*
* This is exported for convenance so other packages can access it.
*/
export build from './commands/build';
export dev from './commands/dev';
