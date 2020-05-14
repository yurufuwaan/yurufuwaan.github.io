<template>
  <v-app>
    <v-app-bar fixed color="#002c45" app>
      <v-toolbar-title>
        <h1>
          <a href="/" style="text-decoration: none; color: white">
            ゆるふわてとらん！
          </a>
        </h1>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn color="cyan darken-2" to="/entries">ニュース一覧</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="#002c45">
      <p>このWebサイトではGoogle Analyticsを使用しています。</p>
    </v-footer>
  </v-app>
</template>
