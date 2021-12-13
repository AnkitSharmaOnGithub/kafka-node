const kafka = require("./kafka-instance");
const consumer = kafka.consumer({ groupId: "kafka-one" });

async function consumerConnect(topicName, fromBeginning = false) {
  await consumer.connect();
  await consumer.subscribe({ topic: topicName, fromBeginning: fromBeginning });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        key: message.key.toString(),
        value: message.value.toString(),
        headers: message.headers,
      });
    },
  });
}

module.exports = consumerConnect;
