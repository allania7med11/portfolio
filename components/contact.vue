<template>
  <v-container fluid class="grey darken-4 white--text pa-5 ma-0 text-center">
    <br>
    <br>
    <br>
    <v-row>
      <v-col>
        <div
          class="display-1 font-weight-bold text-center mb-4"
          style="text-decoration: underline;"
        >CONTACT</div>
        <div class="font-weight-bold">
          Have a question or want to work together?</div>
      </v-col>
    </v-row>
      <v-row justify="center">
        <v-col md="8">
          <v-alert v-if="success" dismissible type="success">
            Success! Email sent.
          </v-alert>
          <v-alert v-if="error" dismissible type="error">
            An error occurred
          </v-alert>
          <v-card data-aos="zoom-in" flat text class="grey darken-4 white--text px-3 ma-0 text-center">
            <v-card-text>
              <form>
                <v-text-field
                  dark
                  v-model="from_email"
                  :error-messages="from_emailErrors"
                  label="From Email"
                  required
                  @input="$v.from_email.$touch()"
                  @blur="$v.from_email.$touch()"
                />
                <v-text-field
                  dark
                  v-model="subject"
                  :error-messages="subjectErrors"
                  label="Subject"
                  required
                  @input="$v.subject.$touch()"
                  @blur="$v.subject.$touch()"
                />
                <v-textarea
                  dark
                  v-model="message"
                  :error-messages="messageErrors"
                  label="message"
                  required
                  @input="$v.message.$touch()"
                  @blur="$v.message.$touch()"
                />
              </form>
            </v-card-text>
            <v-card-actions class="justify-center white--text">
              <v-btn
                outlined color="white"
                class="font-italic font-weight-bold px-4"
                large
                rounded
                data-cy="submit"
                @click="submit"
              >
                Send Email
                <Fas class="ml-2" i="paper-plane" />
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
  </v-container>
</template>
<script>
import { validationMixin } from "vuelidate"
import { required, email } from "vuelidate/lib/validators"

export default {
  head: {
    titleTemplate: "Contact Us | EffectiveWebApp",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "If you have any  questions  please feel free to contact us."
      }
    ]
  },
  mixins: [validationMixin],

  validations: {
    from_email: { required, email },
    subject: { required },
    message: { required }
  },

  data: () => ({
    isActive1: false,
    from_email: "",
    subject: "",
    message: "",
    success: false,
    error: false
  }),

  computed: {
    from_emailErrors() {
      const errors = []
      if (!this.$v.from_email.$dirty) return errors
      !this.$v.from_email.email && errors.push("Must be valid e-mail")
      !this.$v.from_email.required && errors.push("From Email is required")
      return errors
    },
    subjectErrors() {
      const errors = []
      if (!this.$v.subject.$dirty) return errors
      !this.$v.subject.required && errors.push("subject is required.")
      return errors
    },
    messageErrors() {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.required && errors.push("message is required.")
      return errors
    }
  },

  methods: {
    async submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.success = false
        this.error = false
        try {
          await this.$axios.$post("/api/users/contact/", {
            from_email: this.from_email,
            subject: this.subject,
            message: this.message
          })
          this.success = true
        } catch (e) {
          console.log(e)
          this.error = true
        }
      }
    }
  }
}
</script>
