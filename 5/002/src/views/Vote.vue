<template>
  <div
    class="vote"
  >
    <div
      v-if="!hasVoted"
      class="vote__container"
    >
      <h1 class="vote__header">
        Do you know?
      </h1>
      <VoteOptions>
        <BaseButton
          slot-scope="optionProps"
          class="vote__button"
          :style="{ color: optionProps.color }"
          variant="icon"
          @click="onVoted(optionProps.option)"
        >
          <i
            class="vote__button-icon"
            :style="{
              content: `url(${require('@/assets/' + optionProps.icon)})`
            }"
          />
          <span class="vote__button-label">
            {{ optionProps.label }}
          </span>
        </BaseButton>
      </VoteOptions>
    </div>
    <CheckMark v-else />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import VoteOptions from '@/components/VoteOptions.vue';
import CheckMark from '@/components/CheckMark.vue';

export default {
  name: 'Vote',
  components: {
    VoteOptions,
    CheckMark,
  },
  computed: {
    ...mapGetters('user', {
      userId: 'userId',
    }),
    ...mapGetters('votes', {
      hasVoted: 'hasUserVoted',
    }),
  },
  methods: {
    ...mapActions('votes', {
      addVote: 'addVote',
    }),
    onVoted(type) {
      this.addVote({ userId: this.userId, vote: type });
    },
  },
};
</script>

<style lang="scss">
.vote {
  &__button {
    border-radius: 100px;
    height: 200px;
    width: 120px;
    margin: 0 40px;
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  &__button-icon {
    display: block;
    margin: 0 auto;
    color: inherit;
    &:active {
      transform: scale(0.9);
    }
  }
  &__button-label {
    display: block;
    text-align: center;
    width: 100%;
    margin-top: 10px;
    font-size: 20px;
  }
  &__header {
    font-size: 60px;
    padding-top: 50px;
  }
}
</style>
