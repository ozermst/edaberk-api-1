module.exports = {
  apps: [
    {
      name: "edaberk-api-1",
      script: "yarn",
      args: "start",
      env_development: {
        NODE_ENV: "development",
        ENV_PATH: ".env.development",
      },
      env_test: {
        NODE_ENV: "test",
        ENV_PATH: ".env.test",
      },
      env_production: {
        NODE_ENV: "production",
        ENV_PATH: ".env.production",
      },
    },
  ],
};
