
require('dotenv').config({path: __dirname + '/.env'})
const DISCORD_BOT_TOKEN="ODQ2Mjg3MTcwMTYyOTE3Mzc3.YKtUWA.npI7DH4ytrCw4fssvWygo-o9tjg";
const listOfCP='https://clist.by/api/v1/contest/?username=tangobeer&api_key=f63b04ccd3652b48f1e06a5bc9faeb5a9cac1ec9'
console.log(DISCORD_BOT_TOKEN);
const request = require('request');
const axios = require('axios');

const {Client}= require('discord.js');
const { from } = require('form-data');
const prefix='gg';
const client= new Client();
client.on('ready',()=>{
    console.log("Bot has logged in")
})
client.on('message',(message)=>{
    const cmd=message.content.trim().substring(prefix.length);
    console.log(message.content);
    if(message.content.startsWith(prefix)){
        console.log(cmd);
    
        if(cmd===" tiny"){
            message.reply("Tiny is iron")
        }if(cmd===" bye"){
            message.reply("Goodnight")
        }
    if(cmd==" cp")
        request(listOfCP, function (error, response, body) {
            //console.log(body)
            const parsedJSON = JSON.parse(body);
            //console.log(parsedJSON.objects);
            let arr=parsedJSON.objects;
            arr.sort(function(b, a){
                return a.start - b.start;
            });
            let fin=[];
            for( let i=0;i<15;i++){
                fin.push([arr[i].event,arr[i].href])         
            }
            message.reply(fin)
});

    if(cmd==" norris"){
        request('https://api.chucknorris.io/jokes/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
    //console.log(body) 
    const data=(JSON.parse(body))
    message.reply(data.value)

  }
});
    }
    if(cmd==" roast"){
        request('https://insult.mattbas.org/api/insult', function (error, response, body) {
    if (!error && response.statusCode == 200) {
    //console.log(body) 
    const data=((body))
    message.reply(data)

  }
});
    }
    if(cmd==" trump"){
        request('https://api.whatdoestrumpthink.com/api/v1/quotes/random', function (error, response, body) {
    if (!error && response.statusCode == 200) {
    //console.log(body) 
    const data=(JSON.parse(body))
    message.reply(data.message)

  }
});
    }

    if(cmd===" covid"){
        (async () => {
            try {
              const response = await axios.get('https://api.covid19india.org/state_district_wise.json')
              console.log(response.data);
              //console.log(response.data.explanation);
            } catch (error) {
              console.log(error.response.body);
            }
          })();

    }
    if (cmd === ' avatar') {
		const user = message.author;
		return message.channel.send(`${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`);
	}
    if (cmd === ' help') {
		const user = message.author;
        console.log(user);
		return message.channel.send(`${user.username}, really? help? dissapointment smh`);
	}
}
}


)

client.login(DISCORD_BOT_TOKEN);
 
