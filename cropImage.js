const sharp = require("sharp");

async function cropImage() {
  try {
    await sharp("./images/sammy.png")
      .extract({ width: 500, height: 330, left: 120, top: 70  })
      .toFile("./output/sammy-cropped.png");
  } catch (error) {
    console.log(error);
  }
}

cropImage();