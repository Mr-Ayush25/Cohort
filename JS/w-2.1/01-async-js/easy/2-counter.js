let counter = 0;
const updater = () => {
  setTimeout(() => {
    counter++;
    console.log(counter);
    // To stop it some point
    if (counter < 10) {
      updater();
      clearTimeout(updater);
    } else {
      clearTimeout(updater);
    }
  }, 2000);
};
updater();
