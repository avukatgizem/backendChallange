const server = require("./api/server");

const PORT = process.env.PORT || 9000;

listen(PORT, () => {
  console.log(`${PORT} portu dinleniyor...`);
});