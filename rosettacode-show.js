#!/usr/bin/env node

var path = require('path');
var open = require('open');
var challenges = require(path.join(__dirname, '/assets/challenges.json'));

// Parse command line options

var program = require('commander');

program
  .description('Show one or more challenges\' description or source code in a browser')
  .usage('<challenge_id> [, ...] [options]')
  .option('-d, --description', 'Output description of a challenge in the terminal')
  .option('-s, --source-code', 'Show source code in a browser');

program
  .on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ rosettacode show example_1');
  console.log('    $ rosettacode show example_1, example_2');
  console.log('    $ rosettacode show example_1 --description');
  console.log('');
});

program.parse(process.argv);

var challengeids = program.args;

if (!challengeids.length) {
  console.log();
  console.error('  error: missing challenge id(s) argument');
  console.log();
  program.outputHelp();
  process.exit(1);
}

console.log();

challengeids.forEach(function(challengeid) {
  var found = false;
  challenges.forEach(function(challenge) {
    if(challenge['id'] == challengeid) {
      found = true;
      // if (!program.description) { // TODO: Load full description from source code and output to terminal
        console.log('Opening %s...', challenge.gist['url']);

        open(challenge.gist['url'], function (err) {
          console.error('  error: could not open the current url, code: %s', err.code);
        });
      // }
    }    
  });
  if(!found) 
    console.log('  error: could not find any matched "%s" challenge', challengeid);
});

console.log();