module.exports = {
    testMatch: [
      '**/*.spec.js',
    ],
    reporters: [
      'default',
      [ "jest-junit", {
        outputDirectory: 'reports',
        outputName: 'jest-junit.xml',
        ancestorSeparator: " › ",
        uniqueOutputName: "false",
        suiteNameTemplate: "{filepath}",
        classNameTemplate: "{classname}",
        titleTemplate: "{title}"
      } ]
    ]
  };
