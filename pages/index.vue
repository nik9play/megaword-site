<template>
  <main class="container">
    <header>
      <img src="/logo.svg">
    </header>
    <section>
      <article>
        <a href="https://tinypaste.megaworld.space"><h3>{{ $t("cards.tinyPaste.title")}}</h3></a>
        <p>{{ $t("cards.tinyPaste.desc")}}</p>
        <a href="https://github.com/nik9play/tinypaste">{{ $t("cards.tinyPaste.repoLink")}}</a>
      </article>
      <article>
        <a href="https://vk.com/botsavepics"><h3>{{ $t("cards.vkBot.title")}}</h3></a>
        <p>{{ $t("cards.vkBot.desc")}}</p>
        <a href="https://github.com/nik9play/vk-bot-picture">{{ $t("cards.vkBot.repoLink")}}</a>
      </article>
    </section>
    <footer>
      <nuxt-link to="/">English</nuxt-link>
      <nuxt-link to="/ru">Русский</nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.container {
  display: grid;
  max-width: 960px;
  margin: 0 auto 0;
  padding: 1rem;
}

header {
  img {
    width: 250px;
  }
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
}

h3 {
  font-weight: 500;
}

article {
  a {
    display: inline-block;
  }
  padding: 1rem;
  border: 1px rgba(0, 0, 0, 0.15) solid;
  border-radius: 1rem;
  color: black;

  * {
    margin-bottom: .5rem;
  }
  *:last-child {
    margin-bottom: 0;
  }

  &:focus {
    background: rgba(0, 0, 0, 0.1);
    border: 1px rgba(0, 0, 0, 0.2) dashed;

  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
}

a {
  color: rgb(70, 70, 70);
  text-decoration: none;
  border-bottom: 1px rgb(143, 143, 143) dashed;
}

footer {
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  * {
   margin-right: .5rem; 
  }

  *:last-child {
    margin-right: 0;
  }
}
</style>
