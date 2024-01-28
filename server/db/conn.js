const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: async function (callback) {
    try {
      await client.connect();
    } catch (err) {
      console.log(err);
    }

    _db = client.db("employees");

    if (_db) {
      console.log("Successfully connected to MongoDB.");
    } else {
      console.log("Failed to connect to MongoDB.");
    }
    return callback(_db === undefined ? false : true);
  },

  getDb: function () {
    return _db;
  },
};
