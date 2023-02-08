<template>
    <div class="flex flex-col py-1">
        <div class="w-full flex items-center justify-between border-b border-black mb-2">
            <h2 class="font-bold uppercase w-2/5 md:w-1/3 text-[12px] lg:text-[16px]">Name</h2>
            <h2 class="text-center font-bold uppercase w-2/5 md:w-1/3 text-[12px] lg:text-[16px]">Genres</h2>
            <h2 class="text-right font-bold uppercase w-1/5 md:w-1/3 text-[12px] lg:text-[16px]">Score</h2>
        </div>
        <input type="search" class="px-2 py-1 border border-gray-200 bg-[#faf8f7] mb-2" placeholder="Search" v-model="state.search">
        <template v-for="(result, index) in results.data">
            <ListItem v-if="
                state.search === '' && state.currentFilter === 'All' && index <= state.limitItems || 
                state.search === '' && result.genres.includes(state.currentFilter) || 
                state.search !== '' && result.name.toLocaleLowerCase().includes(state.search)" :key="result.name" 
            :content="result" /> 
        </template>
        <button class="bg-black text-white px-1 whitespace-nowrap mx-auto mt-5 mb-1 w-[150px] rounded-lg text-[14px] lg:text-[18px]" v-if="state.limitItems < 250 && state.currentFilter === 'All'" @click.prevent="methods.loadMore(50)">LOAD MORE</button>
    </div>
</template>

<script>
import store from '../store'
import ListItem from './ListItem.vue';

export default {
    components: {
        ListItem,
    },

    setup() {
        const results = store.results;
        const state = store.state; 
        const methods = store.methods;

        return {
            results,
            state,
            methods,
        }
    }
}

</script>