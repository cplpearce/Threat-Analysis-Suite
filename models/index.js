// I M P O R T   T A B L E   N A M E S
const tblHelpers = require("../helpers/tblFields");

module.exports = (db) => {
  // G E T   A L L   R E P O R T S
  const getReports = () => {
    const query = {
      text: "SELECT * FROM reports",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };
  // G E T   U N I Q U E   V A R S
  const getUnique = () => {
    const fields = [
      "event_type",
      "sub_event_type",
      "actor1",
      "assoc_actor_1",
      "actor2",
      "assoc_actor_2",
      "region",
      "country",
      "admin1",
      "admin2",
      "admin3",
      "location",
      "source",
    ];

    const results = [];
    const uniqueVals = {};

    return Promise.all(
      fields.map((field) => {
        const query = {
          text: `SELECT DISTINCT ${field} FROM reports`,
        };

        return db
          .query(query)
          .then((result) => results.push(result.rows))
          .catch((err) => err);
      })
    ).then(() => {
      // Iterate results by field, and index
      fields.forEach((field, index) => {
        //
        uniqueVals[field] = Object.values(
          results[index].map((pair) => pair[field])
        );
      });
      return uniqueVals;
    });
  };

  // P O S T   N E W    R E P O R T
  const addReport = (fields) => {
    const query = {
      text: `INSERT INTO reports(${Object.keys(tblHelpers()).slice(
        3
      )}) VALUES (${fields.map((field) => `'${field}'`)})`,
    };
    console.log(query);
    return db
      .query(query)
      .then((result) => console.log(result.rows))
      .catch((err) => console.log(err));
  };

  return {
    getReports,
    getUnique,
    addReport,
  };
};
