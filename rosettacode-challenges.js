#!/usr/bin/env node

var path = require('path');
var challenges = require(path.join(__dirname, '/assets/challenges.json'));

var Table = require('easy-table');

// Parse command line options

var program = require('commander');

program
  .description('Show a list of challenges');

program
  .on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ rosettacode challenges');
  console.log('');
});

program.parse(process.argv);

if (program.args.length) {
  console.log();
  console.error('  error: need to pass without argument(s)');
  console.log();
  program.outputHelp();
  process.exit(1);
}

var t = new Table();

console.log();
challenges.forEach(function(challenge) {
  t.cell('id', challenge['id']);
  t.cell('name', challenge['name']);
  t.cell('description', challenge['description']);
  t.newRow();
});

console.log(t.toString());