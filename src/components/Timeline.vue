<template>
<span class="tl-main">

  <div class="line" />

  <div 
    class="stamp-format"
    v-for="stamp in stamps" 
    :key=stamp.key
  >
    
    <span class="stamp">
      <h3><a 
        @click="$emit('ga-event', 'Andro', stamp.gtag)"
        :href="formatURL(stamp.url)">{{stamp.title}}</a>
      </h3>
      <p>{{stamp.blurb}}</p>
      <pre v-highlightjs="stamp.code" class="code">
        <code class="python"/>
      </pre>
    </span>

    <div class="bullet">
      <h2 style="margin-top: 0.2em; font-size: 1.2em">{{stamp.key}}</h2>
    </div>

  </div>

</span>
</template>

<script>

export default {
  name: 'Timeline',
  props: {
    items: Object,
  },
  data() {
    return {
      stamps: []
    }
  },
  mounted() {
    this.stamps = this.items['stamps']
  },
  methods: {
    formatURL(url) {
      if (url != "")
        return url
      else
        return null
    }
  }
}
</script>

<style scoped>
.tl-main {
  padding-top: 1%;
  width: 100%;
  display: grid;
  grid-template-columns: 5% 95%;
}
.line {
  grid-row: span 100;
  background: white;
  width: 3px;
  height: 100%;
  grid-column: 1;
}

.bullet {
  position: relative;
  left: -6.8%;
  bottom: 50%;
  width: 2em;
  height: 2em;

  border: 1px solid white;
  background: 1px black;
  border-radius: 50%;
  
  text-align: center;
}

.stamp {
  display: block;
  max-width: 98%;
  padding: 1%;
  padding-top: 0;

  background: rgba(26, 26, 26, 0.85);
  border: 1px solid #B5B5B5;
}
.stamp-format {
  width: 100%;
  margin-top: 0;
  padding-top: 0;
}
.code {
  margin-top: -20px;
  margin-bottom: -20px;
}
</style>