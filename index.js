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

  // prefix付きのコマンドのuserからの入力期待値は　${prefix}${command} ${...argument}
  // 全角を半角に変換して以降の処理を半角で統一する
  const user_message = message.content.replace(/　/g, ' ');
  // HACK 本当はslice(0,prefix.length)とかにして可変にしたい
  const prefix = user_message.slice(0,1);

  const [command, ...argument] = user_message.slice(1).split(" ");

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
        default:
          return message.channel.send("*status\n*outputImg\n*imageChange [imgUrl]\n*nameChange [name]");
        break;
      }
    break;
  }

  if(command === "にゃん"){
    let pre = "";
    let n1 = "\n";
    let n2 = "\n\n";
    let n3 = "\n\n\n";
    if(command === "help"){
     return message.channel.send(
       "にゃん　にゃん :カジノで遊べるコマンド一覧を教えてくれる\n"+
       "にゃん　にゃー :サーバーに入っている人数（bot込）を教えてくれる\n"+
       "にゃん　ぱす  :ランクの説明\n"+
       "にゃん　ぱすー :ランクの昇格基準の表示\n"+
       "にゃん UnbelievaBoat-all: UnbelievaBoatのコマンドを全て表示\n"+
       "にゃん un-a:上のコマンドの省略形\n"+
       "にゃん UnbelievaBoat:ユーザーが使えるコマンドだけを表示\n"+
       "にゃん groovy:groovy(音楽bot)のコマンドを表示\n"+
       "にゃん gy:上のコマンドの省略系\n"
     )
    }
    if(argument[0] === "にゃん"){
      pre = "!";
      message.channel.send(
      "!bj 賭け金            　　　         （ブラックジャック）\n"+
      "!roulette 賭け金 　賭ける場所  (ルーレット)\n"+
      "!rouletteinfo                        (ルーレットの詳細なルールを表示)\n"+
      "!slot 賭け金          　　　（スロットマシン）\n"+
      "!rr 賭け金            　　　　（ロシアンルーレット）\n"+
      "!cf 賭け金            　　　（クックファイト）\n"+
      "!buy c               　　　　（チキンを買う）\n"+
      "!lb                 　　　　　 （リーダーボード）\n"+
      "!lb -cash            　　　（手持ちのリーダーボード）\n"+
      "!lb -bank            　　　（銀行のリーダーボード）\n"+
      "!lb -total　　　　　　　（トータルのリーダーボード）\n"+
      "!dep 預ける金額　　　　（銀行にお金を預ける）\n"+
      "!with 引き出す金額　　　（銀行からお金を引き出す）\n"+
      "!bal                　　　　　　　 （所持金確認）\n")
        .then(message => message.react('🐈'));
    }
    else if(argument[0] === "にゃー"){
      message.channel.send("このサーバーのメンバーは"+message.guild.members.size+"人だにゃ")
        .then(message => message.react('🐈'))
    }
    else if(argument[0] === "ぱす"){
      message.channel.send(
        "このサーバーでは\n"+
        ":bookmark:白（ウルトラヴァイオレット）\n"+
        ":fleur_de_lis:紫（ヴァイオレット）\n"+
        ":diamond_shape_with_a_dot_inside:藍（インディゴ）\n"+
        ":blue_heart:青（ブルー）\n"+
        ":green_heart:緑（グリーン）\n"+
        ":yellow_heart:黄（イエロー）\n"+
        ":orange_heart:橙（オレンジ）\n"+
        ":heart:赤（レッド）\n"+
        ":black_heart:黒（インフラレッド）\n"+
        "のランクがあって\n"+
        "上に行けば行くほど強い権限をもらえるし　いろいろできることが増える");
    }
    else if(argument[0] === "ぱすー"){
      message.channel.send(
        "基本はレッドから始まりますが"+n1+
        "荒らし行為や人の迷惑になる行為を行った場合"+n1+
        "インフラレッドに降格され、全ての権限を奪われ、チャンネルへのアクセス権限を奪われます"+n1+
        n1+
        "昇格条件"+n1+
        ":bookmark:白（ウルトラヴァイオレット）:"+n1+"・基本的になることはできない。"+n2+
        ":fleur_de_lis:紫（ヴァイオレット）:"+n1+"・コマンドを使いこなせること"+n1+"・ユーザーのサポートができること"+n1+"・トラブルが発生したときに対応できること"+n2+
        ":diamond_shape_with_a_dot_inside:藍（インディゴ）:"+n1+"・レッドを２人育成し、グリーンまで成長させる"+n2+
        ":blue_heart:青（ブルー）："+n1+"・サーバー内職業を取得する"+n1+"（デザイナー、プログラマー、コマンダー）"+n1+" or "+n1+"・偉業達成(招待人数10人以上)"+n2+
        ":green_heart:緑（グリーン）："+n1+"・悪名以外の二つ名をもらうこと"+n1+"・所持ハートが5000以上"+n2+
        ":yellow_heart:黄（イエロー）："+n1+"・簡単な基本コマンドを覚えて使えるようになる"+n1+"（Groovyのコマンド、UnbelievaBoatのコマンドの一部）"+n2+
        ":orange_heart:橙（オレンジ）："+n1+"・周りの人と交流し仲良くできること"+n2+
        ":heart:赤（レッド）："+n1+"・#自己紹介 チャンネルで自己紹介を行う"+n2
      );
    }
    else if(argument[0] === "UnbelievaBoat-all" || argument[0] === "unbelievaboat-all" || argument[0] === "ub-a"){
      pre = "!";
      message.channel.send(
        "ーーーーーーー 経済 ーーーーーーー"+n3+


        "ーー 管理者 ーー"+n2+

        pre+"set-currency <シンボル>"+n1+
        "通貨シンボルを変更する"+n2+

        pre+"set-start-balance <金額>"+n1+
        "開始銀行残高を設定する"+n2+

        pre+"money-audit-log <enable | disable> [チャンネル]"+n1+
        "金銭取引の監査ログチャンネルを設定する"+n2+

        pre+"maximum-balance <cash | bank> <金額>"+n1+
        "手持ちの現金または銀行の最大残高を設定する"+n2+

        pre+"add-money [cash | bank] <メンバー> <金額>"+n1+
        "メンバーにお金を付与する"+n2+

        pre+"add-money-role [cash | bank] <ロール> <金額>"+n1+
        "ロール全員にお金を付与する"+n2+

        pre+"remove-money [cash | bank] <メンバー> <金額>"+n1+
        "メンバーからお金を除去する"+n2+

        pre+"remove-money-role [cash | bank] <ロール> <金額>"+n1+
        "ロール全員からお金を除去する"+n3+


        "ーー 一般プレイヤー ーー"+n2+

        pre+"economy-stats:"+n1+
        "全体経済の統計を表示"+n2+

        pre+"deposit <金額 | all>"+n1+
        "銀行に指定した金額預ける"+n2+

        pre+"withdraw <金額 | all>"+n1+
        "指定した金額銀行から引き出す"+n2+

        pre+"give-money <メンバー> <金額 | all>"+n1+
        "指定したメンバーに指定した金額渡す"+n2+

        pre+"money [メンバー]"+n1+
        "指定したメンバーの所持金を表示"+n2+

        pre+"leaderboard [ページ] [-cash | bank | -total]"+n1+
        "統計ランキングを見る"+n2+

        "ーーーーーーーーーーーーーーーーー"+n3+


        "ーーーーーーー 所得 ーーーーーーー"+n3+


        "ーー 管理者 ーー"+n2+

        pre+""+n1+



        "ーー 一般プレイヤー ーー"+n2+

        pre+"work"+n1+
        "お題もらいそれに答えることでハートを少しだけ貰える"+n2+
        pre+"slut"+n1+
        "旧workコマンド 廃止予定だが一応使える、ただし貰えるハートは１だけ"+n2+
        pre+"crime"+n1+
        "リスクはあるが成功すると一定数　"+n2+
        pre+"rob <ユーザー>"+n1+
        "ユーザーの手持ちからお金を盗む　対象の総合金額が自分より大きいほど成功率は高くなるが　失敗すると大金を失う"+n2+



        "ーーーーーーーーーーーーーーーーー"+n3

      );
    }
    else if(argument[0] === "UnbelievaBoat" || argument[0] === "unbelievaboat"　|| argument[0] === "ub"){
      message.channel.send(
        "ーーーーーーー経済ーーーーーーー"+n1+
        pre+"economy-stats:"+n1+
        "全体経済の統計を表示"+n2+
        pre+"deposit <金額 | all>"+n1+
        "銀行に指定した金額預ける"+n2+
        pre+"withdraw <金額 | all>"+n1+
        "指定した金額銀行から引き出す"+n2+
        pre+"give-money <メンバー> <金額 | all>"+n1+
        "指定したメンバーに指定した金額渡す"+n2+
        pre+"money [メンバー]"+n1+
        "指定したメンバーの所持金を表示"+n2+
        pre+"leaderboard [ページ] [-cash | bank | -total]"+n1+
        "統計ランキングを見る"+n2+

        "ーーーーーーーーーーーーーーーーー"
      );
    }
    else if(argument[0] === "Groovy" || argument[0] === "groovy" || argument[0] === "gy"){
      pre = "-";
      let aliase = "省略:";
      message.channel.send(
        pre+"play <リンク | 探したい曲名>"+n1+
        "指定した曲やプレイリストを再生できる"+n1+
        aliase+"p,q,queue"+n2+

        pre+"play file"+n1+
        "メッセージに添付されたファイルを再生する"+n1+
        aliase+"pf"+n2+

        pre+"queue"+n1+
        "追加されているリクエストをみる"+n1+
        aliase+"q"+n2+

        pre+"next"+n1+
        "次の曲にスキップする"+n1+
        aliase+"n,skip"+n2+

        pre+"back"+n1+
        "前の曲に戻る"+n1+
        aliase+"b,previous,prev"+n2+

        pre+"clear"+n1+
        "リクエストされている曲をすべて削除する"+n1+
        aliase+"無し"+n2+

        pre+"jump <曲の位置 | 曲のタイトル>"+n1+
        "指定したリクエストにジャンプする"+n1+
        aliase+"j,goto"+n2+

        pre+"loop"+n1+
        "1回やるとリクエストされた曲全体でループする　２回やると今再生されている曲をループする　３回やるとループ解除"+n1+
        aliase+"l"+n2+

        pre+"lylics [曲名]"+n1+
        "再生中の曲の歌詞を出す（精度は期待できない）"+n1+
        aliase+"ly"+n2+

        pre+"pause"+n1+
        "再生を一時停止する"+n1+
        aliase+"無し"+n2+

        pre+"resume"+n1+
        "一時停止を解除"+n1+
        aliase+"unpause"+n2+

        pre+"remove"+n1+
        "指定された曲をリクエストから削除する"+n1+
        aliase+"r,rm,delete,del"+n2+

        pre+"remove range <start>, <end>"+n1+
        "指定された範囲のリクエストを消す"+n1+
        aliase+"rr"+n2+

        pre+"disconnect"+n1+
        "botをボイスチャンネルから離脱させる"+n1+
        aliase+"dc,leave,reset"+n2+

        pre+"shuffle"+n1+
        "リクエストされた曲をシャッフルする"+n1+
        aliase+"shuff,shuf,randomize,randomise"+n2+

        pre+"song [曲名 | 曲の位置]"+n1+
        "リクエスト内の指定した曲の情報を表示する"+n1+
        aliase+"nowplaying,np"+n2+

        pre+"fast forward [秒数]"+n1+
        "指定した秒数だけ早送りする"+n1+
        aliase+"ff,fwd"+n2+

        pre+"rewind [秒数]"+n1+
        "指定した秒数だけ巻き戻す"+n1+
        aliase+"rw"+n2+

        pre+"search <曲名>"+n1+
        "曲名で探したあと　ナンバーで指定して曲を追加できる"+n1+
        aliase+"s"+n2+

        pre+"seek <曲のポジション>"+n1+
        "今流れている曲の位置を指定した位置に変更する"+n1+
        aliase+"無し"+n2+

        pre+"stop"+n1+
        "再生中のリクエスト曲を停止させる+"+n1+
        aliase+"無し"+n2+

        pre+"move <曲名>, <新しい位置>"+n1+
        "指定した曲の位置を変更する"+n1+
        aliase+"m"+n2+

        pre+"prefix"+n1+
        "botの接頭語を確認する"+n1+
        aliase+"無し"+n2+

        pre+"prefix <新しい接頭語>"+n1+
        "botの接頭語を変更する"+
        aliase+"無し"+n2+

        pre+"announce"+n1+
        "「再生中」のアナウンスメッセージの設定を切り替える"+n1+
        aliase+"無し"+n2+

        pre+"perms"+n1+
        "使用可能な全てのロールを表示する"+n1+
        aliase+"無し"+n2+

        pre+"perms <ロール | ユーザー>"+n1+
        "指定した対象の設定がどうなっているかを確認できる"+n1+
        aliase+"無し"+n2+

        pre+"perms <deny | allow | clear> <ロール | ユーザー>, <パーミッション>"+n1+
        "ロールまたはユーザーの権限を変更する allを使用することで全ての権限を選択できる"+n1+
        aliase+"無し"+n2
      );
    }
    else if(argument[0] === "Rythm" || argument[0] === "rythm"){

    }
  }
});

client.login(process.env.BOT_TOKEN);
