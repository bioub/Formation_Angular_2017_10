function setTimeoutPromise(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}

setTimeoutPromise(1000)
  .then(() => {
    console.log('1s');
    return setTimeoutPromise(1000);
  })
  .then(() => {
    console.log('2s');
    return setTimeoutPromise(1000);
  })
  .then(() => {
    console.log('3s');
    // throw new Error('erreur dans le 3e cb')
    return setTimeoutPromise(1000);
  })
  .then(() => {
    console.log('4s');
    return setTimeoutPromise(1000);
  })
  .catch(err => {
    console.log(err.message);
  });

console.log('After setTimeoutPromise');