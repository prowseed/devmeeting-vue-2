import guid from '@/utils/guid.util';

const initialState = () => ({
  userId: guid(),
  superuser: false,
});

const state = initialState;

const getters = {
  userId: store => store.userId,
  superuser: store => store.superuser,
};

export default {
  namespaced: true,
  getters,
  state,
};
