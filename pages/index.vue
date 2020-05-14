<template>
  <main class="container">
    <header>
      <img src="/logo.svg">
    </header>
    <section>
      <article v-tilt="tiltOpts">
        <img src="/tinybrightness-scr.svg">
        <div class="background"></div>
        <a href="https://github.com/nik9play/tinyBrightness/releases"><h3>tinyBrightness</h3></a>
        <p>{{ $t("cards.tinyBrightness.desc")}}</p>
        <a href="https://github.com/nik9play/tinyBrightness" class="repoLink">{{ $t("cards.tinyBrightness.repoLink")}}</a>
      </article>
      <article v-tilt="tiltOpts">
        <img src="/tinyPaste-scr.svg">
        <div class="background"></div>
        <a href="https://tinypaste.megaworld.space"><h3>{{ $t("cards.tinyPaste.title")}}</h3></a>
        <p>{{ $t("cards.tinyPaste.desc")}}</p>
        <a href="https://github.com/nik9play/tinypaste" class="repoLink">{{ $t("cards.tinyPaste.repoLink")}}</a>
      </article>
      <article v-tilt="tiltOpts">
        <img src="/vkbot-scr.svg">
        <div class="background"></div>
        <a href="https://vk.com/botsavepics"><h3>{{ $t("cards.vkBot.title")}}</h3></a>
        <p>{{ $t("cards.vkBot.desc")}}</p>
        <a href="https://github.com/nik9play/vk-bot-picture" class="repoLink">{{ $t("cards.vkBot.repoLink")}}</a>
      </article>
    </section>
    <footer>
      <nuxt-link :to="switchLocalePath('en')">English</nuxt-link>
      <nuxt-link :to="switchLocalePath('ru')">Русский</nuxt-link>
    </footer>
  </main>
</template>

<script>
export default {
  data: () => {
    return {
      tiltOpts: { max: 10, scale: 1.04, glare: true, 'max-glare': .3 }
    }
  },

  created() {
    if (this.$nuxt.$device.isMobile) 
    {
      this.tiltOpts.max = 0
      this.tiltOpts.scale = 1
    }
  }
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
  grid-gap: 2rem;
}

h3 {
  font-weight: 500;
}

.repoLink {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
}

article {
  img {
    position: relative;
    top: 0;
    left: 0;
    width: calc(100% + 2rem);
    margin: -1rem 0 .5rem -1rem;
    border-radius: 1rem 1rem 0 0;
    transition: transform cubic-bezier(.03,.98,.52,.99) .1s;
  }

  a {
    display: inline-block;
  }

  padding: 1rem;
  padding-bottom: 4rem;
  box-shadow: 0px 2px 31px 0px rgba(0,0,0,0.1);
  border-radius: 1rem;
  color: black;
  transition: color 0.2s 0s ease;
  position: relative;
  transform-style: preserve-3d;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(171,49,228,1) 0%, rgba(73,2,255,1) 100%);
    z-index: -1;
    border-radius: 1rem;
    clip-path: circle(0.0% at 100% 100%);
    transition: all 0.3s 0s ease;
  }

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
    box-shadow: 0px 2px 31px 0px rgba(0,0,0,0.1);
    color: #fff;

    .background {
      clip-path: circle(140.9% at 100% 100%);
    }
    
    a {
      color: #fff;
      border-bottom: 1px #fff dashed;
    }

    img {
      transform: translateZ(20px);
    }
  }
}

a {
  color: rgb(70, 70, 70);
  text-decoration: none;
  border-bottom: 1px rgb(143, 143, 143) dashed;
  transition: color 0.2s 0s ease;
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
