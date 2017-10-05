function setTimeoutSync(cb, delay) {
  const debut = Date.now();

  while (Date.now() < debut + delay) {}

  cb();
}

try {
  setTimeoutSync(() => {
    console.log('1s');
  }, 1000);
  
  setTimeoutSync(() => {
    console.log('2s');
  }, 1000);
  
  setTimeoutSync(() => {
    console.log('3s');
  }, 1000);
  
  setTimeoutSync(() => {
    console.log('4s');
  }, 1000);
}
catch (err) {
  console.log(err);
}

console.log('After setTimeoutSync');