const app = require('./index');
const database = require('./config/database');

database();

app.listen(process.env.PORT || 8000, () => {
  console.log(`[server] running on port:${process.env.PORT || 8000}`);
});
