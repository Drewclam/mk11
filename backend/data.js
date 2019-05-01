const fighters = [
  {
    name: 'Scorpion',
    imageUrl: 'https://d28o5ftgkwka4w.cloudfront.net/images/scorpion.jpg',
    moves: {
      basic: {
        flickKick: {
          input: 'f+3',
          damage: 5.0,
          blockDamage: 0.75,
          type: 'mid',
        },
        flipKick: 'b+3',
        gutSlice: 'b+1',
        hingeKick: '3',
      },
      spear: 'b,f+1',
    },
  },
  {
    name: 'Sub-Zero',
    imageUrl: 'https://d28o5ftgkwka4w.cloudfront.net/images/subzero.jpeg',
  },
  // https://www.gamerevolution.com/guides/484777-mortal-kombat-11-roster-all-confirmed-and-rumored-fighters-list#/slide/1
];

const inputs = [
  {
    name: 'Front Punch',
    value: '1',
  },
  {
    name: 'Back Punch',
    value: '2',
  },
  {
    name: 'Front Kick',
    value: '3',
  },
  {
    name: 'Back Kick',
    value: '4',
  },
  {
    name: 'Jump',
    value: 'U',
  },
  {
    name: 'Short Hop',
    value: 'u',
  },
  {
    name: 'Forward',
    value: 'F',
  },
  {
    name: 'Down',
    value: 'D',
  },
  {
    name: 'Backward',
    value: 'B',
  },
  {
    name: 'L1', // Throw
    value: '10',
  },
  {
    name: 'L2', // Flip stance
    value: '11',
  },
  {
    name: 'R1', // Interact, EX
    value: '12',
  },
  {
    name: 'R2', // Block
    value: '13',
  },
  {
    name: 'In Air',
    value: 'a',
  },
  {
    name: 'Simultaneous', // Input together
    value: '+',
  },
  {
    name: 'Sequential', // Input sequentially
    value: '-',
  },
];

module.exports = { fighters, inputs };
