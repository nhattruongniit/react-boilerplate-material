import fs from 'fs';
import path from 'path';
import { proxyConfiguration } from './setupProxy';

const vendorJsonPath = path.resolve(__dirname, './tools/getVendor/vendor.json');
let vendorJson = {};

if (fs.existsSync(vendorJsonPath)) {
    vendorJson = JSON.parse(fs.readFileSync(vendorJsonPath, 'utf-8'));
}

export default defineConfig({
   plugins: [
      injectHtml({
          data: {
              injectMerchantTemplate: (vendorJson && vendorJson.script) || '',
          },
      }),
   ],
    server: {
        proxy: proxyConfiguration,
    },
});
