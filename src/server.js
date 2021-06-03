const app = require('./index');
const database = require('./config/database');

const PORT = process.env.SERVER_PORT || 3333;

database();

app.listen(PORT, () => {
  console.log(`[server] running on port:${PORT}`);
});
