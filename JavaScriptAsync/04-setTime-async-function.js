function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}


(async function () {
  await setTimeoutPromise(1000);
  console.log('1s');
  
  await setTimeoutPromise(1000);
  console.log('2s');

  await setTimeoutPromise(1000);
  console.log('3s');

  await setTimeoutPromise(1000);
  console.log('4s');
  
  console.log('After setTimeoutSync');
}());
