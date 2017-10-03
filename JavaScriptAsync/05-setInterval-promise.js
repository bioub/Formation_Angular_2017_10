function setIntervalPromise(delay) {
  return new Promise((resolve, reject) => {
    setInterval(resolve, delay);
  });
}

setIntervalPromise(1000)
  .then(() => console.log('Hello'));

// Problème : ne se produit qu'une fois