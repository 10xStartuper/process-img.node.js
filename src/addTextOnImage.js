const sharp = require("sharp");
const fs = require("fs");
const generateBarCode = require("./generateBarCode");

async function addTextOnImage(user) {
  try {
    const width = 1241;
    const height = 1754;
    const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
      .title { fill: #001; font-size: 18px; font-weight: 600;}
      </style>
      <text x="267" y="378" text-anchor="start" class="title">${
        user.first_name
      }</text>
      <text x="267" y="404" text-anchor="start" class="title">${
        user.last_name
      }</text>
      <text x="267" y="430" text-anchor="start" class="title">${"11/01/2022"}</text>
    </svg>
    `;
    const svgBuffer = Buffer.from(svgImage);
    const barCodeBuffer = await generateBarCode(user.id);
    const image = await sharp("./images/page.jpg").composite([
      {
        input: svgBuffer,
        top: 0,
        left: 0,
      },
      {
        input: barCodeBuffer,
        top: 18,
        left: 32,
      },
    ]);

    const dir = "./results";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    await image.toFile("./results/" + user.id + ".png");
  } catch (error) {
    console.log(error);
  }
}

module.exports = addTextOnImage;
