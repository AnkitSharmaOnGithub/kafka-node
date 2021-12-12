const partition = require("./partition");

partition.connect();

try {
  partition.createTopic("jersey", 2);
} catch (error) {
  console.log(typeof error);
  if (error.hasOwnProperty("error")) {
    // console.log(error.error);
  } else {
    console.log("No errors to display");
  }
}

partition.disconnect();
