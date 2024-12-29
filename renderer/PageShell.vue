<template>
  <div class="layout">
    <div class="navigation">
      <a href="/psa-my/" class="logo">
        <img src="./logo.svg" height="64" width="64" />
      </a>
      <Link href="/psa-my/">Welcome</Link>
      <Link href="/psa-my/markdown">Markdown</Link>
      <Link href="/psa-my/star-wars">Data Fetching</Link>
      <Link href="/psa-my/hello">Routing</Link>
    </div>
    <div class="content"><slot /></div>
  </div>
</template>

<script lang="ts" setup>
import Link from './Link.vue'
</script>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
code {
  font-family: monospace;
  background-color: #eaeaea;
  padding: 3px 5px;
  border-radius: 4px;
}
</style>

<style scoped>
.layout {
  display: flex;
  max-width: 900px;
  margin: auto;
}
.content {
  padding: 20px;
  padding-bottom: 50px;
  min-height: 100vh;
}
.navigation {
  padding: 20px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  border-right: 2px solid #eee;
}
.logo {
  margin-top: 20px;
  margin-bottom: 10px;
}
.content {
  transition: opacity 0.1s ease-in;
}
.content.page-transition {
  opacity: 0;
}
</style>
