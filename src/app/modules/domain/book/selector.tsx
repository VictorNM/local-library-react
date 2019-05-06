import State from './state';

export default {
    getAllBooks: (state: State)      => state.allIds.map((id: number) => state.byId[id]),
    getCurrentBook: (state: State)   => state.current
}