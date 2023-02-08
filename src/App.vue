<template>
    <MainLayout>
        <ButtonsContainer />
        <ListLayout>
            <ShowsList />
        </ListLayout>
        <ShowPageModal v-if="state.showPage" />
    </MainLayout>
</template>

<script>
import ShowsList from './components/ShowsList.vue'
import MainLayout from './layouts/MainLayout.vue';
import ListLayout from './layouts/ListLayout.vue';
import ButtonsContainer from './components/ButtonsContainer.vue';
import ShowPageModal from './components/ShowPageModal.vue'

import store from './store'

export default {
    name: 'App',
    components: {
        ShowsList,
        MainLayout,
        ButtonsContainer,
        ListLayout, 
        ShowPageModal,
    },
    setup() {
        const state = store.state; 

        return {
            state,
        }
    }
}
</script>
