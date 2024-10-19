const {program}=require('commander')
const set=require('../lib/set.js')
program
      .command('set')
      .description('set API key')
      .parse(process.argv)
      d.action(set.setApiKey(proces.argv[3]));

program
      .command('show')
      .description('set API key')
      .action(function(){
        console.log("hi from show")
      });    
program
      .command('remove')
      .description('set API key')
      .action(function(){
        console.log("hi from remove")
      });
program.parse(process.argv);
