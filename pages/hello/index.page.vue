<template>
  <h1>Hello</h1>
  <p>
    Hi <b>{{ name }}</b
    >.
  </p>
  <ul>
    <li>
      <a href="/psa-my/hello/eli">/hello/eli</a>
    </li>
    <li>
      <a href="/psa-my/hello/jon">/hello/jon</a>
    </li>
  </ul>
  <p>
    Parameterized routes can be defined by exporting a route string in
    <code>*.page.route.js</code>.
  </p>
</template>

<script lang="ts" setup>
defineProps(['name'])
</script>
