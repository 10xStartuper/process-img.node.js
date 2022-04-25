const sharp = require("sharp");

//Resize image
async function resizeImage() {
    try {
      await sharp("./images/sammy.png")
        .resize({
          width: 150,
          height: 97
        })
        .toFile("./output/sammy-resized.png");
    } catch (error) {
      console.log(error);
    }
  }
  
resizeImage();