<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form v-on:submit.prevent="queryGitHub(query)">
      <input type="text" placeholder="GitHub Username" v-model="query"/>
    </form>

    <div class="results" v-if="results">
      {{ results}}
      <img :src="results.avatar_url" style="float: left">
      <h2>{{ results.name }}</h2>
      <div>{{ results.bio }}</div>
      <div>{{ results.location }}</div>
      <div v-if="results.Followers">{{results.Followers}}</div>
      <div v-if="results.Following">{{results.Following}}</div>
      <a :href="results.html_url" target="_blank">Visit GitHub Profile</a>
      {{ results.message }}

    </div>
  </div>
  <div>
  <h2>🎯 Vue Course Goals</h2>
  <input type="text" v-model="newGoal" placeholder="Enter a new goal" />
  <button @click="addGoal">Add Goal</button>
  <ul>
    <li v-for="(goal, index) in goals" :key="index">{{ goal }}</li>
  </ul>
  <p>Learn more <a v-bind:href="vueLink"> about Vue</a></p>
</div>

</template>

<script>
export default {
  name: 'GitHub',
  data() {
    return {
      msg: 'GitHub Search',
      query: '',
      results: null,
      newGoal: '',       // <-- bound to <input v-model="newGoal">
      goals: [],          // <-- this must exist to call push()
      vueLink: 'https://vuejs.org/'

    };
  },
  methods: {
    queryGitHub() {
      fetch(`https://api.github.com/users/${this.query}`)
        .then(res => {
          if (!res.ok) throw new Error('User not found');
          return res.json();
        })
        .then(data => {
          this.results = data;
          console.log(`👤 Name: ${data.name}`);
          console.log(`🧾 Bio: ${data.bio}`);
          console.log(`📍 Location: ${data.location}`);
          console.log(`🔗 GitHub URL: ${data.html_url}`);
        })
        .catch(err => {
          console.error('❌ Error:', err.message);
          this.results = null;
        });
    },
    // Add course goal
    addGoal() {
      if (this.newGoal.trim() !== '') {
        this.goals.push(this.newGoal.trim());
        this.newGoal = '';
      }
    }
  }
};
</script>

