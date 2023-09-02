<template>
    <div>
        <!-- <% provide(:title, custom_title('Sign Up'))%> -->
        <div class="container h-custom">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                        <p class="login_text lead fw-normal mb-0 me-3"></p>
                    </div>
                    <div class="register-stepper">
                        <div class="step" :class="{'step-active' : step === 1, 'step-done': step > 1}"><span class="step-number">1</span></div>
                        <div class="step" :class="{'step-active' : step === 2, 'step-done': step > 2}"><span class="step-number">2</span></div>
                        <div class="step" :class="{'step-active' : step === 3, 'step-done': step > 3}"><span class="step-number">3</span></div>
                        <div class="step" :class="{'step-active' : step === 3, 'step-done': step > 3}"><span class="step-number">4</span></div>
                        <div class="step" :class="{'step-active' : step === 3, 'step-done': step > 3}"><span class="step-number">5</span></div>
                    </div>
                    <form @submit.prevent="submitForm">
                        <transition name="slide-fade">
                            <section v-show="step === 1">
                                <!-- First name -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.first_name.$errors.length }">
                                            <label class="form-label" for="first_name">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="first_name" class="form-control form-control-l" :class="{ error: v$.first_name.$errors.length }" id="first_name">
                                        <div class="input-errors" v-for="error of v$.first_name.$errors" :key="error.$uid" placeholder="Enter your first name" autofocus>
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Last name -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.last_name.$errors.length }">
                                            <label class="form-label" for="last_name">Last Name</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="last_name" class="form-control form-control-l" :class="{ error: v$.last_name.$errors.length }" id="last_name">
                                        <div class="input-errors" v-for="error of v$.last_name.$errors" :key="error.$uid" placeholder="Enter your last name" autofocus>
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Gender -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.gender.$errors.length }">
                                            <label class="form-label">Gender</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <label :class="{ error: v$.gender.$errors.length }">
                                            <input v-model="gender" :class="{ error: v$.gender.$errors.length }" type="radio" value="female">
                                            Female
                                        </label>
                                        <label :class="{ error: v$.gender.$errors.length }">
                                            <input v-model="gender" :class="{ error: v$.gender.$errors.length }" type="radio" value="male">
                                            Male
                                        </label>
                                        <div class="input-errors" v-for="error of v$.gender.$errors" :key="error.$uid" placeholder="Enter your Gender">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Sexual Orientation -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.sexual_orientation.$errors.length }">
                                            <label class="form-label">sexual_orientation</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <label :class="{ error: v$.sexual_orientation.$errors.length }">
                                            <input v-model="sexual_orientation" :class="{ error: v$.sexual_orientation.$errors.length }" type="radio" value="female">
                                            Female
                                        </label>
                                        <label :class="{ error: v$.sexual_orientation.$errors.length }">
                                            <input v-model="sexual_orientation" :class="{ error: v$.sexual_orientation.$errors.length }" type="radio" value="male">
                                            Male
                                        </label>
                                        <div class="input-errors" v-for="error of v$.sexual_orientation.$errors" :key="error.$uid" placeholder="Enter your sexual_orientation">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Gender interest -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.gender_interest.$errors.length }">
                                            <label class="form-label">gender_interest</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <label :class="{ error: v$.gender_interest.$errors.length }">
                                            <input v-model="gender_interest" :class="{ error: v$.gender_interest.$errors.length }" type="radio" value="female">
                                            Female
                                        </label>
                                        <label :class="{ error: v$.gender_interest.$errors.length }">
                                            <input v-model="gender_interest" :class="{ error: v$.gender_interest.$errors.length }" type="radio" value="male">
                                            Male
                                        </label>
                                        <div class="input-errors" v-for="error of v$.gender_interest.$errors" :key="error.$uid" placeholder="Enter your gender_interest">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Birth date -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.birthdate.$errors.length }">
                                            <label class="form-label" for="birthdate">Birth date</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="birthdate" class="form-control form-control-l" :class="{ error: v$.birthdate.$errors.length }" id="birthdate" type="date">
                                        <div class="input-errors" v-for="error of v$.birthdate.$errors" :key="error.$uid" placeholder="Enter your Birthdate">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <a class="link_text" href="#" @click.prevent="next1()"><span class="arrow-prev"></span>Next </a>
                            </section>
                        </transition>
                        <transition name="slide-fade">
                            <section v-show="step === 2">
                                <!-- Email -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.email.$errors.length }">
                                            <label class="form-label" for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="email" class="form-control form-control-l" :class="{ error: v$.email.$errors.length }" id="email">
                                        <div class="input-errors" v-for="error of v$.email.$errors" :key="error.$uid" placeholder="Enter your Email">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Mobile Number -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.mobile_number.$errors.length }">
                                            <label class="form-label" for="mobile_number">Mobile Number</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="mobile_number" class="form-control form-control-l" :class="{ error: v$.mobile_number.$errors.length }" id="mobile_number">
                                        <div class="input-errors" v-for="error of v$.mobile_number.$errors" :key="error.$uid" placeholder="Enter your mobile number">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- country -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.country.$errors.length }">
                                            <label class="form-label" for="country">country</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="country" class="form-control form-control-l" :class="{ error: v$.country.$errors.length }" id="country">
                                        <div class="input-errors" v-for="error of v$.country.$errors" :key="error.$uid" placeholder="Enter your country">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- state_region -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.state_region.$errors.length }">
                                            <label class="form-label" for="state_region">state_region</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="state_region" class="form-control form-control-l" :class="{ error: v$.state_region.$errors.length }" id="state_region">
                                        <div class="input-errors" v-for="error of v$.state_region.$errors" :key="error.$uid" placeholder="Enter your state_region">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- city -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.city.$errors.length }">
                                            <label class="form-label" for="city">city</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="city" class="form-control form-control-l" :class="{ error: v$.city.$errors.length }" id="city">
                                        <div class="input-errors" v-for="error of v$.city.$errors" :key="error.$uid" placeholder="Enter your city">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <a class="link_text" href="#" @click.prevent="prev()"><span class="arrow-prev"></span>Previous </a>
                                <a class="link_text" href="#" @click.prevent="next2()"><span class="arrow-prev"></span>Next </a>
                            </section>
                        </transition>
                        <transition name="slide-fade">
                            <section v-show="step === 3">
                                <!-- school -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.school.$errors.length }">
                                            <label class="form-label" for="school">school</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="school" class="form-control form-control-l" :class="{ error: v$.school.$errors.length }" id="school">
                                        <div class="input-errors" v-for="error of v$.school.$errors" :key="error.$uid" placeholder="Enter your school">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <a class="link_text" href="#" @click.prevent="prev()"><span class="arrow-prev"></span>Previous </a>
                                <a class="link_text" href="#" @click.prevent="next3()"><span class="arrow-prev"></span>Next </a>
                            </section>
                        </transition>
                        <transition name="slide-fade">
                            <section v-show="step === 4">
                                <!-- bio -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.bio.$errors.length }">
                                            <label class="form-label" for="bio">bio</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <textarea v-model="bio" class="form-control form-control-l" :class="{ error: v$.bio.$errors.length }" id="bio"></textarea>
                                        <div class="input-errors" v-for="error of v$.bio.$errors" :key="error.$uid" placeholder="Enter your bio">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <a class="link_text" href="#" @click.prevent="prev()"><span class="arrow-prev"></span>Previous </a>
                                <a class="link_text" href="#" @click.prevent="next4()"><span class="arrow-prev"></span>Next </a>
                            </section>
                        </transition>
                        <transition name="slide-fade">
                            <section v-show="step === 5">
                                <!-- Password -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.password.$errors.length }">
                                            <label class="form-label" for="password">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="password" class="form-control form-control-l" :class="{ error: v$.password.$errors.length }" id="password" type="password">
                                        <div class="input-errors" v-for="error of v$.password.$errors" :key="error.$uid" placeholder="Enter your Password">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Password Confirmation -->
                                <div class="row input-field-signup mt-3">
                                    <div class="col-sm-6 col-form-label">
                                        <div :class="{ error: v$.password_confirmation.$errors.length }">
                                            <label class="form-label" for="password_confirmation">Password Confirmation</label>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 err-card">
                                        <input v-model="password_confirmation" class="form-control form-control-l" :class="{ error: v$.password_confirmation.$errors.length }" id="password_confirmation" type="password">
                                        <div class="input-errors" v-for="error of v$.password_confirmation.$errors" :key="error.$uid" placeholder="Enter your Password Confirmation">
                                            <div class="error-msg">{{ error.$message }}</div>
                                        </div>
                                    </div>
                                </div>
                                <a class="link_text" href="#" @click.prevent="prev()"><span class="arrow-prev"></span>Previous </a>
                                <div class="d-flex justify-content-between align-items-center">
                                    
                                </div>
                                <div class="text-right mt-4">
                                    <button type="submit" class="btn btn-primary btn-lg input-field-signup" style="padding-left: 2.5rem; padding-right: 2.5rem;">Sign up</button>
                                    <p class=" input-field-signup">Already have an account?
                                        <!-- <%= link_to 'Login', login_path, class: 'link-primary'%> -->
                                        <a href="#">Login</a>
                                    </p>
                                </div>
                            </section>
                        </transition>
                    </form>
                </div>
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Login to MovieMagic">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core';
import SignUpUserMutation from '@/graphql/Signup.gql';
import SignInUser from '@/graphql/Login.gql';
import { required, email, helpers, numeric, minLength, maxLength, sameAs, isUnique } from '@vuelidate/validators';
import CheckEmail from '@/graphql/CheckEmail.gql';
import { onLogin, createProvider } from '@/vue-apollo.js';
import { mapState, mapMutations } from 'vuex';
const fields = {
    page1: ['first_name', 'last_name', 'gender', 'sexual_orientation', 'birthdate', 'gender_interest'],
    page2: ['email', 'mobile_number', 'country', 'state_region', 'city'],
    page3: ['school'],
    page4: ['bio'],
    page5: ['password', 'password_confirmation']
};
export default {
    name: 'LoginForm',
    setup () { return { v$: useVuelidate() } },
    data () {
        return {
            steps: {},
            step: 1,
            hasSeenCongrats: false,
            first_name: null,
            last_name: null,
            mobile_number: null,
            email: null,
            birthdate: null,
            gender: null,
            sexual_orientation: null,
            gender_interest: null,
            country: null,
            state_region: null,
            city: null,
            school: null,
            bio: null,
            password: null,
            password_confirmation: null,
        }
    },
    validations () {
        const alphabeticWithSpaces = value => /^[a-zA-Z\s]*$/.test(value);
        const datePattern = value => /^\d{4}-\d{2}-\d{2}$/.test(value);
        return {
            first_name: {
                required: helpers.withMessage('First Name is required.', required),
                alphabeticWithSpaces: helpers.withMessage('First Name can only contain letters and spaces.', alphabeticWithSpaces),
            }, 
            last_name: {
                required: helpers.withMessage('Last Name is required.', required),
                alphabeticWithSpaces: helpers.withMessage('Last Name can only contain letters and spaces.', alphabeticWithSpaces),
            },
            mobile_number: { required: helpers.withMessage('Mobile Number is required.', required), numeric },
            email: {
                required: helpers.withMessage('Email is required.', required),
                isUnique: helpers.withAsync(this.isEmailTaken, isUnique),
                email
            },
            birthdate: { 
                required: helpers.withMessage('Birthday is required.', required), 
                datePattern: helpers.withMessage('YYYY/DD/MM', datePattern) },
            gender: { required },
            sexual_orientation: { required },
            gender_interest: { required },
            country: { required },
            state_region: { required },
            city: { required },
            school: {},
            bio: { required },
            password: { required: helpers.withMessage('Password is required.', required), minLength: minLength(8), maxLength: maxLength(20) },
            password_confirmation: { sameAs: sameAs(this.password) }
        }
    },
    methods: {
        ...mapMutations(['setAuthenticated']),
        toggleAuthentication() {
            this.setAuthenticated(!this.isAuthenticated);
        },
        prev() {
            this.step--;
        },
        field_to_validate(fields) {
            const last_step = 5
            let error = 0;
            for (const field of fields) {
                this.v$[field].$touch();
                if (this.v$[field].$error) error++;
            }
            if (!error) {
                if (this.step != last_step) this.step++;
                return true;
            }
        },
        next1() {
            this.field_to_validate(fields.page1);
        },
        next2() {
            this.field_to_validate(fields.page2);
            
        },
        next3() {
            this.field_to_validate(fields.page3);
        },
        next4() {
            this.field_to_validate(fields.page4);
        },
        async isEmailTaken (value) {
            if (!value) return true; // Don't validate if value is empty
            const response = await this.$apollo.mutate({
                mutation: CheckEmail, // mutation CheckEmail query
                variables: {
                    email: value
                }
            });
            const result = !response.data.emailExists.user
            return result
        },
        async submitForm() {
            if (this.field_to_validate(fields.page5) === true) {
                try {
                    const response = await this.$apollo.mutate({
                        mutation: SignUpUserMutation,
                        variables: {
                            "signupInput": {
                                "country": this.country,
                                "stateRegion": this.state_region,
                                "city": this.city,
                                "gender": this.gender,
                                "sexualOrientation": this.sexual_orientation,
                                "firstName": this.first_name,
                                "lastName": this.last_name,
                                "birthdate": this.birthdate,
                                "mobileNumber": this.mobile_number,
                                "genderInterest": this.gender_interest,
                                "authProvider": {
                                    "credentials": {
                                        "email": this.email,
                                        "password": this.password,
                                        "passwordConfirmation": this.password_confirmation
                                    }
                                }
                            }
                        }
                    });
                    if (response.data.createUser.errors > 0) {
                        console.log(response.data.createUser.errors);
                    } else {
                        const login = await this.forceLogin();
                        if (login && this.$route.path !== '/') {
                            this.$router.push('/');
                        } else {
                            alert('Something went wrong. Please try again later');
                        }
                    }
                } catch (error) {
                    console.error("Client Error:", error);
                }
            }
        },
        async forceLogin() {
            const response = await this.$apollo.mutate({
                mutation: SignInUser,
                variables: {
                    credentials: {
                        email: this.email,
                        password: this.password
                    }
                },
            });
            const token = await response.data.login.token
            // assign the Authorization header with the token provided by the backend
            const headers = { Authorization: token };
            // tells vue that authentication is true and chance some components
            this.toggleAuthentication();
            // store the token in localStorate 
            // using the default onLogin method provided by vue-apollo.js
            await onLogin(createProvider({}, headers), token);
            return response.data.login === null ? false : true;
        }
    },
    computed: {
        ...mapState(['isAuthenticated']),
    },
}
</script>

<style>
.error, .error:focus, .error input[type="radio"] {
    border-color: red;
    color: red;
}
.input-errors {
    color: red;
}
.err-card {
    position: relative;
}
.error-msg {
    position: absolute;
    font-size: 10px;
    bottom: -8px;
    left: 17px;
}
.register-stepper {
    display: none;
}
</style>