const kafka = require("./kafka-instance");

const producer = kafka.producer();

exports.produceData = async (topicName, data, partition) => {
  await producer.send({
    topic: topicName,
    messages: data,
    partition: partition,
  });
};
