<template>
  <div>
    <h2>Discover Your Perfect Match with Our Dating App</h2>
    <div v-if="filteredSwipes.length > 0">
      <div>
        <div v-show="showMatch">
          <h1>IT'S A MATCH</h1>
          <p>You and <span v-if="match.length>0">{{ match[0].firstName }}</span> are a match!</p>
          <button @click="toggleMatch">Okay</button>
        </div>
        <p> {{ filteredSwipes[0].firstName }}, {{ filteredSwipes[0].lastName }} </p>
        <p><b>Location:</b> {{ filteredSwipes[0].country }}, {{ filteredSwipes[0].stateRegion }}, {{ filteredSwipes[0].city }} </p>
        <p><b>Bio:</b> {{ filteredSwipes[0].bio }} </p>
        <button @click="handleLike(filteredSwipes[0].id)">Like</button>
        <button @click="handleDislike(filteredSwipes[0].id)">Dislike</button>
      </div>
    </div>
    <div v-else>
      No more swipes available.
    </div>
  </div>
</template>


<script>
import LikeCreateMutation from '@/graphql/LikeCreate.gql';
import DislikeCreateMutation from '@/graphql/DislikeCreate.gql';
export default {
  components: {

  },
  data() {
    return {
      match: [],
      showMatch: false,
      currentIndex: 0,
      swipeList: [], // Initialize with an empty array
    };
  },
  computed: {
    filteredSwipes() {
      return this.swipeList.slice(this.currentIndex, this.currentIndex + 1);
    },
  },
  apollo: {
    // Define the GraphQL query
    swipeWithGenderInterest: {
      // GraphQL query file to get the users based on gender_interest of current user
      query: require('@/graphql/Swipe.gql'), 
      result({ data }) {
        if (data) {
          this.swipeList = data.swipeWithGenderInterest;
        }
      },
    },
  },
  methods: {
    async handleLike(likedUserId) {
      try {
        // GraphQL mutation for like
        const response = await this.$apollo.mutate({
          mutation: LikeCreateMutation,
          variables: {
              "likedUserId": likedUserId,
          },
        });
          // increment currentIndex to 1
          this.currentIndex++;
          if (response.data.createLike.like.match) {
            // get the last user and display it in match
            this.get_last_match();
            this.showMatch = true;
          } else {
            console.log('Like created successfully.');
          }
      } catch (error) {
        console.error('Error creating like:', error);
      }
    },
    async handleDislike(dislikedUserId) {
      // Implement logic to handle disliking the current user
      console.log(dislikedUserId)
      try {
        const response = await this.$apollo.mutate({
          mutation: DislikeCreateMutation,
          variables: {
              "dislikedUserId": dislikedUserId, // Assuming the user ID is accessible from the swipe data
          },
        });
        this.currentIndex++;

        const errors = response.data.createDislike.errors

        let alert = (errors.length > 0) ? errors : 'Dislike created successfully' 

        console.log(alert)

      } catch (error) {
        console.error('Error creating dislike:', error);
      }
    },
    toggleMatch () {
      this.showMatch = !this.showMatch;
    },
    get_last_match() {
      return this.match[0] = this.swipeList[this.currentIndex - 1];
    }
  },
};
</script>
