<template>
  <NModal
    v-model:show="_show"
    preset="card"
    size="medium"
    title="ヘルプ"
  >
    <div class="card">
      <h3>これはなに？</h3>
      <p>『A列車で行こう はじまる観光計画』の「列車開発機能」で使う色の設定値を、RGBから簡単に取得するためのツールです。</p>
      <h3>どうやって使うの？</h3>
      <ul>
        <li>画面下部のボタンを押してください。その色の設定値が表示されます。</li>
        <li>タブを切り替えてください。違う色相のボタンが表示されます。</li>
        <li>色が表示されている箇所をクリックしてください。カラーピッカーで微調整やRGB値の直指定ができます。</li>
      </ul>
      <h3>カラーピッカーが消えなくなった</h3>
      <p>画面の何もないところをクリック/タップしてください。</p>
      <h3>色強度は？</h3>
      <p>
        ご自身でいい感じに調整してください。（よくわかりませんでした。ごめんなさい。）<br/>
        だいたい150%前後で調整するといい感じです。
      </p>
      <h3>謝辞</h3>
      <p>プリセットの色は <a
        href="https://www.colordic.org/"
        target="_blank"
        rel="noreferrer"
      >原色大辞典</a> 様の公開されているRGB値をベースとして使わせていただきました。<br/>一部、ゲーム画面でしっくりくるよう調整しています。</p>
      <h3>参考図書</h3>
      <p>実際の車両がどの色の組み合わせで塗装されているか紹介されていてオススメです。</p>
      <ul>
        <li>
          <a
            href="http://www.graphicsha.co.jp/detail.html?p=46899"
            target="_blank"
            rel="noreferrer"
          >
            国鉄車両関係色見本帳＋車両色図鑑
          </a>
          <ul>
            <li>著: レイルウエイズ グラフィック</li>
            <li>発行: グラフィック社</li>
          </ul>
        </li>
        <li>
          <a
            href="https://www.seibundo-shinkosha.net/book/hobby/53686/"
            target="_blank"
            rel="noreferrer"
          >
            国鉄色車両ガイドブック
          </a>
          <ul>
            <li>写真: 広田尚敬</li>
            <li>文: 坂 正博 / 梅原 淳 / 栗原 景</li>
            <li>発行: 誠文堂新光社</li>
          </ul>
        </li>
      </ul>
      <h3>このツールを作った人</h3>
      rik<br/>
      Twitter: <a
        href="https://twitter.com/rik31415926"
        tarteg="_blank"
        rel="noreferrer"
      >@rik31415926</a><br/>
      Website: <a
        href="https://rik.ninja"
        tarteg="_blank"
        rel="noreferrer"
      >rik</a>
    </div>
  </NModal>
</template>
<script setup lang="ts">
  import { NModal } from "naive-ui"
  import {computed} from "vue"
  const props = defineProps<{ show: boolean }>()
  const emit = defineEmits<{
    (e: 'update:show', value: boolean): void
  }>()
  const _show = computed({
    get: () => props.show,
    set: (value: boolean) => {emit("update:show", value)}
  })
</script>
<style scoped>
.card {
  max-height: 55vh;
  overflow-x: scroll;
}
</style>