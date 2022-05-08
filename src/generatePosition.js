const crcleSvg = `
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8.5" cy="8.5" r="8.5" fill="#111111"/>
    </svg>
    `;
const circleBuffer = Buffer.from(crcleSvg);
const positions = require('./positions');

const generatePosition = (id) => {
  const numbers = id.toString();
  if (numbers.length === 10) {
    const result = [...numbers];
    const position = [];
    result.forEach((item, index) => {
      position.push({
        input: circleBuffer,
        left: positions.x[index],
        top: positions.y[item],
      });
    });
    return position;
  } else {
    console.log('Invalid number. ID must be 10 digits');
  }
};

module.exports = generatePosition;
