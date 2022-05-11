<template>
  <div>
    <button @click="login()">Login</button>

    <button @click="logout()">Logout</button>

    <div>
      <h2>Messages</h2>
      <ul>
        <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
      </ul>
    </div>

    <pre class="user-data" v-if="currentUser">
      <code>{{ JSON.stringify(currentUser, null, 4) }}</code>
    </pre>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      currentUser: undefined,
      messages: []
    };
  },
  async created() {
    this.currentUser = await this.$auth.userManager.getUser();

    if (this.currentUser) {
      this.messages.push('User logged in');
    }
    else {
      this.messages.push('User not logged in');
    }
  },
  methods: {
    login() {
      this.$auth.userManager.signinRedirect();
    },
    logout() {
      this.$auth.userManager.signoutRedirect();
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.user-data {
  text-align: initial;
  background-color: lightgrey;
  border: 1px solid black;
  overflow: auto;
}
</style>
