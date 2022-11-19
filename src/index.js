const mqtt = require('mqtt');
const {Sensor} = require('./models/sensor.js');

const producer = () => {
  const client = mqtt.connect('tcp://test.mosquitto.org:1883');
  client.on('connect', function () {
    client.subscribe('presence', function (err) {
      if (!err) {
        client.publish('/sensor', JSON.stringify(new Sensor()))
        console.log(`SERVER: MESSAGE PUBLISHED SUCCESSFULLY [${new Date()}]`);
        client.end();
      }
      setTimeout(
        () => producer(), 5000
      )
    });
  });
}

const subscriber = () => {
  const client = mqtt.connect('tcp://test.mosquitto.org:1883')
  client.on('connect', function () {
    client.subscribe('presence', function (err) {});
  });
  client.on('message', function (topic, message) {
    console.log(message.toString());
  });
}

if (process.env.NODE_ENV == 'CLIENT') {
  producer();
} else {
  subscriber();
}

