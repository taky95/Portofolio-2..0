<template>
  <v-col class="about" justify="center" align="center">
    <v-row cols="6" md="4">
      <v-col cols="6" md="4">
        <v-row style="justify-content: center">
          <profile />
        </v-row>
        <v-row style="justify-content: center">
          <socialBtn />
        </v-row>
      </v-col>
      <v-col>
        <div class="bio-header">
          <h1>Takumi Minohara</h1>
          <h2>A developer with creative mind</h2>
          <p>
            Debra Carroll knows that successful students become successful adults. This is her 15th year at Edison Elementary School and her 10th year teaching fourth grade. So far, fourth grade is her favorite grade to teach! Mrs. Carroll was the 2011 Newell Unified School District Teacher of the Year, and received her National Board Certification in 2013. She loves science and majored in biology at Arizona State University, where she also earned her teaching credential and Master of Education degree. Mrs. Carroll is excited to begin the best year ever!
          </p>
          <div class="text-right">
            <v-btn class="resume-btn" color="accent">
              Resume
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row cols="6" md="4">
      <toolbox />
    </v-row>
    <v-row cols="6" md="4">
      <toolbox />
    </v-row>
  </v-col>
</template>

<script>
import toolbox from '~/components/Toolbox.vue'
import profile from '~/components/Profile.vue'
import socialBtn from '~/components/SocialBtn.vue'

export default {
  components: {
    toolbox,
    profile,
    socialBtn
  },
  head () {
    return {
      title: 'about'
    }
  }
}
</script>

<style lang="scss">
.about{
  max-width: 1200px;
  margin: 0 auto;
}

.social-btn{
  display: flex;
}

.bio-header{
  text-align: left;
  font-weight: 400;
}

.bio-header h1, .bio-header h2{
  font-weight: lighter !important;
}

.resume-btn{
}
</style>
