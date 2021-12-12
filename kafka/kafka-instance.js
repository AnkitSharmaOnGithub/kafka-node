const { Kafka, logLevel } = require("kafkajs");

const kafka = new Kafka({
  clientId: "palyer-jersey",
  brokers: [`${process.env.KAFKA_HOST}  ${process.env.KAFKA_PORT}`],
  logLevel: logLevel.ERROR,
});

module.exports = kafka;
