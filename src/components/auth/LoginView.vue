<template>
    <div>
        <h2>登录表单</h2>
        <button @click="handelLogin">登录</button>
    </div>
</template>

<script>
export default {
    name: "LoginView",
    methods: {
        handelLogin () {
            login().then((params) => {
                this.$bus.$emit('auth.login.ok', params)
            })
        }
    }
}

function login () {
    return new Promise(resolve => {
        setTimeout(resolve, 400, {token: '--'})
    })
}
</script>

<style scoped>

</style>