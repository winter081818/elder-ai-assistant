import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const files=['index.html','app.js','styles.css','Dockerfile','docker-compose.yml','README.md','PRODUCT.md'];
test('all required deliverable files exist',()=>files.forEach(f=>assert.ok(fs.existsSync(f),f)));
test('prototype covers required interaction states',()=>{const js=fs.readFileSync('app.js','utf8');for(const key of ['voice-error','cancel-request','accept','decline','authorize','privacy'])assert.match(js,new RegExp(key));});
test('docker compose exposes the prototype',()=>assert.match(fs.readFileSync('docker-compose.yml','utf8'),/8080:80/));
