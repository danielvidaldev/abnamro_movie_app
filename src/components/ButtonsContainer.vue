<template>
    <div class="flex w-full items-center pb-2 max-w-[1350px] p-4 pt-0 space-x-[5px] flex-wrap pt-4">
        <button class="bg-black text-white px-1 whitespace-nowrap my-[5px] text-[12px] lg:text-[16px]" v-for="(genre, index) in genres" :key="index" @click.prevent="methods.filterGenre(genre)"> {{ genre }} </button>
    </div>
</template>

<script>
import store from '../store'

export default {
    setup() {
        const genres = store.genres;
        const methods = store.methods;

        return {
            genres,
            methods,
        }
    }
}

</script>