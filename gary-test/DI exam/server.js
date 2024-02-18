const express = require("express");
const app = express();
const port = 3000;

app.get("/countries", (req, res) => {
  const getCountries = () => {
    console.log("Working ...");
    fetch("./countries.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Wrong artwork");
        }
      })
      .catch(function (error) {
        console.log(`We got the error - ${error}`);
      });
    console.log("Work Done ...");
  };

  //   const replaceIndexTemplate = () => {};
  getCountries();
  console.log(getCountries());
});

app.listen(port, () => console.log("Listening on port:" + port));
