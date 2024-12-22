const cloudinary = require("cloudinary").v2;
const e = require("express");
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SERCRET,
});

const uploadCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const result = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("file is upload on cloudinary", result.url);
    return result;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadCloudinary };
