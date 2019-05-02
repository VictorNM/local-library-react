import State from './state';

export default {
    getAllGenres: (state: State)      => state.allIds.map((id: number) => state.byId[id]),
    getCurrentGenre: (state: State)   => state.current
}