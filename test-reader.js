const { createReader } = require('@keystatic/core/reader');
const config = require('./keystatic.config.ts');
const fs = require('fs');

async function main() {
  const reader = createReader(process.cwd(), config.default);
  const entries = await reader.collections.news.list();
  if (entries.length > 0) {
    const entry = await reader.collections.news.read(entries[0]);
    const content = await entry.content();
    console.log("Type of content:", typeof content);
    console.log("Is string?", typeof content === 'string');
    if (typeof content === 'object') {
      console.log("Keys:", Object.keys(content));
      console.log("Constructor:", content.constructor.name);
      console.log("JSON:", JSON.stringify(content, null, 2));
    }
  } else {
    console.log("No entries found locally.");
  }
}
main();
