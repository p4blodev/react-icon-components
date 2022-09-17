const path = require("path");

const ICON_SUFFIX = {
  Line: "Icon",
  Solid: "FilledIcon",
};

function template(filePaths) {
  const exportEntries = filePaths.map((filePath) => {
    const filePathSplited = filePath.split("/");
    const foldersName = filePathSplited[filePathSplited.length - 2];
    const suffix = ICON_SUFFIX[foldersName];
    const basename = path.basename(filePath, path.extname(filePath));

    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;

    return `export { default as ${
      exportName + suffix
    } } from './${basename}'`;
  });
  return exportEntries.join("\n");
}

module.exports = template;
