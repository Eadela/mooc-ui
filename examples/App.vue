<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo></Demo>
    <m-card 
      imgSrc="BC.jpg"
      summary="asdfadfasdfasdf"
      >
      <template #footer>
        <div>
          <div class="level">中级-528人报名</div>
          <div class="price">$96.3</div>
        </div>
      </template>
    </m-card>
    <m-card 
      imgSrc="logo.png"
      summary="asdfadfasdfasdf"
      >
      <template #footer>
        <div>
          <div class="level">中级-528人报名</div>
          <div class="price">$96.3</div>
        </div>
      </template>
    </m-card>
    <m-card 
      imgSrc="logo.png"
      imgHeight="200"
      width="575"
      >
      默认插槽
      <template #footer>
        <div>
          <div class="level">中级-528人报名</div>
          <div class="price">$96.3</div>
        </div>
      </template>
    </m-card>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
