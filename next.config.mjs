/** @type {import('next').NextConfig} */

const config =require('./config')
const nextConfig = {
    env:{
        //
        DB_URL : config.DB_URL,
    }
};

export default nextConfig;
