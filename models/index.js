module.exports = (db) => {
  const getReports = () => {
    const query = {
      text: "SELECT * FROM reports",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

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

  return {
    getReports,
    getUnique,
  };
};
