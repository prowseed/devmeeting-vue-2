import SettingsRepository from './settings.repository';
import VotesRepository from './votes.repository';

const repositories = {
  settings: SettingsRepository,
  votes: VotesRepository,
};

const RepositoryFactory = {
  get: name => repositories[name],
};

export default RepositoryFactory;
