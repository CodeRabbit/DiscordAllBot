const Discord = require('discord.js');

const systemClient   = new Discord.Client();
const soraClient     = new Discord.Client();
const musicBotClient = new Discord.Client();

const System   = require('./System.js');
const Sora     = require('./Sora.js');
const MusicBot = require('./MusicBot.js');

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
    // 端末のステータス確認
    case "status":
      return system.statusCheck();
      break;
    // アバターイメージ送信
    case "outputImage":
      return system.outputImg();
      break;
    // アバターイメージ変更
    case "imageChange":
      if (arguments[0] != null) return system.imgChange(arguments[0]);
      break;
    // ユーザー名変更
    // 短時間に何回も変えると変更できなくなるので　nickNameの方を変えるようにしたい
    case "nameChange":
      if (arguments[0] != null) return system.nameChange(arguments[0]);
      break;
    // UnbelievaBoatボットの全ての機能の使い方
    case "UnbelievaBoat-all":
    case "unbelievaboat-all":
    case "ub-a":
    case "UBA":
      return system.unbelievaBoatInfoAll();
    // UnbelievaBoatボットの一般ユーザーの機能の使い方
    case "UnbelievaBoat":
    case "unbelievaboat":
    case "ub":
    case "UB":
      return system.unbelievaBoatInfo();
    // Groovyの使い方
    case "Groovy":
    case "groovy":
    case "gy":
    case "GY":
      return system.groovyInfo();
    // Rythmの使い方
    case "Rythm":
    case "rythm":
    case "Ryzm":
    case "ryzm":
      /* まだ書いてない */
    // コマンド一覧
    case "help":
      return system.help();
    break;
  }
});

/******************** sora ********************/
soraClient.on('ready', () => {
  console.log(`${soraClient.user.tag}にログインしました！`);
})

soraClient.on('guildMemberAdd', member => {
  console.log("test");
  const channel = member.guild.channels.cache.get("<773721618128175127>");
  if (!channel) {
    return;
  } else {
    console.log("キャッシュ");
  }
  channel.send(`**参加** ${member.user.tag}さんが参加しました！`);
  channel.send('(っ´∀`)っ:tea: お茶どうぞ');
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

  let pattern = "^[0-9]+d[0-9]+$";
  let reg = new RegExp(pattern);

  if(reg.test(message.content)) {
    return sora.dice();
  }

  if (sora.feelingReply ()) return;
  if (sora.caressReply  ()) return;
  if (sora.callMe       ()) return;
  if (sora.greeting     ()) return;

})

/******************** MusicBot ********************/
musicBotClient.on('ready', () => {
  console.log(`${musicBotClient.user.tag}にログインしました！`);
})

musicBotClient.on('message', message => {
  if (message.author.bot) return;

  const musicBot = new MusicBot (message);

  if (message.content.startsWith('!yt') && message.guild) {
    return musicBot.playMusic();
  }

})

/******************** login ********************/
systemClient  .login(process.env.SYSTEM_BOT_TOKEN );
// kokkoClient   .login(process.env.KOKKO_BOT_TOKEN  );
soraClient    .login(process.env.SORA_BOT_TOKEN   );
// hotaruClient  .login(process.env.HOTARU_BOT_TOKEN );
// umeClient     .login(process.env.UME_BOT_TOKEN    );
// moyaiClient   .login(process.env.MOYAI_BOT_TOKEN  );
// teaTimeClient .login(process.env.TEATIME_BOT_TOKEN);
musicBotClient.login(process.env.MUSIC_BOT_TOKEN  );
