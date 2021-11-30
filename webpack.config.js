module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
  ];

  return {
    ...options,
    externals: [
      '@apollo/gateway',
      'apollo-server-fastify',
      'class-transformer/storage',
      '@apollo/federation',
      '@apollo/subgraph',
      'ts-morph',
    ],
    module: [
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
  };
};