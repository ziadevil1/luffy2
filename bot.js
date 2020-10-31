const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-"
var adminprefix = '-'



client.on("ready",()=>{
client.user.setStatus("idle")
//client.user.setActivity(`Type -help` , { type: 'LISTENING' });
console.log(`Logged in as ${client.user.tag}!`);
})



//bc

client.on("message", message => {
    if (message.content.startsWith("-abc")) {
                 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
  m.send(`${argresult}\n ${m}`);
  })
  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`<a:yeso9:675082244590796800> عدد المستلمين `);
  message.delete();
  };
  });


//bc online


  var prefix = "-";

  client.on("message", message => {
  
              if (message.content.startsWith(prefix + "bc")) {
                           if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
    var argresult = args.join(' '); 
    message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
   m.send(`${argresult}\n ${m}`);
  })
   message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\`<a:yeso9:675082244590796800> عدد المستلمين `); 
   message.delete(); 
  };     
  });

client.on('message', message => {
    var  user = message.mentions.users.first() || message.author;
if (message.content.startsWith("-avatar")) {
message.channel.send(`This avatar For ${user} link : ${user.avatarURL}`);
}
});

client.on('ready',  () => {
    console.log('تم تشغيل :Broadcast  ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });

  client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-abc')){
if(!message.author.id === '476185102922285066') return;
message.channel.sendMessage('جار ارسال الرسالة | <a:yes5:675017237005991956>')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

  client.on('message', msg => {
    if(msg.content === '-help')
    msg.reply('Check Your DM <a:yes5:675017237005991956>')

  });
  
  
  client.on("message", message => {
    if (message.content === "-help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#00FF00")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**Help|هيلب <a:Sys5:675067413066285108>
       -bc  | لأرسال برود كاست للكل <a:luffy1:674670322586222624>
       -bco|  لأرسال برود كاست للأونلاين <a:luffy1:674670322586222624>
       -abc| لارسال برودكاست عادي  <a:luffy1:674670322586222624>                                
 <a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568>    
الاوامر العامه|<a:Sys5:675067413066285108>
      -sets|لتغير الاستريمنج للبوت <a:luffy1:674670322586222624>
      -setava|لتغير صوره البوت <a:luffy1:674670322586222624>
      -setname|لتغير اسم البوت <a:luffy1:674670322586222624>
<a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568><a:kat:690568516549738568>
  ** `)
   message.author.sendEmbed(embed)
   
   }
   });

const developers = ["593585813648965633","id"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});


client.login(process.env.TOKEN);