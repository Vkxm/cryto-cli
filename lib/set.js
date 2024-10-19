// //const Configstore = require('configstore');
// import Configstore from 'configstore';
// //const pkg = require('./package.json');
// // Create a Configstore instance with your package name
// const config = new Configstore('xmaxx');

// // Function to set the API key
// function setApiKey(apiKey) {
//     config.set('apiKey', apiKey);
//     console.log('API key saved.');
// }

// // Function to get the API key
// function getApiKey() {
//     return config.get('apiKey');
// }
// // Function to remove the API key
// function removeApiKey() {
//     config.delete('apiKey');
//     console.log('API key removed.');
// }

// // setApiKey('34566785676');
// // const configFilePath = config.path;
// // console.log('Config file location:', configFilePath);
// module.exports=setApiKey,getApiKey,removeApiKey;
// myConfig.js
async function loadConfigStore() {
    const Configstore = await import('configstore');
     //const pkg = require('./package.json');
    // Create a Configstore instance with your package name
    const config = new Configstore('xmaxx');
    
    // Function to set the API key
    function setApiKey(apiKey) {
        config.set('apiKey', apiKey);
        console.log('API key saved.');
    }
    
    // Function to get the API key
    function getApiKey() {
        return config.get('apiKey');
    }
    // Function to remove the API key
    function removeApiKey() {
        config.delete('apiKey');
        console.log('API key removed.');
    }
  
}

loadConfigStore().catch(console.error);


 module.exports={
    setApiKey,getApiKey,removeApiKey
 }
