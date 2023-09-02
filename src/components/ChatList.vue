<template>
  <div>
    <div v-for="chat in chatList" :key="chat.id" class="chat-item">
      <!-- Display chat information here -->
      <p>{{ chat.user2.firstName }} {{ chat.user2.lastName }}</p>
      <!-- Add more chat details as needed -->
    </div>
  </div>
</template>

<script>
import matchesUser from '@/graphql/Chats.gql';
export default {
  name: "ChatList",
  data () {
    return {
      chatList: []
    }
  },
  methods: {
    async chats() {
      const response = await this.$apollo.query({
          query: matchesUser,
      });
      this.chatList = response.data.matchesUser
      console.log(response)
    }
  },
  created() {
    this.chats(); // Call the method to fetch chat data when the component is created
  },
}
</script>

<style>

</style>
