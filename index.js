const Discord = require('discord.js');
const client  = new Discord.Client();

const System  = require('./System.js');
const Kokko   = require('./Kokko.js');
const Sora    = require('./Sora.js');

client.on('ready', () => {
  console.log(`${client.user.tag}にログインしました！`);
})

client.on('message', message =>
{
  console.log(`name:${message.author.username}, bot?:${message.author.bot}`);
  // botだったらここではじく
  if (message.author.bot) return;

  // ここでクラス作成
  const system = new System(message, client);
  const kokko  = new Kokko (message, client);
  const sora   = new Sora  (message);

  // 各botのprefix
  const bot_prefix = ["*"];
  // prefix付きのコマンドのuserからの入力期待値は　${prefix}${command} ${...arguments}
  // 全角を半角に変換して以降の処理を半角で統一する
  const user_message = message.content.replace(/　/g, ' ');
  // HACK 本当はslice(0,prefix.length)とかにして可変にしたい
  const prefix = user_message.slice(0,1);

  let prefix_flag = false;

  let command = "";
  let arguments = [];
  // bot_prefix配列内に定義されたprefixがメッセージに含まれていれば1文字目を切り取る
  // 共通処理 空白で区切って1つ目をcommandに格納 残りをargumentsに格納する
  if (bot_prefix.indexOf(prefix) !== -1) {
    [command, ...arguments] = user_message.slice(1).split(" ");
    prefix_flag = true;
  } else {
    [command, ...arguments] = user_message.split(" ");
  }

  if (prefix_flag) {
    switch (prefix) {
      // 実はbreakいらない箇所あるけど統一感なくて気持ち悪かったから書いた 後で直すかも...
      // System の prefix
      case "*":
        switch (command) {
          // 端末のステータス確認
          case "status":
            return system.statusCheck();
            break;
          // アバターイメージ送信
          case "outputImg":
            return system.outputImg();
            break;
          // アバターイメージ変更
          case "imgChange":
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
            /* まだ書いてない */
          // コマンド一覧
          case "help":
            return
          break;
        }
      break;
    }
  } else if(command === "にゃん"){
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
  } else {
    // 一旦この実装でテスト（後でリファクタリング）
    kokko.feelingReply();
    kokko.eatMe();
    kokko.fortune();
    kokko.callMe();
    kokko.greeting();
  }
});

client.login(process.env.BOT_TOKEN);
