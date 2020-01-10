<template>
  <div id="heroes-list">
    <b-container>
      <div v-if="heroes.length">
        <b-row>
          <div v-bind:key="hero.index" v-for="hero in heroes">
            <b-col l="4">
              <b-card
                v-bind:title="hero.name"
                v-bind:img-src="hero.thumbnail.path + '.' + hero.thumbnail.extension"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <div>
                  <b-button :href="hero.urls[0].url" target="_blank">Detalhes</b-button>
                </div>
              </b-card>
            </b-col>
          </div>
        </b-row>
      </div>
      <div v-else>
        <h5>No hero available 😢</h5>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "heroes-list",
  computed: mapGetters({
    heroes: "allHeroes"
  }),
  created() {
    this.$store.dispatch("getAllHeroes");
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin-top: 0px;
  margin-bottom: 0px;
  &.top {
    margin-bottom: 20px;
  }
}
</style>
