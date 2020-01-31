<template>
  <div class="container">
    <div>
      <h1>
        Hello from
        <span class="name">{{ name }}</span>.
      </h1>
      <p>
        <NLink to="/about" class="button--grey">About</NLink>
      </p>
    </div>
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

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
h1 {
  font-weight: 400;
}
.name {
  color: #1B0702;
}
p {
  margin-top: 20px;
}
</style>