import HttpService from './http.service';

const resource = 'settings.json';

export default {
  async get() {
    const { data } = await HttpService.get(resource);
    return data;
  },

  async update(newSettings) {
    const { data } = await HttpService.patch(resource, newSettings);
    return data;
  },
};
