import dotenv from 'dotenv';
dotenv.config();
export const {
    PORT, LOCAL_DB_URL, SECRET_KEY, SITE_URL, TEST_DB_URL,
    CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,
    SECRET_KEY,GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,
    FACEBOOK_APP_ID,FACEBOOK_APP_SECRET,TWITTER_CONSUMER_KEY,
    TWITTER_CONSUMER_SECRET} = process.env;