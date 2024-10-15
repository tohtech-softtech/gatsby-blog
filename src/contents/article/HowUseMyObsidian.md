---
title: 自分のObsidianについて
date: 2024-10-15
created: 2024-10-15T16:33
modified: 2024-10-15T19:56
tags:
  - Log/Work
aliases: 
link: 
source: 
status: 🚩Stable
kind: 💻
moc: []
cssclasses:
---
# 自分のObsidianについて
皆さん、こんにちわ。
ソフトウェア技術研究会2年の熊谷優斗(HN Reruarte_514)と申します。
ちょっと、ソフ研のHPを賑わせるために飽きるまでいろいろ記事を書いていこうと思います。

最初はソフ研でもにわかに流行っているObsidianというアプリの自分の使用方法とか使用しているPluginについて紹介していこうと思います。ただし、今回は、未経験の人に宣伝するような内容ではなく、ある程度経験がある人向きになってしまいます。メモ関連に興味があるなら未経験でもいけます。

## デイリーノートについて
自分のデイリーノートは後述しますが、Templaterプラグインを使用して魔改造しています。
コードでいうと以下のような感じ
```templater
---
title: 2024-10-15
date: 2024-10-15
created: 2024-10-15
modified: 2024-10-15T15:11
tags:
  - Diary
status: 🚩Stable
cssclasses:
  - daily-notes
---

[[<% tp.date.now("YYYY-MM-DD", -7, tp.file.title, "YYYY-MM-DD") %>]] || [[<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>]] | [[<% tp.date.now("YYYY-MM-DD", 1, tp.file.title, "YYYY-MM-DD") %>]] || [[<% tp.date.now("YYYY-MM-DD", 7, tp.file.title, "YYYY-MM-DD") %>]]

カレンダー : [[Calendar]]
<%* const sleepingTime = await tp.system.prompt('睡眠時間を入力')%>
---
## メモ 
> 基本的には何でも書いてもいい、思考ログ、作業ログ、URLなどなど



---
## 日記
> 日記とか書いてあるけどまあ何でもよい
  #　Diary/睡眠時間:<%sleepingTime%>



---
## [[Todo-List]] 
#　Diary/todo-list 

<%*
const tToday = new Date(tp.file.title);
const tWeekNum = tToday.getDay();
const taskList = [
"0_SundayTasksTemplate",
"1_MondayTasksTemplate",
"2_TuesdayTasksTemplate",
"3_WednesdayTasksTemplate",
"4_ThusdayTasksTemplate",
"5_FridayTasksTemplate",
"6_SaturdayTasksTemplate",
];
%><%tp.file.include("[[" + taskList[tWeekNum] + "]]")%>

---
## 今日の計画
<%*
const today = new Date(tp.file.title);
const weekNum = today.getDay();
const list = [
"0_SundayUnivSubjectTemplate",
"1_MondayUnivSubjectTemplate",
"2_TuesdayUnivSubjectTemplate",
"3_WednesdayUnivSubjectTemplate",
"4_ThusdayUnivSubjectTemplate",
"5_FridayUnivSubjectTemplate",
"6_SaturdayUnivSubjectTemplate",
];
%><%tp.file.include("[[" + list[weekNum] + "]]")%>

---
## 仕訳
<%* const siwakeTag = "#仕訳/" + date.replaceAll("-", "/") %><%siwakeTag%>
### 収入

### 支出

```
このコードだけ、タグは空白を入れて反応しないようにしています。

画像にするとこんな感じ
![../../images/自分のObsidianについて-デイリーノート例.png|自分のObsidianについて-デイリーノート例.png](../../images/%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E3%83%87%E3%82%A4%E3%83%AA%E3%83%BC%E3%83%8E%E3%83%BC%E3%83%88%E4%BE%8B.png%7C%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E3%83%87%E3%82%A4%E3%83%AA%E3%83%BC%E3%83%8E%E3%83%BC%E3%83%88%E4%BE%8B.png)

プロパティはまあ最小限って感じです。
被っているものがあるのは見逃してください；；
その下には、いつみたか、どこかのWebサイトにあるテンプレートを使用して前日や明日のノートを表示するようにしています。エクスプローラーやカレンダーなしで次の日に行きたいときに便利。


