function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers'),
  }
    },
  ];
}

module.exports = [
  {
    entry: './form.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-login.js',
    },
    module: {
      rules: [{
        test: /form.scss$/,
        use: getStyleUse('bundle-login.css')
      }]
    },
  },
  {
    entry: "./form.js",
    output: {
      filename: "bundle-login.js"
    },
    module: {
      loaders: [{
        test: /form.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  },
];
