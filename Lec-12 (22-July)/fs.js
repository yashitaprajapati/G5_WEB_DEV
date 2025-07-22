// const { unlink } = require('node:fs/promises');

// (async function(path) {
//   try {
//     await unlink(path);
//     console.log(`successfully deleted ${path}`);
//   } catch (error) {
//     console.error('there was an error:', error.message);
//   }
// });


const { unlink } = require('node:fs');

unlink('./something.txt', (err) => {
  if (err) throw err;
  console.log('successfully deleted /tmp/hello');
});

//READ FILE

import { readFile } from 'node:fs';

readFile('./abc.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


// FILE STREAM

import fs from 'fs';
import { pipeline } from 'node:stream/promises';
import path from 'path';

const fileUrl = 'https://www.gutenberg.org/files/2701/2701-0.txt';
const outputFilePath = path.join(process.cwd(), 'moby.md');

async function downloadFile(url, outputPath) {
  const response = await fetch(url);

  if (!response.ok || !response.body) {
    throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
  }

  const fileStream = fs.createWriteStream(outputPath);
  console.log(`Downloading from ${url} to ${outputPath}`);

  await pipeline(response.body, fileStream);
  console.log('File downloaded');
}

async function readFile(filePath) {
  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  try {
    for await (const chunk of readStream) {
      console.log('chunk start');
      console.log(chunk);
      console.log('chunk end');
    }
    console.log('Finished reading.');
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

try {
  await downloadFile(fileUrl, outputFilePath);
  await readFile(outputFilePath);
} catch (error) {
  console.error(`Error: ${error.message}`);
}