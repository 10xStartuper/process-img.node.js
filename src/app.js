const cliProgress = require("cli-progress");
const colors = require("ansi-colors");
const addTextOnImage = require("./addTextOnImage");
const readXlsx = require("./read_xlsx");
const progressBar = new cliProgress.SingleBar(
  {
    format:
      "Rendering |" +
      colors.cyan("{bar}") +
      "| {percentage}% || {value}/{total}",
    barCompleteChar: "\u2588",
    barIncompleteChar: "\u2591",
    barsize: 42,
    hideCursor: true,
  },
  cliProgress.Presets.shades_classic
);

const main = async () => {
  const users = await readXlsx();
  progressBar.start(users.length, 0);
  let user = {};
  let i = 0;
  for (const data of users) {
    user = {
      first_name: data[1],
      last_name: data[2],
      id: data[0],
      building: data[6],
    };
    await addTextOnImage(user);

    progressBar.increment();
    progressBar.update(i);
    i++;
  }
  progressBar.stop();
};

main().catch((err) => {
  console.log(err);
});

// regioun: data[3],
// date: new Date(data[4]),
// smena: data[5],
// building: data[6],
// group: data[7],
// seat_number: data[8],
