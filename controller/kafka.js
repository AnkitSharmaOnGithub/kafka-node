const kafka = require("../kafka/kafka-instance");
const admin = kafka.admin();

exports.getTopics = async (req, res, next) => {
  const topics = await admin.listTopics();
  if (topics.length > 0) {
    res.status(200).send({
      message: "Topics fetched successfully",
      data: topics,
    });
  }
};
