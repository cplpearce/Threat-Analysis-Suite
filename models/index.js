// I M P O R T   T A B L E   N A M E S
const tblHelpers = require("../helpers/tblFields")();

module.exports = (db) => {
  // G E T   A L L   R E P O R T S
  const getAllReports = () => {
    const query = {
      text: "SELECT * FROM reports",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  // G E T   U N I Q U E   V A L S
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
  const addReport = (data) => {
    const query = {
      text: `INSERT INTO reports(${Object.keys(tblHelpers).slice(
        1
      )}) VALUES (DEFAULT, ${data.map((field) => `'${field}'`)})`,
    };
    return db.query(query);
  };

  // P U L L   S P E C I F I C   R E P O R T S   B Y   I D
  const getSpecificReports = (ids) => {
    const query = {
      text: `SELECT * FROM reports WHERE id = ANY(ARRAY[${ids}])`,
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  // G E T   S P E C I F I C   R E P O R T S    B Y   F I E L D   &   V A L U E
  const getTargetField = (field, data) => {
    const query = {
      text: `SELECT ${field} FROM reports WHERE ${field} = '${data}'`,
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  // G E T   U S E R   L O G I N S
  const getUsername = (user) => {
    const query = {
      text: `SELECT * FROM users WHERE user_name = '${user}'`,
    };
    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getAllReports,
    getUnique,
    addReport,
    getSpecificReports,
    getTargetField,
    getUsername,
  };
};
