module.exports = {
  './**/*.{cjs,css,htm,html,js,json,json5,jsx,md,mjs,scss,ts,tsx,vue,yaml,yml}': (files) => {
    const filteredFiles = files.filter((file) => !file.includes('/test-fixtures/') && !file.includes('/packages/'));
    if (filteredFiles.length === 0) return [];
    const commands = [`prettier --write ${filteredFiles.join(' ')}`];
    if (filteredFiles.some((file) => file.endsWith('package.json'))) {
      commands.push('yarn sort-package-json');
    }
    return commands;
  },
};
