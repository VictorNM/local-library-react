import reducer from './reducer';

type State = ReturnType<typeof reducer>

export default {
    getIsLoading:   (state: State) => state.global.isLoading,
    getError:       (state: State) => state.global.error,

    getIsGetBookDetailSucceed: (state: State) =>
        state.book.isGetDetailSucceed,
    getIsCreateBookSucceed: (state: State) =>
        state.book.isCreateSucceed,
    getIsUpdateBookSucceed: (state: State) =>
        state.book.isUpdateSucceed,
    getIsDeleteBookSucceed: (state: State) =>
        state.book.isDeleteSucceed,

    getIsGetAuthorDetailSucceed: (state: State) =>
        state.author.isGetDetailSucceed,
    getIsCreateAuthorSucceed: (state: State) =>
        state.author.isCreateSucceed,
    getIsUpdateAuthorSucceed: (state: State) =>
        state.author.isUpdateSucceed,
    getIsDeleteAuthorSucceed: (state: State) =>
        state.author.isDeleteSucceed,

    getIsGetGenreDetailSucceed: (state: State) =>
        state.genre.isGetDetailSucceed,
    getIsCreateGenreSucceed: (state: State) =>
        state.genre.isCreateSucceed,
    getIsUpdateGenreSucceed: (state: State) =>
        state.genre.isUpdateSucceed,
    getIsDeleteGenreSucceed: (state: State) =>
        state.genre.isDeleteSucceed,
}