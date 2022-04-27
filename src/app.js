const addTextOnImage = require("./addTextOnImage");
const readXlsx = require("./read_xlsx");

const main = async () => {
  const users = await readXlsx();
  let user = {};
  await users.forEach(async (data) => {
    user = {
      first_name: data[1],
      last_name: data[2],
      id: data[0],
    };
    // regioun: data[3],
    // date: new Date(data[4]),
    // smena: data[5],
    // building: data[6],
    // group: data[7],
    // seat_number: data[8],
    await addTextOnImage(user);
  });
};

main().catch((err) => {
  console.log(err);
});
