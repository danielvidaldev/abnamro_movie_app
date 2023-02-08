import { ref } from 'vue'
import axios from 'axios'

const state = ref({
    currentFilter: 'All',
    search: '',
    limitItems: 50,
    showPage: false,
    contentPage: {},
})

const results = ref([]); 

const fetchingData = () => {
    axios.get('https://api.tvmaze.com/shows')
        .then(data => results.value = data)
        .catch((error) => console.log(error))
        console.log(results)
}
fetchingData()

const genres = ["All","Drama", "Action", "Anime", "Horror", "Fantasy", "Thriller", "Action", "Crime", "Romance", "Science-Fiction", "Supernatural", "Espionage", "Music", "Mystery", "Medical", "Legal", "Comedy", "Family", "Western", "War"]

const methods = {
    filterGenre(genre) {
        state.value.currentFilter = genre;
        if (state.value.showPage) {
            state.value.showPage = !state.value.showPage;
            state.value.contentPage = {}
        }
        if (state.value.limitItems !== 50) {
            state.value.limitItems = 50;
        }
    },

    loadMore(value) {
        state.value.limitItems = state.value.limitItems + value;
    },

    toggleShowPage(content) {
        state.value.showPage = !state.value.showPage;
        state.value.contentPage = content;
        if (!state.value.showPage) {
            state.value.contentPage = {}
        }
    }
}

export default {
    genres,
    methods,
    state,
    results,
}