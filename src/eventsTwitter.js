const express = require('express');

const app = express();

const port = process.env.PORT || 8000;

const eventEmitter = require('events');

app.get('/', (req, res) => {
  // Creating an event emitter class

  class Twitter extends eventEmitter {
    constructor() {
      super();
    }
  }

  // Initiating the event emitter

  let twitterEmitter = new Twitter();

  // Creating the event listener and callback function

  // postTweet is the name of the event

  twitterEmitter.on(
    'postTweet',

    (id, tweet, comments, retweets, likes, date) => {
      const data = {
        id: id,

        tweet: tweet,

        comments: comments,

        retweets: retweets,

        likes: likes,

        date: date,
      };

      console.log(data);

      res.json(data);
    }
  );

  // Running the callback function which emits the event

  twitterEmitter.emit('postTweet', 1, 'Hello World!', 0, 0, 0, '08-01-2022');
});

app.listen(port, () =>
  console.log(`Tweet service running on ${port}, http://localhost:${port}`)
);

const eventEmitter = new EventEmitter();
eventEmitter.on('start', () => {
    console.log('started');
  });
  eventEmitter.emit('start');

