<template>
  <header>
    <router-link :to="{name: 'Home'}">
      <h1><span>Vue3</span>Films</h1>
    </router-link>
  </header>
  <main>
      <router-view/>
  </main>
</template>

<style lang="scss">
  * {
    box-sizing: border-box;

    &::selection {
      background: transparentize(#537791, 0.5)
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Fira Sans', sans-serif;
    background-color: #e7e6e1;
  }

  a {
    text-decoration: none;
  }

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    background-color: #537791;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, .1);

    h1 {
      color: #fff;
      font-size: 28px;
    }
  }

  // 13:56

  //colours
  // https://colorhunt.co/palette/106550
</style>
