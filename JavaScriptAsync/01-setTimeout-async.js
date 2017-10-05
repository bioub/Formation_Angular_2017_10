
setTimeout((err) => {
  if (err) {
    console.log(err);
  }
  console.log('1s');
  setTimeout((err) => {
    if (err) {
      console.log(err);
    }
    console.log('2s');
    setTimeout((err) => {
      if (err) {
        console.log(err);
      }
      console.log('3s');
      setTimeout((err) => {
        if (err) {
          console.log(err);
        }
        console.log('4s');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
// callback hell

console.log('After setTimeout');