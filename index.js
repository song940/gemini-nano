import { ready } from 'https://lsong.org/scripts/dom.js';
import { query } from 'https://lsong.org/scripts/query.js';
import { parse } from 'https://lsong.org/scripts/marked.js';
import { notify } from 'https://lsong.org/scripts/notification.js';
import { registerServiceWorker } from 'https://lsong.org/scripts/sw.js';

await ai.canCreateTextSession();
const session = await ai.createTextSession();
const prompt = "hi";
const stream = session.promptStreaming(prompt);
for await (const chunk of stream) {
  responseElement.textContent = chunk;
}
