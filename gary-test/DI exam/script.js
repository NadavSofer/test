const fs = require("fs");

let countriesTemplate = fs.readFile(
  "../countries-template.html",
  "utf8",
  function (err, data) {
    if (err) {
      return console.log(err);
    }

    const replaceCountriesTemplate = function () {
      countriesTemplate = data.replace(/{%NAME%}/g, countries.name);
      countriesTemplate = data.replace(/{%CAPITAL%}/g, countries.capital);
      countriesTemplate = data.replace(/{%LANGUAGES%}/g, countries.languages);
      countriesTemplate = data.replace(/{%IMAGE%}/g, countries.image_link);
    };

    fs.writeFile(
      "../countries-template.html",
      countriesTemplate,
      "utf8",
      function (err) {
        if (err) return console.log(err);
      }
    );
  }
);
