<template>
  <div class="">
      <h2>Chats</h2>
      <ChatList />
  </div>
</template>

<script>
import ChatList from '@/components/ChatList.vue'
export default {
  data() {
      return {

      }
  },
  name: 'ChatPage',
  components: {
    ChatList
  },
  methods: {
    async matches() {

    }
  }
}
</script>

<style>

</style>
