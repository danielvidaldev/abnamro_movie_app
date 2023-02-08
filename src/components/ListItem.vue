<template>
    <div class="flex py-1 border-b border-[#D3D3D3] cursor-pointer" aria-label="open show details" @click.prevent="methods.toggleShowPage(content)">
        <h3 class="w-2/5 md:w-1/3 text-[12px] lg:text-[16px]">{{ content.name }}</h3>
        <div class="flex space-x-[10px] w-2/5 md:w-1/3 justify-center whitespace-nowrap flex-wrap">
            <template v-if="content.genres">
                <p class="text-[12px] lg:text-[16px]" v-for="(genre, index) in content.genres" :key="index">{{ genre }}</p>
            </template>
        </div>
        <h5 v-if="content.rating.average" class="w-1/5 md:w-1/3 text-right text-[12px] lg:text-[16px]">{{ content.rating.average }}</h5>
    </div> 
</template>

<script>
import store from '../store'

export default {
    props: {
        content: {
            type: Object,
            default: () => ({

            })
        }
    },
    setup() {
        const methods = store.methods;

        return {
            methods,
        }
    }
}


</script>