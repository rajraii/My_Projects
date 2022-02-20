function makeRequest(location){
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if ( location === 'Google'){
      resolve('Google says hi')
    }
    else {
      reject ('we can only talk to Google');
    }
  })
}

function processRequest(response){
  return new Promise((resolve) => {
    console.log('Processing Response');
    resolve(`Extra Information ${response}`);
  })
}

// makeRequest('facebook').then((response) => {
//   console.log('Response Recieved');
//   return processRequest(response);
// }).then(processedRequest => {
//   console.log(processedRequest);
// }).catch(err => {
//   console.log(err);
// })

async function doWork(){
  try{
    const Response =await makeRequest('Google');
    console.log('Response Recieved');
    const processedRequest = await processRequest(Response);
    console.log(processedRequest);
  }
  catch(err){
    console.log(err);
  }
}
doWork();