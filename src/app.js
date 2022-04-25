const addTextOnImage = require("./addTextOnImage");
const readXlsx = require("./read_xlsx");

const main = async  () =>{
    const users = await readXlsx();
    users.forEach(async(data)=>{
        const user = {
            first_name: data[0],
            last_name: data[1],
            id: data[2]
        }
        const image = await addTextOnImage(user);
    })
}

main().catch(err=>{
    console.log(err);
})