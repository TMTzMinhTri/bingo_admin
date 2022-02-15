import { Cable, ChannelNameWithParams, Channel } from 'actioncable';

let consumer: Cable;

const socketUrl = 'ws://localhost:3000/cable';

function createChannel(channel: string | ChannelNameWithParams, obj?: ThisType<Channel>) {
  if (typeof window !== 'undefined') {
    const actioncable = require('actioncable');
    actioncable.logger.enabled = true;
    if (!consumer) {
      consumer = actioncable.createConsumer(socketUrl);
    }

    return consumer.subscriptions.create(channel, obj);
  }
}

export default createChannel;
