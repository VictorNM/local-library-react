export default {
    getAllGenres: (state: any)      => state.allIds.map((id: number) => state.byId[id]),
    getCurrentGenre: (state: any)   => state.current
}