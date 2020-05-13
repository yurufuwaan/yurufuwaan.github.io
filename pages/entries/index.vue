<template>
  <div>
    <h1>ニュース一覧</h1>
    <v-container>
      <v-row v-if="posts.length">
        <v-col
          v-for="(post, i) in posts"
          :key="i"
          cols="12"
          sm="10"
          md="8"
          lg="4"
          xl="3"
        >
          <v-card hover :to="'/entries/' + post.sys.id" color="#002c45">
            <v-img
              :src="post.fields.heroImage.fields.file.url"
              :alt="post.fields.heroImage.fields.title"
              :aspect-ratio="16 / 9"
              max-width="400"
              max-height="225"
            />
            {{ post.fields.publishDate }}
            <h3 style="padding: 5px">{{ post.fields.title }}</h3>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <p>まだ投稿された記事はありません。</p>
      </v-row>
    </v-container>
    <v-btn to="/" color="blue accent-3">トップページに戻る</v-btn>
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  name: 'index.vue',
  async asyncData({ env }) {
    let posts = []
    await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishDate'
      })
      .then((res) => (posts = res.items))
      .catch(console.error)
    return { posts }
  },
  head() {
    return {
      title: 'ニュース一覧'
    }
  }
}
</script>
