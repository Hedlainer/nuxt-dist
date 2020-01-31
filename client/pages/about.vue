<template>
  <div class="container">
    <div>
      <h1>
        О себе, я запустил чуть чуть накста в ноде юху юху-ху)))
        <span class="name">{{ name }}</span>.
      </h1>
      <p>
        <NLink to="/" class="button--grey">Home</NLink>
      </p>
    </div>
    <img src="/img/3s.jpg" alt="111">
  </div>
</template>

<script>
export default {
  asyncData() {
    return {
      name: process.server ? "server" : "client"
    };
  }
};
</script>