<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :mobile-breakpoint="768" app>
      <!-- <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Vuetify Todo </v-list-item-title>
          <v-list-item-subtitle> try out ToDo </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider> -->
      <v-img
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        max-height="150"
        src="./mountains.jpg"
        class="pa-4 pt-4"
      >
        <v-avatar size="70" class="mb-2">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
        <div class="white--text text-subtitle-1 font-weight-bold">
          Shruti Upari
        </div>
        <div class="white--text text-subtitle-2">shrutiupari</div></v-img
      >
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="./mountains.jpg"
      prominent
      height="150"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        >
        </v-img>
      </template>
      <v-container class="header-container pa-0">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search-bar></search-bar>
        </v-row>
        <v-spacer />
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">{{ $store.state.appTitle }}</v-toolbar-title>
        </v-row>
        <v-row>
          <live-date />
        </v-row>
      </v-container>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snack-bar />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "About", icon: "mdi-help-box", to: "/about" },
    ],
  }),
  mounted() {
    this.$store.dispatch('getTasks')
  },
  components: {
    "snack-bar": require("@/components/Shared/SnackBar.vue").default,
    "search-bar": require("@/components/Tools/SearchOption.vue").default,
    "live-date": require("@/components/Tools/LiveDate.vue").default,
  },
};
</script>
<style lang="sass" scoped>
  .header-container
    max-width: none !important
</style>
