const express = require('express');
const session = require('express-session');
const sequelize = require('./connection/config');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log(`Tech Learn server listening on port ${PORT}!`);
  });
});
