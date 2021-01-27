<template>
  <v-container fill-height class="bd pa-0 grey darken-4" fluid>
    <v-row row no-gutters>
      <v-col fill-height cols="3">
        <v-card
          color="grey darken-3  px-0 "
          height="100%"
          style="position: relative"
        >
          <v-card-title primary class="title text-center">
            <v-layout column>
              <v-flex>
                <div class="display-1 font-weight-bold">
                  {{ Header["name"] }}
                </div>
              </v-flex>
              <v-flex>
                <div class="title">{{ Header["Profession"] }}</div>
              </v-flex>
            </v-layout>
          </v-card-title>
          <v-card-text class="px-0">
            <v-layout column>
              <v-flex class="text-center">
                <img height="250px" :src="require('@/assets/profile.png')" />
              </v-flex>
              <v-flex>
                <br />
                <div class="black px-2 py-2 title">Personal Info</div>
                <br />
              </v-flex>
              <v-flex>
                <div
                  class="px-2"
                  v-for="(value, key) in Personal"
                  v-bind:key="key"
                >
                  <div class="subheading font-weight-bold">{{ key }}:</div>
                  <div class="body-2 font-weight-light">{{ value }}</div>
                </div>
              </v-flex>
              <v-flex>
                <br />
                <div class="black px-2 py-2 title">Skills</div>
                <br />
              </v-flex>
              <v-flex>
                <div
                  class="px-2"
                  v-for="(value, key) in Skills"
                  v-bind:key="key"
                >
                  <div class="subheading font-weight-bold">
                    {{ value.name }}
                  </div>
                  <v-rating
                    dark
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    v-model="value.rate"
                    background-color="white lighten-3"
                    color="white"
                    half-increments
                    readonly
                  ></v-rating>
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card height="100%" class="grey darken-4">
          <v-card-text>
            <v-layout column>
              <v-flex>
                <p class="my-2" v-for="item in Summary" v-bind:key="item.id">
                  {{ item }}
                </p>
              </v-flex>
              <span v-for="(value, key) in All" v-bind:key="key">
                <v-flex>
                  <v-divider></v-divider>
                  <div class="py-2 title">{{ key }}</div>
                  <v-divider></v-divider>
                  <br />
                </v-flex>
                <v-flex v-for="item in value" v-bind:key="item.id">
                  <v-layout row>
                    <v-flex sm10 class="pl-4">
                      <template v-if="item === 'effective'">
                        <effective />
                      </template>
                      <template v-else>
                        <div>
                          <div class="title">{{ item["Line"] }}</div>
                          <div>
                            <div class="subtitle-2">
                              {{ item["date"][0] }}{{ item["date"][1] }}
                            </div>
                            <p>{{ item["Experience"] }}</p>
                          </div>
                        </div>
                      </template>
                    </v-flex>
                  </v-layout>
                </v-flex>
              </span>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import effective from "~/components/effective.vue";
export default {
  components: {
    effective,
  },
  data: () => ({
    emptyIcon: "mdi-star-outline",
    fullIcon: "mdi-star",
    halfIcon: "mdi-star-half",
    Header: { name: "Allani Ahmed", Profession: "full-stack developper" },
    Personal: {
      Address: "SAHBI 1 KAIROUAN Tunis",
      Phone: "+21629667239",
      "E-mail": "allania7med11@gmail.com",
      "Date of birth": "1991-04-25",
    },
    Summary: [
      `I am a self taught developer for 2 years where I combined my civil engineer background ,coding skills to create an online structure analysis software for engineers intuitive and easy to use.
        I get nano degree front end in udacity after finishing 5 projects that I am proud of
        I am currently a Hacker in Residence in RBK(Hack Reactor) where I become not only a technical mentor but also a life mentor encouraging students to challenge themselves and helping them become autonomous developers able to face any future challenges.
        `,
      `For more information visit:  https://about.effectivewebapp.com/ `,
    ],
    All: {
      Experience: [
        {
          date: ["2016-", "2017"],
          Line: "civil engineer supervisor at Kerkena Paradise",
          Experience: `Multitasking to watch over different teams and activities at the same time.
liaison between groups provide reports to project engineers and others who monitor progress 
or make changes to plans
`,
        }
      ],
      Education: [
        {
          date: ["2011-", "2013"],
          Line: "Preparatory Institute for Engineering Studies of Nabeul",
          Experience: `learn from curriculum of intense mathematics, physics and industrial science courses to prepare  
       for the national engineering selective exams`,
        },
        {
          date: ["2013-", "2016"],
          Line: `National Engineering School of Tunis`,
          Experience: `learn engineering sciences (maths, physics, mechanics and computer science) and 
       modules specialized in construction techniques,geotechnics, infrastructures, hydraulics`,
        },
      ],
    },
    Skills: [
      { name: "Html,Css,Javascript", rate: 4 },
      { name: "ES6,Vue,Nuxt", rate: 4.5 },
      { name: "Python,Django,DRF", rate: 4.5 },
      { name: "Cypress,Pytest", rate: 3.5 },
      { name: "SQL,Postgresql", rate: 4 },
      { name: "Photoshop,Filmora", rate: 3.5 },
      { name: "Matlab,Autocad,Autodesk Robot", rate: 4 },
    ],
  }),
};
</script>

<style>
.container.fill-height {
  flex-wrap: wrap;
}
.container.fill-height > .row {
  flex: 1 1 100%;
}
.v-application p {
  margin-bottom: 8px;
}
div {
  color: white !important;
}
</style>
