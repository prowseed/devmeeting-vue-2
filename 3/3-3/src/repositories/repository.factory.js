import SettingsRepository from './settings.repository';

const repositories = {
  settings: SettingsRepository,
};

const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
