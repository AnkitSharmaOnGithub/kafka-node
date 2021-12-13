const kafka = require("./kafka-instance");

const producer = kafka.producer();

exports.produceData = async (topicName, data, partition) => {
  console.log(topicName, data, partition);
  try {
    await producer.connect({});
    const sendResult = await producer.send({
      topic: topicName,
      messages: data,
      partition: partition,
    });
    return sendResult;
  } catch (error) {
    console.log(error);
  }
};
