const app = require("./app").myapp;
const express = require("express");

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`Application is running on port ${port}, LINK=> http://localhost:${port}`);
});
