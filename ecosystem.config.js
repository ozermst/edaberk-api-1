module.exports = {
  apps: [
    {
      name: "edaberk-api-1",
      script: "yarn",
      args: "start",
      watch: ".",
      env_development: {
        NODE_ENV: "development",
        ENV_PATH: ".env.development",
      },
      env_test: {
        NODE_ENV: "test",
        ENV_PATH: ".env.test",
      },
    },
  ],
};
