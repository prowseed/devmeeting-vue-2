//1/ 4. Service is now imported to SettingsRepository
import HttpService from './http.service';

const resource = 'settings.json';

//12/ 6. Let's export SettingsRepository
export default {
  //4/ 5. and used to perform REST calls
  async get() {
    const { data } = await HttpService.get(resource);
    return data;
  },

  async update(newSettings) {
    const { data } = await HttpService.patch(resource, newSettings);
    return data;
  },
};
