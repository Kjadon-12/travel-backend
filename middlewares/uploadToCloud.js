import { v2 as cloudinary } from "cloudinary";

export const uploadToCloud =  () => {
  return async (req, res, next) => {
    // Example: Log the uploaded file
    console.log("File uploaded:", req.file);

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dqoep0oe8', 
        api_key: '668519543125245', 
        api_secret: process.env.CLOUDINARY_SECRET // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           req.file.path, {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    
    

    next();
  };
};
