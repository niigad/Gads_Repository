<template>
  <div class="max">
    <span class="button-style green-bar">{{ msg }}</span>

    <div class="output-container">
      <span class="button-style green-bar">Counter: {{ count }}</span>
      <button v-on:click="count++">Click to increase the count!</button>
    </div>

    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>


    <h1>Ecosystem</h1>

    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
  <section id="user-goal">
  <h1>My Course Goal</h1>
  <p class="centered-container">
    <span class="button-style green-bar">{{ outputGoal() }}</span>
  </p>
</section>

<section id="events">
  <h1>Events in Action</h1>
  <button class="button-style blue-bar" v-on:click="add(10)">Add 10</button>
  <button class="button-style red-bar" v-on:click="reduce(5)">Subtract 5</button>
  <p class="output-container">
    <span class="button-style green-bar">Result: {{ counter }}</span>
  </p>

  <input type="text"  v-model="name" />
  <button class="resetbox" v-on:click="resetInput">Reset Input</button>

  <p class="output-container">
    <span class="button-style green-bar">Your Name: {{ fullname }}</span>
  </p>

  <p class="output-container">
    <span class="button-style green-bar">Character Count: {{ nameLength }}</span>
  </p>
</section>
<div>
  <header>
    <h1>Vue Dynamic Styling</h1>
    <strong>Click on any box to change its border color which is controlled by inline Styling.
      However, inline styling should not be used too often. It can lead to performance issues.Therefore, use the CSS styling.</strong>

  </header>
  <section id="styling" class="centered-boxes">
    <div
    class="demo"
    :class="boxAClasses"
    @click="boxSelected('A')">
  </div>
  <div class="demo" @click="boxSelected('B')" :style="{ borderColor: boxBSelected ? 'blue' : '#CCC' }"></div>
  <div class="demo" @click="boxSelected('C')" :style="{ borderColor: boxCSelected ? 'green' : '#CCC' }"></div>
  <div
  class="demo"
  :class="{active: boxDSelected }"
  @click="boxSelected('D')" ></div>
</section>
</div>
</template>

<script>
export default {
  name: 'VueTutorials',
  data () {
    return {
      msg: 'Welcome to VUE Tutorials',
      count: 0,
      name: '',
      counter: 0,
      nameLength:0,
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      boxDSelected: false
    }
  },

  watch: {
  name(newVal) {
    this.nameLength = newVal.length;
  }
},

  computed: {
    fullname() {
      if (this.name === '') {
        return 'No name provided';
      }
      return this.name + ' ' + 'Smith';
    },

    boxAClasses() {
    return { active: this.boxASelected };
  },


  },

  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        this.msg = 'Your goal has been successfully achieved!';
      } else {
        this.msg = 'Your goal has not been achieved!';
      }
      return this.msg;
    },

    setName(event, lastName) {
      this.name = event.target.value;
      return this.name;
    },

    add(num) {
      this.counter = this.counter + num;
      return this.counter;
    },

    reduce(num) {
      this.counter = this.counter - num;
      return this.counter;
    },

    outputFullname() {
      if (this.name === '') {
        return 'No name provided';
      }
      return this.name + ' ' + 'Smith';
    },

    resetInput() {
      this.name = '';
      return this.name;
    },
    boxSelected(box) {
  if (box === 'A') {
    this.boxASelected = !this.boxASelected;
  } else if (box === 'B') {
    this.boxBSelected = !this.boxBSelected;
  } else if (box === 'C') {
    this.boxCSelected = !this.boxCSelected;
  }
    else if (box === 'D') {
    this.boxDSelected = !this.boxDSelected;
  }
}

  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: bolder;
  text-align: center;
  color: #fff; /* white text for contrast */
  background-color: #42b983; /* Vue green background */
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 20px;
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

/* Additional styles for result/output area */
.centered-container {
  text-align: center;
  margin-top: 10px;
}

.green-bar {
  display: inline-block;
  background-color: #4CAF50;
  color: white;

}
.blue-bar {
  display: inline-block;
  background-color: #3205d3;
  color: white;

}
.red-bar {
  display: inline-block;
  background-color: #cf3207;
  color: white;

}
.button-style {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  margin-top: 10px;
  margin-right: 5px;
  align-items: center;
}


.resetbox {
  background-color: #64919e;
  color: white;
  padding: 10px 20px;
  padding-top: 10px;
  border-radius: 6px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 10px;
  align-items: center;
  margin-right: 5px;
}


input[type="text"] {
  padding: 14px 18px;         /* More internal space */
  font-size: 18px;            /* Larger text */
  width: 300px;               /* Wider box */
  border: 2px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus {
  border-color: #4CAF50;
  box-shadow: 0 0 6px rgba(76, 175, 80, 0.4);
  outline: none;
}
.centered-boxes {
  display: flex;
  flex-direction: column;
  align-items: center;     /* Horizontally center */
  justify-content: center; /* Vertically center */
  min-height: 60vh;        /* Adjust height as needed */
}

.demo {
  width: 100px;
  height: 100px;
  border: 4px solid #CCC;
  margin: 10px 0;
  cursor: pointer;
}

.active {
  border-color: #4CAF50;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.6);
  background-color: salmon;
}
</style>
