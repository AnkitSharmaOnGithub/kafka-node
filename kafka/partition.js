const kafka = require("./kafka-instance");

const admin = kafka.admin();

async function connect() {
  await admin.connect();
}

async function createTopic(topicName, numberOfPartitions) {
  // Create topics and partitions

  const topicCreated = await admin.createTopics({
    validateOnly: false,
    waitForLeaders: false,
    timeout: 2000,
    topics: [
      {
        topic: topicName,
        numPartitions: +numberOfPartitions,
      },
    ],
  });

  if (topicCreated) {
    console.log("Partitions created");
  } else {
    console.log("Partitions could not be created");
  }
}

// List Partitions

async function listPartitions() {
  const topics = await admin.listTopics();
  console.log(topics);
}

// Disconnect
async function disconnect() {
  await admin.disconnect();
}

module.exports = {
  connect: connect,
  disconnect: disconnect,
  createTopic: createTopic,
  listPartitions: listPartitions,
};
