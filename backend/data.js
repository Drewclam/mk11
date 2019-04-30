const fighters = [
  {
    name: 'Scorpion',
    imageUrl: 'https://d28o5ftgkwka4w.cloudfront.net/images/scorpion.jpg',
  },
  {
    name: 'Sub-Zero',
    imageUrl: 'https://d28o5ftgkwka4w.cloudfront.net/images/subzero.jpeg',
  },
];

const inputs = [
  {
    name: 'Front Punch',
    value: 1,
  },
  {
    name: 'Back Punch',
    value: 2,
  },
  {
    name: 'Front Kick',
    value: 3,
  },
  {
    name: 'Back Kick',
    value: 4,
  },
  {
    name: 'Jump',
    value: 5,
  },
  {
    name: 'Short Hop',
    value: 6,
  },
  {
    name: 'Right',
    value: 7,
  },
  {
    name: 'Down',
    value: 8,
  },
  {
    name: 'Left',
    value: 9,
  },
  {
    name: 'L1', // Throw
    value: 10,
  },
  {
    name: 'L2', // Flip stance
    value: 11,
  },
  {
    name: 'R1', // Interact, EX
    value: 12,
  },
  {
    name: 'R2', // Block
    value: 13,
  },
];

module.exports = { fighters, inputs };