メモセクションには、何でも書いています。
画像みたいにプラグインの使用感を書いたり、ここからノートを抽出したりします。


日記は日記です。
最初期は三日坊主でしたが、今では半年ぐらい続いてていい感じです。
それとTemplaterで睡眠時間もとれるようにしてみました。
これをTrackerプラグインで表示してみると...
![自分のObsidianについて-睡眠時間-Tracker.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E7%9D%A1%E7%9C%A0%E6%99%82%E9%96%93-Tracker.png)
人として終わっていることがわかります。

グラフビューで見ると、デイリーノートの大部分がリンクなしで触っていないんだなーってことがわかります。
![自分のObsidianについて-デイリーノートのリンク.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E3%83%87%E3%82%A4%E3%83%AA%E3%83%BC%E3%83%8E%E3%83%BC%E3%83%88%E3%81%AE%E3%83%AA%E3%83%B3%E3%82%AF.png)


todoListには授業の課題を載せたり、タスクを書いています。曜日ごとに課題が出るものがわかっているものはTemplaterを使用して曜日タスクを自動的に乗せるようにしています。
自分は日々のルーチン化されたタスクは絶対に載せないようにしています。これは自分が歯を磨いたとかでObsidianを開くのが面倒だからです。それとそういうタスクに縛られたくないってのもあります。
ここに載せたタスクはHomePageで一覧表示できるようにしています。
今回は書いていませんが、明確に期限があってかつ重要度が高いものはReminderプラグインでリマインドするようにしています。
![自分のObsidianについて-Task-一覧.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-Task-%E4%B8%80%E8%A6%A7.png)

今日の計画にはバイトの予定とかイベントをFullCalendarプラグインで入れられるようにしています。
これもTemplaterで曜日指定のバイトとかを入れています。


仕分けの部分には収入や支出を書くようにしています。
そうして書いたものを他のノートで集計して家計簿みたいにしています。ちょっと実際の貯金が載るので画像は載せられませんが；；


デイリーノートとしてはこんな感じです。
かなり最初期から進化に進化を重ねて今のような形になっています。
特に自分は意識高い感じではないのでメモには何でも書いていいということを特に意識しています。大体のQiitaとかnoteとかzennの意識高い皆さんのデイリーノート例を見るとこのメモセクションをさらに分割している人が結構いてすごいなーって思います。

## 大学の講義ノート
自分は大学のノートもObsidianで取っています。
正直ノート持ち込みの教科が多かったりするので、すべてを書くことはできないでいるのが最近の悩みです。
![自分のObsidianについて-大学のノート-ディレクトリ.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E5%A4%A7%E5%AD%A6%E3%81%AE%E3%83%8E%E3%83%BC%E3%83%88-%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA.png)
*exは実験で使用するgnuplotのファイルが入っています。*

これもテンプレートを載せるとこんな感じになります。
```templater
---
title: <%* const numOfLectureInt = await tp.system.prompt('講義が第何回目かを入力')%><%*
const beforeLectureInt = parseInt(numOfLectureInt) - 1;
const afterLectureInt = parseInt(numOfLectureInt) + 1;

let numOfLecture = numOfLectureInt.toString();
let beforeLecture = beforeLectureInt.toString();
let afterLecture = afterLectureInt.toString();

if(numOfLectureInt < 10)　numOfLecture = '0' + numOfLecture;
if(beforeLectureInt < 10)　beforeLecture = '0' + beforeLecture;
if(afterLectureInt < 10)　afterLecture = '0' + afterLecture;

const subs = ["ソフトウェア設計", "情報通信工学実験I", "電子回路I及び同演習", "電気回路II及び同演習", "電磁気学I", "統計学", "コンピュータ数値解析"];

%><%* const subject = await tp.system.suggester(subs, subs, false,"教科を選択してください")%><%numOfLecture%>-<%subject%>
date: <%* const date = tp.date.now("YYYY-MM-DD") %><%date%>
created: ""
modified: ""
tags:
  - Study
  - 大学の授業ノート/2年後期/<%subject%>
aliases: 
status: 🚩Stable
moc: 
  - "[[<%subject%>-MOC]]"
---
# <%numOfLecture%>-<%subject%>
[[<%beforeLecture%>-<%subject%>]] | [[<%afterLecture%>-<%subject%>]]
## レジュメ

![[<%numOfLecture%>-<%subject%>.pdf]]

## 授業内容
### 
<%*await tp.file.rename(numOfLecture + '-' + subject)%>
```

