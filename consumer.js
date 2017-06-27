var kafka = require('rd-kafka');
var settings = {
                "settings": {
                        // 'debug': 'all',
                        "metadata.broker.list": "localhost:9092",
                        "group.id": "node-rdkafka-consumer-flow-example",
                        "enable.auto.commit": false
                },
		"topicDetail" : [{'Permission':2,'TopicName':'mytesttopic'},{'Permission':0,'TopicName':'mytesttopic1'}]

};
console.log(kafka.consumer.consumeMessage.getMessage(settings));

