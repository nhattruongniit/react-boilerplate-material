import fs from 'fs';
import path from 'path';
const vendorJsonPath = path.resolve(__dirname, './vendor.json');
let proxy = {};

if (fs.existsSync(vendorJsonPath)) {
    proxy = JSON.parse(fs.readFileSync(vendorJsonPath, 'utf-8'));
}

const enableLiveEnviroment = {
    css: false,
    images: false,
    locales: false
};

const domain = (proxy && proxy.url) || '';
const vendorCode = (proxy && proxy.code) || '';

export const proxyConfiguration = {
    '/vendor-css': {
        target: enableLiveEnviroment.css ? domain : 'http://localhost:5001',
        changeOrigin: true,
        rewrite: (path) => (enableLiveEnviroment.css ? path : path.replace(/^\/vendor-css\/css/, `/css/${vendorCode}`)),
    },
    '/public/html/games': {
        target: domain,
        changeOrigin: true,
        rewrite: (path) => path,
        headers: { 'Vendor-Code': vendorCode },
    },
    '/public/html/images': {
        target: enableLiveEnviroment.images ? domain : 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => (enableLiveEnviroment.images ? path : path.replace(/^\/public\/html\/images/, `/public/html/${vendorCode}/vendor-images/images`)),
    },
    '/json': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
    },
    '/locales': {
        target: enableLiveEnviroment.locales ? domain : 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => (enableLiveEnviroment.locales ? path : path.replace(/^\/locales/, `/vendor-translation/processed/locales/${vendorCode}`)),
    }
};
