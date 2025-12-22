module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Modify source-map-loader to ignore missing source maps in node_modules
      // This fixes React 19 compatibility issues with react-scripts 5.0.1
      webpackConfig.module.rules = webpackConfig.module.rules.map((rule) => {
        // Handle rule.loader format
        if (rule.enforce === 'pre' && rule.loader && rule.loader.includes('source-map-loader')) {
          return {
            ...rule,
            exclude: /node_modules/,
          };
        }
        
        // Handle rule.use array format
        if (rule.enforce === 'pre' && Array.isArray(rule.use)) {
          const hasSourceMapLoader = rule.use.some(
            (use) => use.loader && use.loader.includes('source-map-loader')
          );
          if (hasSourceMapLoader) {
            return {
              ...rule,
              exclude: /node_modules/,
            };
          }
        }
        
        return rule;
      });

      return webpackConfig;
    },
  },
};

