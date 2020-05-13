<template>
  <v-container v-if="entry">
    <v-card color="#002538" flat>
      <v-layout justify-center>
        <v-img
          :src="entry.fields.heroImage.fields.file.url"
          :alt="entry.fields.heroImage.fields.title"
          :aspect-ratio="16 / 9"
          max-width="600"
          max-height="338"
        />
      </v-layout>
    </v-card>
    <h1 v-html="entry.fields.title" style="padding-top: 15px" />
    {{ entry.fields.publishDate }}
    <div style="background: white; height: 1px" />
    <div v-html="$md.render(entry.fields.body)" style="padding-top: 50px" />
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
    let entry = {}
    await client
      .getEntry(params.id)
      .then((result) => (entry = result))
      .catch((error) => console.log(error))
    return {
      entry
    }
  }
}
</script>
