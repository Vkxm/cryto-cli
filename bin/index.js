#!/usr/bin/env node
const { program } = require('commander');
const pkg=require('../package.json')

program
  .version(pkg.version)
  .command('key', 'Manage API Key -- https://nomics.com')
 program.parse(process.argv);

// const options = program.opts();
// const limit = options.first ? 1 : undefined;
// console.log(program.args[0].split(options.separator, limit));
