
<template>
  <div class="score">
    <div
      class="score__container"
    >
      <VoteOptions>
        <template slot-scope="optionProps">
          <div
            class="score__item"
            :style="{ color: optionProps.color }"
          >
            <Transition
              name="slide-fade"
              mode="out-in"
            >
              <span
                :key="optionProps.option + groupedVotes && groupedVotes[optionProps.option]"
                class="score__item-value"
              >
                {{ groupedVotes && groupedVotes[optionProps.option] }}
              </span>
            </Transition>
            <span class="score__item-label">
              {{ optionProps.label }}
            </span>
          </div>
        </template>
      </VoteOptions>
      <BaseButton
        v-if="superuser"
        variant="text"
        label="Reset"
        @click="reset()"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VoteOptions from '@/components/VoteOptions.vue';

export default {
  name: 'Score',
  components: {
    VoteOptions,
  },
  computed: {
    ...mapGetters('user', {
      superuser: 'superuser',
    }),
    ...mapGetters('votes', {
      groupedVotes: 'groupedVotes',
    }),
  },
  methods: {
    reset() {
      this.$store.dispatch('votes/resetVotes');
    },
  },
};
</script>

<style lang="scss">
.score {
  &__item-value,
  &__item-label {
    display: block;
  }
  &__item-value {
    font-size: 60px;
  }
  &__item-label {
    font-size: 33px;
  }
  &__loader-container {
    width: 100%;
    height: 100%;
    display: flex;
  }
}
</style>
