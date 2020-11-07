const Discord = require('discord.js');

const systemClient   = new Discord.Client();
const soraClient     = new Discord.Client();

const System   = require('./System.js');
const Sora     = require('./Sora.js');

/*************** system ***************/
systemClient.on('ready', () => {
  console.log(`${systemClient.user.tag}にログインしました！`);
})

systemClient.on('message', message => {
  if (message.author.bot) return;

  const system  = new System(message, systemClient);

  // 全角を半角に変換して以降の処理を半角で統一する
  const user_message = message.content.replace(/　/g, ' ');

  const prefix = user_message.slice(0, 1);

  if (prefix != "*") return;

  // 共通処理 空白で区切って1つ目をcommandに格納 残りをargumentsに格納する
  const [command, ...arguments] = user_message.slice(1).split(" ");

  // 実はbreakいらない箇所あるけど統一感なくて気持ち悪かったから書いた 後で直すかも...
  switch (command) {
    // Groovyの使い方
    case "Groovy":
    case "groovy":
    case "gy":
    case "GY":
      return system.groovyInfo();
  }
});

/******************** sora ********************/
soraClient.on('ready', () => {
  console.log(`${soraClient.user.tag}にログインしました！`);
})

soraClient.on('message', message => {
  if (message.author.bot) return;

  const sora = new Sora (message);
  const user_message = message.content.replace(/　/g, ' ');
  const [command, ...arguments] = user_message.split(" ");

  if(command === "にゃん"){
    // prefixなしコマンドの場合
    switch(arguments[0]) {
      // にゃんコマンドの使い方説明
      case "help":
        return sora.help();
      // casinoコマンドの使い方説明送信
      case "にゃん":
        return sora.casino();
      // サーバー内ランクの説明送信
      case "ぱす":
        return sora.rankInfo();
      // ランクの昇格条件を送信
      case "ぱすー":
        return sora.rankUpCondition();
      break;
    }
  }

  if(new RegExp("^[0-9]+d[0-9]+$").test(message.content)) {
    return sora.dice();
  }

  if (sora.feelingReply ()) return;
  if (sora.caressReply  ()) return;
  if (sora.callMe       ()) return;
  if (sora.greeting     ()) return;

})

/******************** login ********************/
systemClient  .login(process.env.SYSTEM_BOT_TOKEN );
soraClient    .login(process.env.SORA_BOT_TOKEN   );
