module.exports = function() {
    return {
      module: {
        rules: [
          {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            loader: 'file-loader',
            options: {
                name: 'fonts/[name].[ext]'
                     },
                  },
              ],
          },
      };
  };