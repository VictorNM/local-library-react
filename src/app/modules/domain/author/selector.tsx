import State from './state';

export default {
    getAllAuthors: (state: State)      => state.allIds.map((id: number) => state.byId[id]),
    getCurrentAuthor: (state: State)   => state.current
}