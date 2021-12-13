const sequelize = require("../utils/database");
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
      sequelize
        .query(
          `
        INSERT INTO messages(kafka_key,message) VALUES('${message.key.toString()}','${message.value.toString()}')
      `
        )
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
}

module.exports = {
  consumerConnect: consumerConnect,
};
