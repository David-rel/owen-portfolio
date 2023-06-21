import { config, v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "sports/",
      max_results: 500, // increase this number based on your need, but it can't be more than 500
    });

    const imagePublicIds = result.resources.map((image) => image.public_id);

    res.status(200).json({ publicIds: imagePublicIds });
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch images" });
  }
}
