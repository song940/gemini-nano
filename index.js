import { ready, querySelector as $ } from 'https://lsong.org/scripts/dom.js';
import { parse } from 'https://lsong.org/scripts/marked.js';

ready(async () => {
  const available = await ai.canCreateTextSession();
  if (!available) {
    return;
  }
  const session = await ai.createTextSession();
  $('#form').addEventListener('submit', async e => {
    e.preventDefault();
    const input = $('textarea', e.target);
    const prompt = input.value;
    const stream = session.promptStreaming(prompt);
    for await (const chunk of stream) {
      output.innerHTML = parse(chunk);
    }
  });
});