const { Kafka, logLevel } = require("kafkajs");

const env = require("dotenv");
env.config();

const kafka = new Kafka({
  clientId: "palyer-jersey",
  brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
  logLevel: logLevel.ERROR,
});

module.exports = kafka;
