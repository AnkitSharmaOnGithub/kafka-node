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
      if (result[0].hasOwnProperty("errorCode") && result[0].errorCode == 0) {
        console.log(result);
        res.status(200).json({
          message: "Message created successfully",
        });
      }
      else{
        throw new Error('Some error occured');
      }
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
