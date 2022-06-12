<template>
  <v-btn @click="$store.commit('toggleSortTasks')" color="primary" class="btn-sorting"> Btn Sorting </v-btn>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
    .btn-sorting
        position: fixed
        bottom: 20px
        left: 50%
        transform: translateX(-50%)
</style>
