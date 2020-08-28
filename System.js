  class System {
    constructor(message, client){
      this.message = message;
      this.client = client;
    }
    // コマンドの使い方送信
    help(){
      this.message.channel.send(
        '*status\n'
        +'*outputImage\n'
        +'*imageChange [imgUrl]\n'
        +'*nameChange [name]\n'
        +'*UnbelievaBoat-all: UnbelievaBoatのコマンドを全て表示\n'
        +'*ub-a:上のコマンドの省略形\n'
        +'*UnbelievaBoat:ユーザーが使えるコマンドだけを表示\n'
        +'*groovy:groovy(音楽bot)のコマンドを表示\n'
        +'*gy:上のコマンドの省略系\n'
        +'*help'
      );
    }
    // デバイスのオンライン状態を調べる
    statusCheck(){
      const message = this.message;
      const userStatus = message.author.presence.clientStatus;

      if (!userStatus) {
        return message.channel.send('どのデバイスからもアクセスされていません。')
      }

      return message.channel.send(
        [
          'desktop: ' + (userStatus.desktop || 'offline'),
          'mobile: ' + (userStatus.mobile || 'offline'),
          'web: ' + (userStatus.web || 'offline'),
        ].join('\n')
      );
    }
    // アバター画像変更
    imgChange(img_url) {
      this.client.user.setAvatar(img_url);
      this.message.channel.send('image changing now...');
    }
    // アバター画像送信
    outputImg() {
      this.message.channel.send(this.client.user.avatarURL());
    }
    // ユーザーネーム変更
    // 短時間に変更しすぎるとブロックされるのでニックネームの変更にしたい
    // (ニックネーム変更メソッドに見えたけどこれユーザーネームの変更っぽい Discordこのやろう)
    nameChange(name) {
      this.message.guild.members.fetch(this.client.user.id).setNickname(name);
      // this.client.user.setUsername(name);
      this.message.channel.send('name changing now...');
    }
    // groovyの使い方送信
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
      for (let i=0; i < command.length; i++) {
        rule_str += `${prefix}${command_lists[i]} ${argument_lists[i]}\n${description_lists[i]}\n省略:${alias_lists[i]}`
      }
      this.message.channel.send(rule_str);
    }
  }
  module.exports = System
