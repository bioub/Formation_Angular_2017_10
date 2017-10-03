
setTimeout(() => {
  console.log('1s');
  setTimeout(() => {
    console.log('2s');
    setTimeout(() => {
      console.log('3s');
      setTimeout(() => {
        console.log('4s');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);



console.log('After setTimeout');