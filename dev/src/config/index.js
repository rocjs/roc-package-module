import { merge } from 'roc';
import { rocPackageConfig as configModule, rocPackageMetaConfig as metaModule } from 'roc-package-module';
import { rocPackageConfig as configCore, rocPackageMetaConfig as metaCore } from 'roc-package-core-dev';

/**
 * Gives the base configuration.
 *
 * @returns {object} Returns the base configuration
 */
export const rocPackageConfig = merge(configModule, merge(configCore, require('./roc.config.js').default));

/**
 * Gives the meta configuration.
 *
 * @returns {object} Returns the meta configuration
 */
export const rocPackageMetaConfig = merge(metaModule, merge(metaCore, require('./roc.config.meta.js').default));
