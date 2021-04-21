<template>
  <div class="contactForm">
    <v-form v-if="!sent" v-model="valid">
      <v-text-field
        v-model="formData.yourName"
        color="accent"
        class="form-i"
        label="Name"
        :rules="nameRules"
        required
      />
      <v-text-field
        v-model="formData.yourEmail"
        color="accent"
        class="form-i"
        label="E-mail"
        :rules="emailRules"
        required
      />
      <v-text-field
        v-model="formData.yourSubject"
        color="accent"
        class="form-i"
        label="Subject"
        :rules="nameRules"
        required
      />
      <v-textarea
        v-model="formData.yourMessage"
        color="accent"
        class="form-i"
        outlined
        name="input-7-4"
        label="Comment"
        :rules="nameRules"
        required
      />
      <v-btn
        color="accent"
        :disabled="!valid"
        @click.prevent="submit"
        aria-label="Submit"
      >
        Submit
      </v-btn>
    </v-form>
    <transition name="fade">
      <h2 v-if="sent">
        {{ responseData.message }}
      </h2>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        yourName: '',
        yourEmail: '',
        yourSubject: '',
        yourMessage: ''
      },
      valid: true,
      sent: false,
      responseData: '',
      nameRules: [
        v => !!v || 'This field is required'
        // v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  mounted () {
    this.fadeInForm()
  },
  methods: {
    fadeInForm () {
      const gsap = this.$gsap.timeline()
      const form = document.getElementsByClassName('form-i')
      for (let i = 0; i < form.length; i++) {
        const child = this.$gsap.timeline()
        child.fromTo(form[i], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 2, ease: 'expo.out' })
        gsap.add(child, '<0.2')
      }
    },
    submit () {
      const axiosConfig = {
        headers: {
          'Content-Type': 'multipart/form-data; charset=utf-8'
        }
      }
      const contactFormData = new FormData()
      contactFormData.set('yourName', this.formData.yourName)
      contactFormData.set('yourEmail', this.formData.yourEmail)
      contactFormData.set('yourSubject', this.formData.yourSubject)
      contactFormData.set('yourMessage', this.formData.yourMessage)
      this.$axios
        .post('/contact-form-7/v1/contact-forms/157/feedback/', contactFormData, axiosConfig)
        .then((response) => {
          this.responseData = response.data
          this.dataSent()
        })
        .catch((error) => {
          // console.log(error)
        })
    },
    dataSent () {
      this.sent = !this.sent
    }
  }
}
</script>

<style lang="scss" scoped>
.contactForm{
  padding: 10%;
}

.contactForm h2{
  font-weight: normal;
}

.fade-enter-active {
  transition: opacity 1s;
}
.fade-enter{
  opacity: 0;
}
</style>
