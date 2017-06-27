var kafka = require('rd-kafka');
var producerSettings = {
                "settings": {
                        // 'debug': 'all',
                        "metadata.broker.list": "localhost:9092",
                        "dr_cb": true //delivery report callback
                },
                "topicDetail" : [{'Permission':2,'TopicName':'mytesttopic'},{'Permission':0,'TopicName':'mytesttopic1'}]
};

var message = {
"message": "my hello word"};
console.log(kafka.producer.produceMessage.sendMessage(producerSettings,message));

