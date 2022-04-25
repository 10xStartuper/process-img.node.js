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

module.exports = generateBarCode;