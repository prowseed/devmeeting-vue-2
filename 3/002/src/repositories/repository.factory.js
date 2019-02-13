import SettingsRepository from './settings.repository';

//4/ 7. We will create RepositoryFactory which takes care of all available repositories
const repositories = {
  settings: SettingsRepository,
  // other repositories ...
};

//3/ 8. RepositoryFactory is actually simple object which allows to get our repositories
const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
