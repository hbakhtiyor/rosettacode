#!/usr/bin/env node

var path = require('path');
// TODO: Load from net(API JSON), instead of local
var pkg = require( path.join(__dirname, 'package.json') );

// Parse command line options

var program = require('commander');

program
	.version(pkg.version)
  .description('The application for running/showing different challenges')
  .usage('<command> [options]')
  .command('challenges', 'Show a list of challenges')
  .command('run <challenge_id> [, ...]', 'Run one or more challenges')
  .command('show <challenge_id> [, ...]', 'Show one or more challenges\' description or source code in a browser');


program
  .on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ rosettacode challenges');
  console.log('    $ rosettacode run example_1');
  console.log('    $ rosettacode run example_1, example_2');
  console.log('    $ rosettacode show example_1');
  console.log('    $ rosettacode show example_1, example_2');
  console.log('    $ rosettacode show example_1 --description');
  console.log('');
});

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

// if (!program.args.length) program.help();
