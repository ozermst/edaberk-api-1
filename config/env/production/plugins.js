var slugify = require("slugify");

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: env("GCS_BUCKET_NAME"),
        publicFiles: env("GCS_PUBLIC_FILES"),
        uniform: env("GCS_UNIFORM"),
        serviceAccount: atob(env("GCS_SERVICE_ACCOUNT")),
        baseUrl: env("GCS_BASE_URL"),
        basePath: env("GCS_BASE_PATH"),
        generateUploadFileName: (file) => {
          const filename = slugify(file.hash); // Some hashing function, for example MD-5
          const path = file.path ? `${file.path}/` : "";
          // const extension = file.ext.toLowerCase().substring(1);
          const extension = file.ext;
          // return `${extension}/${slugify(path.parse(file.name).name)}-${file.hash}.${extension}`;
          return `${filename}${extension}`;
        },
      },
    },
  },
  //...
});