最初の長いコードはファイル名の最初に講義回数を入れてくれるTemplaterプラグインのコードです。
![自分のObsidianについて-大学の講義ノート-prefix.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E5%A4%A7%E5%AD%A6%E3%81%AE%E8%AC%9B%E7%BE%A9%E3%83%8E%E3%83%BC%E3%83%88-prefix.png)
これを毎回入れるのはめんどくさいので自動化しました。
あとはレジュメのリンクを作ったり、その講義へのMOCや前回講義、次回講義へのリンクを作ったりという感じです。

それと物理の授業は図解とかする場面が多いです。
その時はExcalidrawプラグインを使用して図を埋め込んでいます。式はTeXを使用しています。
![自分のObsidianについて-物理-図-excalidraw.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E7%89%A9%E7%90%86-%E5%9B%B3-excalidraw.png)
因みにTeXはquick latexというプラグインを使用すると爆速で分数とかギリシャ文字とか書けます。

## Wikiノート
皆さんも自分だけのWikiを作りたいと思いませんか
自分は、自分のすべてをこのObsidianでまとめたいと思っているのでプログラミングで学んだことは基本的にWikiにしてまとめるようにしています。
![自分のObsidianについて-プログラミング-ディレクトリ.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA.png)

ノートを見てみるとこんな感じ
![自分のObsidianについて-wikinote-プロパティ-例.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-wikinote-%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3-%E4%BE%8B.png)
`tag`には使用した言語とかデータベースをつけています。
`link`には使用した文献やリンクを載せています。
参考文献とかって大体最後に書くことが多いですが、自分の書き方だと、最後に何かあるのは気持ち悪いのでこの形になりました。

`source`には逆に内部リンクで使用した文献とか乗せてます。大体は書籍ノートのリンクです。
`status`にはノートの進行状況を載せています。
自分が使用しているのは以下。

| アイコン | 名称       | 概要                                                                 |
| ---- | -------- | ------------------------------------------------------------------ |
| 🆕   | Latest   | 新しく作成したノートにデフォルトでついているステータス                                        |
| 🕰️  | UnStable | 作って書いたけど、まだ加筆の余地があるもの                                              |
| 🚩   | Stable   | ほぼノートとして完成したもの                                                     |
| 🌟   | Star     | もう編集しなくてもいいもの<br>大体終了したプロジェクトのMOCノートについてます。                        |
| 🔒   | Lock     | 個人情報とか載ってるもの<br>自分以外の情報をまとめているときとかに使う                              |
| 🖊   | Writing  | 絶賛執筆中のもの                                                           |
| 🔄   | Evolving | 長い時間をかけて加筆していくと思われるもの<br>プロジェクトノートにつく<br>unStableとの違いは加筆が確定しているか否か |

こんな感じにしてHomeで書けてないノートを一覧で表示するようにしています。
![自分のObsidianについて-noteStutas-一覧表示例.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-noteStutas-%E4%B8%80%E8%A6%A7%E8%A1%A8%E7%A4%BA%E4%BE%8B.png)
Writingが多いと気が滅入ってしまいます。
ただこのおかげで途中まで書いたノートを見失うことがなくなりました。

`moc`にはその関連する項目のMOCノートをリンクさせています。
今のMOCはこんな感じになっています。
階層も分けて管理しています。ただ階数が深いものもあるのでそこが難点です。
![自分のObsidianについて-MOC-canvas.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-MOC-canvas.png)

