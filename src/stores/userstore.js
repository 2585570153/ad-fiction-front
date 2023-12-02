import { defineStore } from 'pinia';
import {ref} from "vue";
import {UserLoginAPI} from "@/apis/userAPI";

export const useUserStore = defineStore('user', () => {
        const userinfo = ref({})
        const usermsg  =ref('')

        const getUserInfo = async (username,password) => {
            const res =await UserLoginAPI({username,password})
            userinfo.value=res
            usermsg.value=res.msg
            localStorage.setItem("user", JSON.stringify(userinfo.value));
        }

        return{
            userinfo,
            usermsg,
            getUserInfo,
        }
    },)
