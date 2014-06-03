var config = require('./../config');

if(config.mongo){
  var devices = require('./database').collection('devices');
} else {
  var devices = require('./database').devices;
}

module.exports = function(uuid, callback) {
  devices.findOne({
    uuid: uuid
  }, function(err, devicedata) {
    if(err || !devicedata || devicedata.length < 1) {
      console.log('uuid not found');
      callback({});
    } else {
      console.log('socketid: ' + devicedata.socketid);
      callback(devicedata.socketid);
    }
  });
};
