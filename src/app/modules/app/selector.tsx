import reducer from './reducer';

type State = ReturnType<typeof reducer>

export default {
    getIsLoading:   (state: State) => state.global.isLoading,
    getError:       (state: State) => state.global.error,

    getIsGetGenreDetailSucceed: (state: State) =>
        state.genre.isGetDetailSucceed,
    getIsCreateGenreSucceed: (state: State) =>
        state.genre.isCreateSucceed,
    getIsUpdateGenreSucceed: (state: State) =>
        state.genre.isUpdateSucceed,
    getIsDeleteGenreSucceed: (state: State) =>
        state.genre.isDeleteSucceed,
}