#!/usr/bin/env node

var path = require('path');
var challenges = require(path.join(__dirname, '/assets/challenges.json'));
var request = require('request');
// var vm = require('vm');

// Parse command line options

var program = require('commander');

program
  .description('Run one or more challenges')
  .usage('<challenge_id> [, ...]');
 
program
  .on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ rosettacode run example_1');
  console.log('    $ rosettacode run example_1, example_2');
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
      console.log('Running %s...', challengeid);
      
      if(challenge['assets']) {
        // TODO: load assets, before source code
      }

      request.get(challenge.gist['raw_url'], function (error, response, body) {
        if(error)
          console.error(error);
        else if(response.statusCode == 200) {
          eval(body);
          // vm.runInThisContext(body, path.join(__dirname, 'remote_modules/' + challengeid + '.js')); 
        }
      })
      .on('error', function(e) {
        console.error(e);
      });      
    }    
  });
  if(!found) 
    console.log('  error: could not find any matched "%s" challenge', challengeid);
});

console.log();