const SQS_QUEUE_URL = process.env.SQS_QUEUE_URL;

// IMPORTANT: All attributes in all possible messages. Please update when adding new typ of messages
const MESSAGE_ATTRIBUTE_NAMES = [
  'email',
];


module.exports = {
  SQS_QUEUE_URL,
  MESSAGE_ATTRIBUTE_NAMES,
};
