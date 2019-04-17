const glob = require('glob');
const path = require('path');

/**
 * Find an android application path in the folder
 *
 * @param {String} folder Name of the folder where to seek
 * @return {String}
 */
module.exports = function findManifest(folder) {
  console.log('findManifest', folder);
  const manifestPath = glob.sync(path.join('**', 'AndroidManifest.xml'), {
    cwd: folder,
    ignore: ['node_modules/**', '**/build/**', 'Examples/**', 'examples/**'],
  })[0];
  console.log('manifestPath', manifestPath);
  return manifestPath ? path.join(folder, manifestPath) : null;
};