## 使用しているテーマなど
テーマは`Ultra Lobster`というテーマをStyle Settingプラグインで改造して、使用しています。
```cardlink
url: https://github.com/7368697661/Ultra-Lobster
title: "GitHub - 7368697661/Ultra-Lobster: Ultra Lobster offers a visually pleasing and comfortable working experience, with an emphasis on bringing rounded UI elements, modern design trends, and soft design choices to Obsidian."
description: "Ultra Lobster offers a visually pleasing and comfortable working experience, with an emphasis on bringing rounded UI elements, modern design trends, and soft design choices to Obsidian. - 736869766..."
host: github.com
favicon: https://github.githubassets.com/favicons/favicon.svg
image: https://opengraph.githubassets.com/09b3e9ea6ffc153446b01930a35ce4ff0c806667fdbbfb8cd24d15da190bf66d/7368697661/Ultra-Lobster
```
ただ、このテーマにはバグがあって、マウスで選択した範囲が強調されないという問題があります。
これプルリク出したんですけど全然レビューしてくれないので使用する際には、自分からcssを直す必要があります。
```cardlink
url: https://github.com/7368697661/Ultra-Lobster/pull/41
title: "add \",\" in line 7039 by Rerurate514 · Pull Request #41 · 7368697661/Ultra-Lobster"
host: github.com
favicon: https://github.githubassets.com/favicons/favicon.svg
image: https://opengraph.githubassets.com/c98ad821448669a0119e841aaaf43981c6395d32d74a5bde083ca08eb0186616/7368697661/Ultra-Lobster/pull/41
```

ただそれを直すと一番いいテーマだと思っています。
結構リッチ目な感じ
![自分のObsidianについて-ultraLobster-画面例.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-ultraLobster-%E7%94%BB%E9%9D%A2%E4%BE%8B.png)

## 使用しているプラグイン
### Auto Card Link
このプラグインはURLをカード形式にして表示してくれるプラグインです。
これがあるとURLを含んだノートに彩を与えてくれます。
![自分のObsidianについて-AutoCardLink.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-AutoCardLink.png)

### Calender
言わずもがなの必須プラグイン。特にいうことはないです。

### Code Emitter
このプラグインはObsidian上でプログラムを実行できるようにするすごいやつです。大体の言語に対応しています。
![自分のObsidianについて-CodeEmitter.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-CodeEmitter.png)

### Custom Frames
このプラグインは左側のリボンメニューに各Webサイトへのリンクとブラウザ機能を提供してくれるものです。
自分はよく使用するAIやDeepLをここに入れています。
![自分のObsidianについて-CustomFrames.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-CustomFrames.png)

### DataLoom
このプラグインはエクセルのような専用のテーブルを使用できるようにしてくれるプラグインです。自分はこれで実験データを管理しています。
Excel使えって思いますでしょうが、私は実験ノートもObsidianにあるのでそこでデータも見れるようにしたいのです。最終的にCSVにして出力します。
![自分のObsidianについて-DataLoom.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-DataLoom.png)

### DataView
DataViewも言わずもがなですが、自分でどう使用しているかを書きます。
前述したタスク一覧や収支の計算などはこのプラグインを使用しています。

### Excalidraw
Excalidrawも言わずもがなですね。前述したとおり、図などを書いています。
レポートで使用する回路図もこれで描いています。
![20241007_02_infotech_dgdathk_circuit1_3.svg](20241007_02_infotech_dgdathk_circuit1_3.svg)

### floating toc
このプラグインはノート左側に目次を出してくれるプラグインです。
デフォルトのObsidianにも同じような機能があるのですが、そちらは貴重なペインを一つ使用するのでこれを使用しています。
![自分のObsidianについて-floatingToc.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-floatingToc.png)

### Full Calendar
前述したとおり、このプラグインでバイトの予定などを管理しています。
正直言うとあまり使いこなせてないです。。。

### HomePage
これはObsidianを起動した際に自動的に開くノートを設定するプラグインです。
自分はこのプラグインで開くノートからタスク一覧や執筆中のノート、MOCなどを開けるようにしています。
![自分のObsidianについて-HomePage.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-HomePage.png)

### Hover Editor
このプラグインは最初期からずっと使用しているため、もはやない状態がわからないです。。。
一応Hoverしたノートを編集できるようにするものという認識ですが。。。

