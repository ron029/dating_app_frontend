<template>
    <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Login to MovieMagic">
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1 signin-form">
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p class="login_text lead fw-normal mb-0 me-3"></p>
            </div>
            <form @submit.prevent="submitForm">
                <!-- Email input -->
                <div class="input-field-signin">
                    <div :class="{ error: v$.email.$errors.length }">
                        <label class="form-label">Email
                            <input v-model="email" class="form-control form-control-l" :class="{ error: v$.email.$errors.length }">
                            <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div>
                        </label>
                    </div>
                </div>
                <!-- Password input -->
                <div class="input-field-signin">
                    <div :class="{ error: v$.password.$errors.length }">
                        <label class="form-label">Password
                            <input v-model="password" class="form-control form-control-l" :class="{ error: v$.password.$errors.length }" type="password">
                            <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid">
                                <div class="error-msg">{{ error.$message }}</div>
                            </div> 
                        </label>                       
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <!-- Checkbox -->
                    <!-- <div class="form-check mb-0">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                        <label class="form-check-label" for="form2Example3"> Remember me </label>
                    </div>
                    <a href="#!" class="text-body">Forgot password?</a> -->
                </div>
                <div class="text-right text-lg-start mt-4 pt-2">
                    <button type="submit" class="btn btn-primary btn-lg input-field-signin">Log in</button>
                    <p class="input-field-signin">Don't have an account? <router-link to="/signup">Signup</router-link></p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'
import SignInUser from '@/graphql/Login.gql';
import { onLogin, createProvider } from '@/vue-apollo.js';
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'LoginForm',
    setup () { return { v$: useVuelidate() } },
    data () {
        return {
            email: null,
            password: null
        }
    },
    validations () {
        return {
            email: { required: helpers.withMessage('Email is required.', required), email },
            password: { required: helpers.withMessage('Password is required.', required) }
        }
    },
    computed: {
        ...mapState(['isAuthenticated']),
    },
    methods: {
        async submitForm() {
            this.v$.$touch()
            if (!this.v$.$error) {
                const response = await this.$apollo.mutate({
                    mutation: SignInUser,
                    variables: {
                        credentials: {
                            email: this.email,
                            password: this.password
                        }
                    },
                });
                // Redirect to homepage for valid credentials
                if (response.data.login === null) {
                    alert('Invalid credentials');
                } else {
                    // get the response token from the backend
                    const token = response.data.login.token
                    // assign the Authorization header with the token provided by the backend
                    const headers = { Authorization: token };
                    // tells vue that authentication is true and chance some components
                    this.toggleAuthentication();
                    // store the token in localStorate 
                    // using the default onLogin method provided by vue-apollo.js
                    await onLogin(createProvider({}, headers), token);
                    // redirect to Homepage
                    this.$router.push('/');
                }
            }
        },
        ...mapMutations(['setAuthenticated']),
        toggleAuthentication() {
            this.setAuthenticated(!this.isAuthenticated);
        },
    },

}
</script>

<style>
.error, .error:focus {
    border-color: red;
    color: red;
}
.input-errors {
    color: red;
}
.form-label {
    position: relative;
}
.error-msg {
    position: absolute;
    font-size: 10px;
    bottom: -13px;
    left: 0px;
}
</style>