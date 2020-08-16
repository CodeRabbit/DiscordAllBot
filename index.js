const Discord = require('discord.js')
const client = new Discord.Client()
const System =  require('./System.js')
const Kokko =  require('./Kokko.js')

client.on('ready', () => {
  console.log(`${client.user.tag}にログインしました！`)
})

client.on('message', message =>
{
  console.log(`name:${message.author.username}, bot?:${message.author.bot}`)
  // botだったらここではじく
  if (message.author.bot) return

  // ここでクラス作成
  const system = new System(message, client);
  const kokko  = new Kokko(message, client);

  // 各botのprefix
  const bot_prefix = ["*"];
  // prefix付きのコマンドのuserからの入力期待値は　${prefix}${command} ${...argument}
  // 全角を半角に変換して以降の処理を半角で統一する
  const user_message = message.content.replace(/　/g, ' ');
  // HACK 本当はslice(0,prefix.length)とかにして可変にしたい
  const prefix = user_message.slice(0,1);

  let prefix_flag = false;
  if (bot_prefix.indexOf(prefix) !== -1) {
    const [command, ...argument] = user_message.slice(1).split(" ");
    prefix_flag = true;
  } else {
    const [command, ...argument] = user_message.split(" ");
  }

  if (prefix_flag) {
    switch (prefix) {
      // 実はbreakいらない箇所あるけど統一感なくて気持ち悪かったから書いた 後で直すかも...
      // System の prefix
      case "*" :
        switch (command) {
          case "status":
            return system.statusCheck();
            break;
          case "outputImg":
            return system.outputImg();
            break;
          case "imgChange":
            if (argument[0] != null) return system.imgChange(argument[0]);
            break;
          // 短時間に何回も変えると変更できなくなるので　nickNameの方を変えるようにしたい
          case "nameChange":
            if (argument[0] != null) return system.nameChange(argument[0]);
            break;
          case "help":
            return message.channel.send("*status\n"
                                        +"*outputImg\n"
                                        +"*imageChange [imgUrl]\n"
                                        +"*nameChange [name]\n"
                                      );
          break;
        }
      break;
    }
  } else if(command === "にゃん"){
    // prefixなしコマンドの場合
    switch(argument[0]) {
      case "help":
        return message.channel.send(
          "にゃん　にゃん :カジノで遊べるコマンド一覧を教えてくれる\n"
          +"にゃん　にゃー :サーバーに入っている人数（bot込）を教えてくれる\n"
          +"にゃん　ぱす  :ランクの説明\n"
          +"にゃん　ぱすー :ランクの昇格基準の表示\n"
          +"にゃん　UnbelievaBoat-all: UnbelievaBoatのコマンドを全て表示\n"
          +"にゃん　un-a:上のコマンドの省略形\n"
          +"にゃん　UnbelievaBoat:ユーザーが使えるコマンドだけを表示\n"
          +"にゃん　groovy:groovy(音楽bot)のコマンドを表示\n"
          +"にゃん　gy:上のコマンドの省略系\n"
        );
      case "にゃん":
        return message.channel.send(
          "!bj 賭け金            　　　         （ブラックジャック）\n"
          +"!roulette 賭け金 　賭ける場所  (ルーレット)\n"
          +"!rouletteinfo                        (ルーレットの詳細なルールを表示)\n"
          +"!slot 賭け金          　　　（スロットマシン）\n"
          +"!rr 賭け金            　　　　（ロシアンルーレット）\n"
          +"!cf 賭け金            　　　（クックファイト）\n"
          +"!buy c               　　　　（チキンを買う）\n"
          +"!lb                 　　　　　 （リーダーボード）\n"
          +"!lb -cash            　　　（手持ちのリーダーボード）\n"
          +"!lb -bank            　　　（銀行のリーダーボード）\n"
          +"!lb -total　　　　　　　（トータルのリーダーボード）\n"
          +"!dep 預ける金額　　　　（銀行にお金を預ける）\n"
          +"!with 引き出す金額　　　（銀行からお金を引き出す）\n"
          +"!bal                　　　　　　　 （所持金確認）\n"
        ).then(message => message.react('🐈'));
      case "にゃー":
        return message.channel.send("このサーバーのメンバーは"+message.guild.members.size+"人だにゃ")
        .then(message => message.react('🐈'));
      case "ぱす":
        return message.channel.send(
          "このサーバーでは\n"
          +":bookmark:白（ウルトラヴァイオレット）\n"
          +":fleur_de_lis:紫（ヴァイオレット）\n"
          +":diamond_shape_with_a_dot_inside:藍（インディゴ）\n"
          +":blue_heart:青（ブルー）\n"
          +":green_heart:緑（グリーン）\n"
          +":yellow_heart:黄（イエロー）\n"
          +":orange_heart:橙（オレンジ）\n"
          +":heart:赤（レッド）\n"
          +":black_heart:黒（インフラレッド）\n"
          +"のランクがあって\n"
          +"上に行けば行くほど強い権限をもらえるし　いろいろできることが増える"
        );
      case "ぱすー":
        return message.channel.send(
          "基本はレッドから始まりますが\n"
          +"荒らし行為や人の迷惑になる行為を行った場合\n"
          +"インフラレッドに降格され、全ての権限を奪われ、チャンネルへのアクセス権限を奪われます\n"
          +"\n"
          +"昇格条件\n"
          +":bookmark:白（ウルトラヴァイオレット）:\n"
          +"・基本的になることはできない。\n"
          +"\n"
          +":fleur_de_lis:紫（ヴァイオレット）:\n"
          +"・コマンドを使いこなせること\n"
          +"・ユーザーのサポートができること\n"
          +"・トラブルが発生したときに対応できること\n"
          +"\n"
          +":diamond_shape_with_a_dot_inside:藍（インディゴ）:\n"
          +"・レッドを２人育成し、グリーンまで成長させる\n"
          +"\n"
          +":blue_heart:青（ブルー）：\n"
          +"・サーバー内職業を取得する\n"
          +"（デザイナー、プログラマー、コマンダー）\n"
          +" or \n"
          +"・偉業達成(招待人数10人以上)\n"
          +"\n"
          +":green_heart:緑（グリーン）：\n"
          +"・悪名以外の二つ名をもらうこと\n"
          +"・所持ハートが5000以上\n"
          +"\n"
          +":yellow_heart:黄（イエロー）：\n"
          +"・簡単な基本コマンドを覚えて使えるようになる\n"
          +"（Groovyのコマンド、UnbelievaBoatのコマンドの一部）\n"
          +"\n"
          +":orange_heart:橙（オレンジ）：\n"
          +"・周りの人と交流し仲良くできること\n"
          +"\n"
          +":heart:赤（レッド）：\n"
          +"・#自己紹介 チャンネルで自己紹介を行う\n"
          +"\n"
        );
      case "UnbelievaBoat-all":
      case "unbelievaboat-all":
      case "ub-a":
      case "UBA":
        return message.channel.send(
          "ーーーーーーー 経済 ーーーーーーー\n"
          +"\n"
          +"\n"
          +"ーー 管理者 ーー\n"
          +"\n"
          +"!set-currency <シンボル>\n"
          +"通貨シンボルを変更する\n"
          +"\n"
          +"!set-start-balance <金額>\n"
          +"開始銀行残高を設定する\n"
          +"\n"
          +"!money-audit-log <enable | disable> [チャンネル]\n"
          +"金銭取引の監査ログチャンネルを設定する\n"
          +"\n"
          +"!maximum-balance <cash | bank> <金額>\n"
          +"手持ちの現金または銀行の最大残高を設定する\n"
          +"\n"
          +"!add-money [cash | bank] <メンバー> <金額>\n"
          +"メンバーにお金を付与する\n"
          +"\n"
          +"!add-money-role [cash | bank] <ロール> <金額>\n"
          +"ロール全員にお金を付与する\n"
          +"\n"
          +"!remove-money [cash | bank] <メンバー> <金額>\n"
          +"メンバーからお金を除去する\n"
          +"\n"
          +"!remove-money-role [cash | bank] <ロール> <金額>\n"
          +"ロール全員からお金を除去する\n"
          +"\n"
          +"\n"
          +"ーー 一般プレイヤー ーー\n"
          +"\n"
          +"!economy-stats:\n"
          +"全体経済の統計を表示\n"
          +"\n"
          +"!deposit <金額 | all>\n"
          +"銀行に指定した金額預ける\n"
          +"\n"
          +"!withdraw <金額 | all>\n"
          +"指定した金額銀行から引き出す+"
          +"\n"
          +"!give-money <メンバー> <金額 | all>\n"
          +"指定したメンバーに指定した金額渡す\n"
          +"\n"
          +"!money [メンバー]\n"
          +"指定したメンバーの所持金を表示\n"
          +"\n"
          +"!leaderboard [ページ] [-cash | bank | -total]\n"
          +"統計ランキングを見る\n"
          +"\n"
          +"ーーーーーーーーーーーーーーーーー\n"
          +"\n"
          +"\n"
          +"ーーーーーーー 所得 ーーーーーーー\n"
          +"\n"
          +"\n"
          +"ーー 管理者 ーー+\n"
          +"\n"
          +"\n"
          +"ーー 一般プレイヤー ーー\n"
          +"\n"
          +"!work\n"
          +"お題もらいそれに答えることでハートを少しだけ貰える\n"
          +"\n"
          +"!rob <ユーザー>\n"
          +"ユーザーの手持ちからお金を盗む　対象の総合金額が自分より大きいほど成功率は高くなるが　失敗すると大金を失う\n"+
          +"\n"
          +"ーーーーーーーーーーーーーーーーー\n"
          +"\n"
          +"\n"
        );
      case "UnbelievaBoat":
      case "unbelievaboat":
      case "ub":
      case "UB":
        return message.channel.send(
          "ーーーーーーー経済ーーーーーーー\n"
          +"!economy-stats:\n"
          +"全体経済の統計を表示\n"
          +"\n"
          +"!deposit <金額 | all>\n"
          +"銀行に指定した金額預ける\n"
          +"\n"
          +"!withdraw <金額 | all>\n"
          +"指定した金額銀行から引き出す\n"
          +"\n"
          +"!give-money <メンバー> <金額 | all>\n"
          +"指定したメンバーに指定した金額渡す\n"
          +"\n"
          +"!money [メンバー]\n"
          +"指定したメンバーの所持金を表示\n"
          +"\n"
          +"!leaderboard [ページ] [-cash | bank | -total]\n"
          +"統計ランキングを見る\n"
          +"\n"
          +"ーーーーーーーーーーーーーーーーー"
        );
      case "Groovy":
      case "groovy":
      case "gy":
      case "GY":
        return message.channel.send(
          +"-play <リンク | 探したい曲名>\n"
          +"指定した曲やプレイリストを再生できる\n"
          +"省略:p,q,queue\n"
          +"\n"
          +"-play file\n"
          +"メッセージに添付されたファイルを再生する\n"
          +"省略:pf\n"
          +"\n"
          +"-queue\n"
          +"追加されているリクエストをみる\n"
          +"省略:q\n"
          +"\n"
          +"-next\n"
          +"次の曲にスキップする\n"
          +"省略:n,skip\n"
          +"\n"
          +"-back\n"
          +"前の曲に戻る\n"
          +"省略:b,previous,prev\n"
          +"\n"
          +"-clear\n"
          +"リクエストされている曲をすべて削除する\n"
          +"省略:無し\n"
          +"\n"
          +"-jump <曲の位置 | 曲のタイトル>\n"
          +"指定したリクエストにジャンプする\n"
          +"省略:j,goto\n"
          +"\n"
          +"-loop\n"
          +"1回やるとリクエストされた曲全体でループする　２回やると今再生されている曲をループする　３回やるとループ解除\n"
          +"省略:l\n"
          +"\n"
          +"-lylics [曲名]\n"
          +"再生中の曲の歌詞を出す（精度は期待できない）\n"
          +"省略:ly\n"
          +"\n"
          +"-pause\n"
          +"再生を一時停止する\n"
          +"省略:無し\n"
          +"\n"
          +"-resume\n"
          +"一時停止を解除\n"
          +"省略:unpause\n"
          +"\n"
          +"-remove\n"
          +"指定された曲をリクエストから削除する\n"
          +"省略:r,rm,delete,del\n"
          +"\n"
          +"-remove range <start>, <end>\n"
          +"指定された範囲のリクエストを消す\n"
          +"省略:rr\n"
          +"\n"
          +"-disconnect\n"
          +"botをボイスチャンネルから離脱させる\n"
          +"省略:dc,leave,reset\n"
          +"\n"
          +"-shuffle\n"
          +"リクエストされた曲をシャッフルする\n"
          +"省略:shuff,shuf,randomize,randomise\n"
          +"\n"
          +"-song [曲名 | 曲の位置]\n"
          +"リクエスト内の指定した曲の情報を表示する\n"
          +"省略:nowplaying,np\n"
          +"\n"
          +"-fast forward [秒数]\n"
          +"指定した秒数だけ早送りする\n"
          +"省略:ff,fwd\n"
          +"\n"
          +"-rewind [秒数]\n"
          +"指定した秒数だけ巻き戻す\n"
          +"省略:rw\n"
          +"\n"
          +"-search <曲名>\n"
          +"曲名で探したあと　ナンバーで指定して曲を追加できる\n"
          +"省略:s\n"
          +"\n"
          +"-seek <曲のポジション>\n"
          +"今流れている曲の位置を指定した位置に変更する\n"
          +"省略:無し\n"
          +"\n"
          +"-stop\n"
          +"再生中のリクエスト曲を停止させる+\n"
          +"省略:無し\n"
          +"\n"
          +"-move <曲名>, <新しい位置>\n"
          +"指定した曲の位置を変更する\n"
          +"省略:m\n"
          +"\n"
          +"-prefix\n"
          +"botの接頭語を確認する\n"
          +"省略:無し\n"
          +"\n"
          +"-prefix <新しい接頭語>\n"
          +"botの接頭語を変更する"
          +"省略:無し\n"
          +"\n"
          +"-announce\n"
          +"「再生中」のアナウンスメッセージの設定を切り替える\n"
          +"省略:無し\n"
          +"\n"
          +"-perms\n"
          +"使用可能な全てのロールを表示する\n"
          +"省略:無し\n"
          +"\n"
          +"-perms <ロール | ユーザー>\n"
          +"指定した対象の設定がどうなっているかを確認できる\n"
          +"省略:無し\n"
          +"\n"
          +"-perms <deny | allow | clear> <ロール | ユーザー>, <パーミッション>\n"
          +"ロールまたはユーザーの権限を変更する allを使用することで全ての権限を選択できる\n"
          +"省略:無し\n"
        );
      case "Rythm":
      case "rythm":
        // まだ書いてない
    }
  }
});

client.login(process.env.BOT_TOKEN);