### Iconize
このプラグインを使用するとエクスプローラーが華やかになります。
視認性も格段に向上するので必須級だと思っています。
![自分のObsidianについて-Iconize.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-Iconize.png)

### Image Toolkit
このプラグインは画像を拡大したり、コピーしたりできるものです。
このクリップボードにコピーする機能だけで使用しているまであります。
![自分のObsidianについて-ImageToolKit.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-ImageToolKit.png)

### Marp
Marpは正直、調べてもらった方が速いですが爆速でスライドを作成できるプラグインです。結構サークルのオリエンテーションとかで使用機会が多いです。
![自分のObsidianについて-marp.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-marp.png)
### Paste Image Rename
このプラグインは画像をクリップボードから張り付ける際に名前を変更するダイアログを出してくれる優れものです。
このおかげで画像関連の作業量がめちゃ減りました。
![自分のObsidianについて-PasteImageRename.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-PasteImageRename.png)

### PeerDraft
あまり知られていないプラグインだと思います。
Obsidianにはデフォルトでチームでのコラボレート機能がありませんが、このプラグインを使用するとほかの人と共同でノートを編集できるようになります。P2Pなのである程度は安心です。
因みにこのプラグインは相手側に編集できるページのURLを渡すのですが、このURLがブラウザで開くので相手がObsidianを持っていなくとも共同編集ができます。
![自分のObsidianについて-PeerDraft.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-PeerDraft.png)
このページから編集するとリアルタイムでObsidian側も変更されます。

### Quick Latax
このプラグインは入力がめんどくさいLaTeXを簡単に入力できるようにしてくれるものです。
具体的に言うと、分数は`\frac{32}{3}`といちいち入力しないといけませんが、このプラグインでは`32/3`と入力して`space`を押すと勝手に`\frac{32}{3}`と変換してくれます。さらにギリシャ文字も頭二文字を入れてスペースを押すと勝手に変換してくれます。
```latex
3/32 + space = \frac{3}{32}

Om + space = \Omega
```

### Reminder
このプラグインはObsidian上で指定した時間や日時にリマインドしてくれるプラグインです。PCだとシステム通知も来ます。
- [ ] リマインドテスト (@2024-10-15 19:35)
 ![自分のObsidianについて-Reminder.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-Reminder.png)

ここからPCが変わるのでテーマも変わります。
### Remotely Save
私はこのプラグインを使用してPC3台とスマホ間で同期をしています。
クラウドはDropBoxを使用します。理由はGdriveやoneboxらは既にファイルがかなり存在していたので、ファイルがなく綺麗なDropBoxを採用しました。

### Style Setting
このプラググインは私がよく使用しているテーマ`Ultra Lobster`を使用するうえでほぼ必要不可欠です。
自らCSSを変更することなく、開発者が用意したセットを選択してテーマを自分好みにしていきます。

### Surfing
このプラグインはObsidian上でブラウザを使用したい人向けのプラグインです。
ブックマーク機能などもあります。
![自分のObsidianについて-Surfing.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-Surfing.png)

### Task Progress Bar
このプラグインはtaskが入れ子構造になっているときにprogressBarを表示するプラグインです。
プロジェクトや自分でアプリを作る際に進捗がわかっていい感じです。
![自分のObsidianについて-TaskProgressBar.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-TaskProgressBar.png)

### Tracker
このプラグインは保管庫全体から値を集計してグラフ化することもできるプラグインです。
前述したとおり、睡眠時間を集計するために使用しています。
![自分のObsidianについて-睡眠時間-Tracker.png](%E8%87%AA%E5%88%86%E3%81%AEObsidian%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6-%E7%9D%A1%E7%9C%A0%E6%99%82%E9%96%93-Tracker.png)

### Typewitter mode
このプラグインを使用すると改行などで次の行に、行く際に書いている行が、画面中央になるプラグインです。
長文などを書いているとだんだん書いている行が下に下に行くのを防いでくれます。

これで私が使用している主要なものは終わりです。
詳細説明いらなそうなものを列挙しときます。
- Git

## 最後に
私は結構、いろいろな文献を見るのが好きです。
ただ、自分もこうやって書いてて楽しくなってきました。
皆さんも記事、書きませんか？