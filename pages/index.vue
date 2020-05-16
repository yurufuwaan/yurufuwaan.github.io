<template>
  <div>
    <v-card color="#002538" flat>
      <v-layout justify-center>
        <img src="@/static/logo.jpg" />
      </v-layout>
    </v-card>
    <h1 style="padding-top: 100px">ゆるふわてとらん！とは？</h1>
    <v-card color="#002038" style="margin-top: 20px">
      <v-card-text style="font-size:20px">
        <p>
          <a
            href="https://twitter.com/MamoruItoi"
            class="name"
            style="color:darkorange;"
          >
            いとっぴー
          </a>
          ・
          <a
            href="https://twitter.com/sizumita"
            class="name"
            style="color:darkorange;"
          >
            すみどら
          </a>
          ・
          <a
            href="https://twitter.com/madoreenu314"
            class="name"
            style="color:darkorange;"
          >
            まどれーぬ
          </a>
          ・
          <a
            href="https://twitter.com/sh1ma"
            class="name"
            style="color:darkorange;"
          >
            しま
          </a>
          ・
          <a class="member" style="color:darkorange;">
            たなか
          </a>
          の5人による、技術系雑談キャスです。
        </p>
        <p>
          毎週日曜午後4時からゲストをお招きしたりしながらゆるくやっています。
        </p>
      </v-card-text>
    </v-card>
    <h1>ニュース</h1>
    <v-container>
      <v-row v-if="posts.length">
        <v-col
          v-for="(post, i) in posts.slice(0, 6)"
          :key="i"
          cols="12"
          sm="10"
          md="8"
          lg="4"
          xl="3"
        >
          <v-card
            hover
            :to="'/entries/' + post.sys.id"
            color="#002c45"
            max-width="400"
            max-height="1000"
          >
            <v-img
              :src="post.fields.heroImage.fields.file.url"
              :alt="post.fields.heroImage.fields.title"
              :aspect-ratio="16 / 9"
              max-width="400"
              max-height="225"
            />
            <div style="color: #78909C; padding-left: 5px">
              {{ post.fields.publishDate }}
            </div>
            <h3 style="padding: 5px">
              {{ post.fields.title }}
            </h3>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <p>まだ投稿された記事はありません。</p>
      </v-row>
      <v-btn to="/entries" color="blue accent-3">全てのニュースを見る</v-btn>
    </v-container>
    <h1 style="padding-top: 100px">各種リンク</h1>
    <v-col cols="2">
      <v-row justify="space-around" class="mb-2" style="font-size: 40px">
        <a href="https://twitter.com/yurufuwaan"
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>
        <a href="https://open.spotify.com/show/34bzCauREwvNd6crtm2zaN"
          ><font-awesome-icon :icon="['fab', 'spotify']"
        /></a>
        <a href="https://soundcloud.com/mamoruitoi"
          ><font-awesome-icon :icon="['fab', 'soundcloud']"
        /></a>
        <!-- <font-awesome-icon :icon="['fab', 'soundcloud']" />
        <font-awesome-icon :icon="['fab', 'spotify']" /> -->
      </v-row>
    </v-col>
    <!-- <v-btn
      href="https://twitter.com/yurufuwaan"
      style="text-transform: none; margin: 15px"
      color="blue accent-3"
    >
      Twitter
    </v-btn> -->
    <!-- <v-btn
      href="https://open.spotify.com/show/34bzCauREwvNd6crtm2zaN"
      style="text-transform: none; margin: 15px"
      color="blue accent-3"
    >
      Spotify
    </v-btn>
    <v-btn
      href="https://soundcloud.com/mamoruitoi"
      style="text-transform: none; margin: 15px"
      color="blue accent-3"
    >
      SoundCloud
    </v-btn> -->
    <h1 style="padding-top: 100px">Discord</h1>
    <p>
      ゆるふわてとらん！では、ゲストの方とリスナーが交流を深められるように、Discordサーバーをご用意いたしました。
    </p>
    <p>下のWidgetのConnectボタンからお入りください。</p>
    <iframe
      src="https://discordapp.com/widget?id=709039999047303169&theme=dark"
      width="350"
      height="500"
      allowtransparency="true"
      frameborder="0"
    />
  </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  async asyncData({ env }) {
    let posts = []
    await client
      .getEntries({
        content_type: env.CTF_BLOG_POST_TYPE_ID,
        order: '-fields.publishDate'
      })
      .then((res) => (posts = res.items))
    // .catch(console.error)
    return { posts }
  },
  head() {
    return {
      title: 'トップページ'
    }
  }
}
</script>

<style>
.name {
  text-decoration: none;
}
</style>
