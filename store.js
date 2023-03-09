import { reactive } from 'vue'

const store = reactive({
searchMovies: '',
movies: [],
tv: [],
confing:{
    API_KEY: 'b126367f63d095daf4b25ffe558a9c02',
    BASE_URI: 'https://api.themoviedb.org/3'
}
})

export default store