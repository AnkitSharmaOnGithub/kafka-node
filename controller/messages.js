const producer = require("../kafka/producer");

exports.createMessage = async (req, res, next) => {
  try {
    const body = req.body;

    if (body) {
      const data = [];
      for (const key in body) {
        data.push({
          key: key,
          value: body[key],
        });
      }
      const result = await producer.produceData("jersey", data, 1);
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
};
