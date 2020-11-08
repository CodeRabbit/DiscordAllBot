const Pet = require('./Pet.js');
class Sora extends Pet{
  constructor(message){
    super(message);
    this.message = message;
  }
  // にゃんコマンドの説明送信
  help(){
    this.message.channel.send(
      "にゃん　にゃん :カジノで遊べるコマンド一覧を教えてくれる\n"
      +"にゃん　にゃー :サーバーに入っている人数（bot込）を教えてくれる\n"
      +"にゃん　ぱす  :ランクの説明\n"
      +"にゃん　ぱすー :ランクの昇格基準の表示"
    );
  }
  // casinoコマンドの説明送信
  casino(){
    this.message.channel.send(
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
  }
  // サーバー内ランクの説明送信
  rankInfo(){
    this.message.channel.send(
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
  }
  // ランクの昇格条件を送信
  rankUpCondition(){
    this.message.channel.send(
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
  }

  groovyInfo(){
    const prefix = '-';
    const command_lists = ['play', 'play file', 'queue', 'next', 'back'
                    , 'clear', 'jump', 'loop', 'lylics', 'pause'
                    , 'resume', 'remove' ,'remove range', 'disconnect', 'shuffle'
                    , 'song', 'fast forward', 'rewind', 'search', 'seek'
                    , 'stop', 'move', 'prefix', 'prefix', 'announce'
                    , 'perms', 'perms', 'perms'
                  ];
    const argument_lists = ['<リンク | 探したい曲名>', '', '', '', ''
                    , '', '<曲の位置 | 曲のタイトル>', '', '[曲名]', ''
                    , '', '', '<start>, <end>', '', ''
                    , '[曲名 | 曲の位置]', '[秒数]', '[秒数]', '<曲名>', '<曲のポジション>'
                    , '', '<曲名>, <新しい位置>', '', '<新しい接頭語>', ''
                    , '', '<ロール | ユーザー>', '<deny | allow | clear> <ロール | ユーザー>, <パーミッション>'
                  ];
    const description_lists = ['指定した曲やプレイリストを再生できる'
                        ,'メッセージに添付されたファイルを再生する'
                        ,'追加されているリクエストをみる'
                        ,'次の曲にスキップする'
                        ,'前の曲に戻る'
                        ,'リクエストされている曲をすべて削除する'
                        ,'指定したリクエストにジャンプする'
                        ,'1回やるとリクエストされた曲全体でループする　２回やると今再生されている曲をループする　３回やるとループ解除'
                        ,'再生中の曲の歌詞を出す（精度は期待できない）'
                        ,'再生を一時停止する'
                        ,'一時停止を解除'
                        ,'指定された曲をリクエストから削除する'
                        ,'指定された範囲のリクエストを消す'
                        ,'botをボイスチャンネルから離脱させる'
                        ,'リクエストされた曲をシャッフルする'
                        ,'リクエスト内の指定した曲の情報を表示する'
                        ,'指定した秒数だけ早送りする'
                        ,'指定した秒数だけ巻き戻す'
                        ,'曲名で探したあと　ナンバーで指定して曲を追加できる'
                        ,'今流れている曲の位置を指定した位置に変更する'
                        ,'再生中のリクエスト曲を停止させる'
                        ,'指定した曲の位置を変更する'
                        ,'botの接頭語を確認する'
                        ,'botの接頭語を変更する'
                        ,'「再生中」のアナウンスメッセージの設定を切り替える'
                        ,'使用可能な全てのロールを表示する'
                        ,'指定した対象の設定がどうなっているかを確認できる'
                        ,'ロールまたはユーザーの権限を変更する allを使用することで全ての権限を選択できる'
                      ];
    const alias_lists = ['p,q,queue', 'pf', 'q', 'n,skip', 'b,previous,prev'
                  , '無し', 'j,goto', 'l', 'ly', '無し'
                  , 'unpause', 'r,rm,delete,del', 'rr', 'dc,leave,reset', 'shuff,shuf,randomize,randomise'
                  , 'nowplaying,np', 'ff,fwd', 'rw', 's', '無し'
                  , '無し', 'm', '無し', '無し', '無し'
                  , '無し', '無し', '無し'
                ];
    let rule_str = '';
    for (let i=0; i < command_lists.length; i++) {
      rule_str += `${prefix}${command_lists[i]} ${argument_lists[i]}\n${description_lists[i]}\n省略:${alias_lists[i]}\n\n`
    }
    this.message.channel.send(rule_str);
  }

  feelingReply(){
    const feeling_keyword = ['そらちゃんの気持ち', 'そらちゃんのきもち', '猫の気持ち',
                             '猫のきもち', 'ねこのきもち', 'ねこの気持ち'
                            ];
    const feeling_message = ['みんな大好き〜！', 'なでて〜', 'あそんで〜！'];
    return this.sendRandomMessage(feeling_keyword, feeling_message);
  }

  caressReply(){
    const feeling_keyword = ['なでなで', 'ナデナデ', 'ﾅﾃﾞﾅﾃﾞ',
                             'よしよし', 'ヨシヨシ', 'ﾖｼﾖｼ'
                            ];
    const feeling_message = ['にゃ〜:heart:', 'すき〜:heart:', 'ｺﾞﾛｺﾞﾛ〜'];
    return this.sendRandomMessage(feeling_keyword, feeling_message);
  }

  callMe(){
    const call_keyword = ['そらちゃん', 'そーらちゃん', 'そらちゃーん',
                          'そ〜らちゃん', 'そらちゃ〜ん'
                         ];
    const call_message = ['にゃーん', 'にゃ〜ん', 'ﾐｬｰ!', 'にゃ〜', 'にゃー！'];
    return this.sendArrayMessage(call_keyword, call_message);
  }

  greeting(){
    const greeting_keyword = ['おやすみ','おやすみなさい', 'おやすみなさーい',
                              'おはよー', 'おはよう', 'おっはー', 'こんにちは',
                              'こんばんは','こんばんわ', 'ただいま', 'ちゃっす',
                              'またね', 'ばいばい', 'さようなら', 'さらば',
                              '行ってきます', 'いってきます'
                            ];
    const greeting_message = ['にゃん', 'にゃーん', 'にゃ〜？',
                              'にゃー！', 'み〜！', 'にゃ〜〜'
                            ];
    this.sendArrayMessage(greeting_keyword, greeting_message);
  }

  dice() {
    try {
      let find_index = this.message.content.indexOf("d",1);
      // ダイスの個数
      let dice_num = this.message.content.slice(0,find_index);
      // 1ダイスの最大値
      let dice_max = this.message.content.slice(find_index+1);

      // 許容する1度に振れるダイスの最大数
      let onetime_max = 50;

      let dice_sum = 0;

      if(onetime_max < dice_num) {
        return this.message.channel.send(`一度に振れるダイスは${onetime_max}個までだにゃ。増やしたい場合はkoochanに連絡してほしいにゃ`);
      }

      for(let i=0; i < dice_num; i++) {
        dice_sum += Math.floor(Math.random() * Math.floor(dice_max))+1;
      }
      this.message.channel.send(dice_sum);

    } catch(e) {
      console.log(e);
    }
  }
}
module.exports = Sora
