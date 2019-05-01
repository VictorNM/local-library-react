export const getAllGenresSelector = (state: any) =>
    state.allIds.map( (id: number) => state.byId[id]);

export const getGenreById = (state: any, id: number) =>
    state.byId[id]

export const getCurrentGenre = (state: any) => 
    state.current