<template>
  <v-container v-if="entry">
    <h1 v-html="entry.fields.title"/>{{entry.fields.publishDate}}
    <div style="background: white; height: 1px"/>
    <div v-html="$md.render(entry.fields.body)" style="padding-top: 50px"/>
    <v-btn to="/" color="blue accent-3">トップページに戻る</v-btn>
  </v-container>
  <v-container v-else>
    <h1>この記事は見つかりませんでした</h1>
    <p>削除されたか、存在しません。</p>
    <v-btn to="/" color="blue accent-3">トップページに戻る</v-btn>
  </v-container>
</template>

<script>
  import client from '~/plugins/contentful'

  export default {
    name: 'id.vue',
    async asyncData({ params }) {
      const entry = await client.getEntry(params.id).catch(error => {})
      return {
        entry
      }
    }
  }
</script>
