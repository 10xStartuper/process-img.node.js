const sharp = require("sharp");

async function compositeImages() {
  try {
    await sharp("./images/underwater.png")
      .composite([
        {
          input: "./images/sammy-transparent.png",
          top: 50,
          left: 50,
        },
      ])
      .toFile("./output/sammy-underwater.png");
  } catch (error) {
    console.log(error);
  }
}

compositeImages()