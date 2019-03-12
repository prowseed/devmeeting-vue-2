import SettingsRepository from './settings.repository';

//4/ 7. We will create a list of all available repositories
const repositories = {
  settings: SettingsRepository,
};

//3/ 8. RepositoryFactory is actually simple object which allows to get repositories
const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
