/* eslint-disable no-param-reassign */

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  distDir: "../../dist/functions/next",
  webpack: config => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp|svg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            outputPath: 'images/',
            publicPath: '/_next/',
            name: dev ? '[name]-[hash].[ext]' : '[hash].[ext]',
            limit: 4000
          }
        }
      ]
    });

    if (process.env.ANALYZE) {
      // eslint-d isable-next-line
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
          analyzerMode: 'disabled',
          generateStatsFile: true,
          // then view stats with webpack-bundle-analyzer .next/stats.json
          statsFilename: 'stats.json'
        })
      );
    }

    return config;
  }
};
