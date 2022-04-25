const sharp = require("sharp");

async function rotateImage() {
  try {
    await sharp("../images/sammy.png")
      .rotate(33, { background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .blur(12)
      .toFile("../output/sammy-rotated.png");
  } catch (error) {
    console.log(error);
  }
}

rotateImage();