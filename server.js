const express = require('express');
const db = require('./models');

const path = require('path');
const app = express();
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
