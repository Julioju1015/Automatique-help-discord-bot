
const utils = require('../../utils');


module.exports = {
    name: "flip",
    category: "fun",
  description: "Pile ou face",
  usage: "[command]",
  run: async (client, message, args) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
    
  {
  var msg2 = Array(2);
          msg2[1] = "Pile";
          msg2[2] = "Face";
          var x = getRandomInt(0, 8);
          if (x < 4){
              message.channel.send(msg2[1]);
          }
          else{
              message.channel.send(msg2[2]);
          }
      }
          
  }
  };