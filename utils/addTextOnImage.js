const sharp = require("sharp");
const bwipjs = require('bwip-js');

async function generateBarCode(data){
    try{
        const result = await bwipjs.toBuffer({
            bcid:        'code128',       // Barcode type
            text:        data,    // Text to encode
            scale:       1,               // 3x scaling factor
            height:      5,              // Bar height, in millimeters
            includetext: true,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
        });
        return result;
    }catch(error){
        console.log(error);
    }
}



async function addTextOnImage() {
  try {
    const width = 1241;
    const height = 1754;
    const user = {
        first_name: "Mukhammadyusuf",
        second_name: "Abdurakhimov"
    };

    const svgImage = `
    <svg width="${width}" height="${height}">
      <style>
      .title { fill: #001; font-size: 18px; font-weight: 600;}
      </style>
      <text x="267" y="378" text-anchor="start" class="title">${user.first_name}</text>
      <text x="267" y="404" text-anchor="start" class="title">${user.second_name}</text>
      <text x="267" y="430" text-anchor="start" class="title">${'11/01/2022'}</text>
    </svg>
    `;
    const svgBuffer = Buffer.from(svgImage);
    const barCodeBuffer = await generateBarCode('data represantation');
    const image = await sharp("./images/page.jpg")
      .composite([
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
      ])
      .toFile("./output/sammy-text-overlay.png");
  } catch (error) {
    console.log(error);
  }
}

addTextOnImage();