const common = [
  '--require-module ts-node/register' // Load TypeScript module
];

const pie = [
  ...common,
  'tests/apps/pie/features/**/*.feature',
  '--require tests/apps/pie/features/step_definitions/*.steps.ts'
].join(' ');

module.exports = {
  pie
};
