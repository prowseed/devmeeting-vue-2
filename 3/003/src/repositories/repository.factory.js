import SettingsRepository from './settings.repository';

const repositories = {
  settings: SettingsRepository,
  // other repositories ...
};

const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
