// Script to replace white background in profile photo with black
const sharp = require('sharp');

async function processImage() {
  const inputPath = './public/images/profile/jungudo-profile.jpg';
  const outputPath = './public/images/profile/jungudo-profile.png';

  console.log('Loading image...');
  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  console.log(`Image: ${info.width}x${info.height}, channels: ${info.channels}`);

  // Create RGBA output
  const outPixels = Buffer.alloc(info.width * info.height * 4);

  for (let i = 0; i < info.width * info.height; i++) {
    const srcIdx = i * info.channels;
    const dstIdx = i * 4;

    const r = data[srcIdx];
    const g = data[srcIdx + 1];
    const b = data[srcIdx + 2];

    // Detect near-white/light-gray background pixels
    const isBackground = r > 210 && g > 210 && b > 210;

    if (isBackground) {
      // Make transparent (will show black CSS background through)
      outPixels[dstIdx] = 0;
      outPixels[dstIdx + 1] = 0;
      outPixels[dstIdx + 2] = 0;
      outPixels[dstIdx + 3] = 0; // fully transparent
    } else {
      outPixels[dstIdx] = r;
      outPixels[dstIdx + 1] = g;
      outPixels[dstIdx + 2] = b;
      outPixels[dstIdx + 3] = 255; // fully opaque
    }
  }

  await sharp(outPixels, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png({ quality: 95 })
    .toFile(outputPath);

  console.log('✅ Done! Saved to', outputPath);
}

processImage().catch(console.error);
