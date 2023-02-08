<template>
    <div class="absolute h-full w-full bg-black/25 p-4 flex items-center justify-center">   
        <div class="z-10 relative max-h-full w-full items-center justify-center max-w-[1350px] border border-[#D3D3D3] rounded-lg p-4 md:px-6 md:py-8 bg-[#faf8f7] overflow-y-scroll scrollbar-thin scrollbar-thumb-[#D3D3D3] scrollbar-thumb-rounded-full">
            <span class="absolute top-2 right-4 cursor-pointer font-bold text-[20px]" @click.prevent="methods.toggleShowPage()">X</span>
            <div class="flex flex-col md:flex-row md:space-x-[40px] w-full">
                <div class="max-h-1/2 md:max-h-full object-cover mx-auto md:mx-0 flex w-2/3 md:w-1/2">
                    <img :src="state.contentPage.image.original" :alt="`${state.contentPage.name} main picture`">
                </div>
                <div class="flex flex-col w-full md:w-2/3 space-y-[5px] md:space-y-[15px] pt-4 md:pt-0">
                    <h1 class="font-bold text-[20px] md:text-[32px]">{{ state.contentPage.name }} <template v-if="state.contentPage.rating.average">({{ state.contentPage.rating.average  }})</template></h1>
                    <div class="flex space-x-[10px]" v-if="state.contentPage.genres">
                        <p class="underline cursor-pointer" v-for="(genre, index) in state.contentPage.genres" :key="index" @click.prevent="methods.filterGenre(genre)">{{ genre }}</p>
                    </div>
                    <p v-if="state.contentPage.language">Original language: {{ state.contentPage.language }}</p>
                    <p v-if="state.contentPage.network.country.name">Produced in: {{ state.contentPage.network.country.name }}</p>
                    <p v-if="state.contentPage.premiered">Premiered: {{ state.contentPage.premiered }}</p>
                    <p v-if="state.contentPage.ended">Ended: {{ state.contentPage.ended }}</p>
                    <p v-if="state.contentPage.network.name">Produced by: {{ state.contentPage.network.name }}</p>
                    <p v-if="state.contentPage.type">Type: {{ state.contentPage.type }}</p>
                    <p v-if="state.contentPage.officialSite">Official website: <a :href="state.contentPage.officialSite" aria-label="official website" target="_blank" class="underline"> {{ state.contentPage.officialSite }}</a></p>
                    <p v-if="state.contentPage.summary" class="font-bold pt-2">Summary:</p>
                    <p v-if="state.contentPage.summary" class="flex flex-col space-y-[10px]" v-html="state.contentPage.summary"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import store from '../store'

export default {

    setup() {
        const state = store.state; 
        const methods = store.methods;

        return {
            state,
            methods,
        }
    }
}

</script>