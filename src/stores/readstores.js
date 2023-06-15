import { defineStore } from 'pinia';

export const useReadStore = defineStore('readid', {
    state: () => {
        return {
            readid: '',
        }
    },
});