<template>
  <v-app id="inspire">
    <v-app-bar app color="gray darken-1" flat>
      <v-avatar :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'" size="32"></v-avatar>
      

      <v-tabs centered class="ml-n9" color="black darken-1">
        <img src="../logo12.png" size="10" alt="">
        <v-spacer></v-spacer>
        <v-tab v-for="link in links" :key="link">
          {{ link }}
        </v-tab>
        <v-spacer></v-spacer>
        
      </v-tabs>
      
    </v-app-bar>

    <v-main class="grey lighten-3">
      <template>
        <v-carousel>
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition"
            transition="fade-transition"></v-carousel-item>
        </v-carousel>
      </template>
      <br>
      <h2 align="center">FAKULTETI</h2>
      <v-divider class="mx-4"></v-divider> 
<v-row>
  <v-col>
<v-card :loading="loading" class="mx-auto my-12" max-width="400">
  <template slot="progress">
    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
  </template>

  <v-img height="" src="../FPMOZ.png"></v-img>

<v-card-text></v-card-text>
  <v-divider class="mx-4"></v-divider>
  <v-card-title>Studij:</v-card-title>
  <v-card-text>
 <ul>
  <li>Biologija</li>
  <li>Edukacijska rehabilitacija</li>
  <li>Fizika</li>
  <li>Geografija (smjerovi: Geografija, Turizam i zaštita okoliša)</li>
  <li>Informatika</li>
  <li>Kemija</li>
  <li> Kineziologija (sveučilišni i stručni)</li>
  <li> Matematika</li>
  <li>Pedagogija</li>
  <li>Predškolski odgoj (sveučilišni i stručni)</li>
  <li>Razredna nastava</li>
  <li> Promet i logistika (sveučilišni i stručni)</li>
 </ul>
</v-card-text>
<v-divider class="mx-4"></v-divider>

  <v-card-actions>
    <v-btn color="blue" text @click="reserve">
      Upisi se!
    </v-btn>
    <v-btn color="blue" text @click="reserve">
      Posjeti Web!
    </v-btn>
  </v-card-actions>

</v-card>
</v-col>
<v-col>
<v-card :loading="loading" class="mx-auto my-12" max-width="400" height="">
  <template slot="progress">
    <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
  </template>

  <v-img height="" src="../FSRE.png"></v-img>
<v-card-text></v-card-text>
<v-divider class="mx-4"></v-divider>
<v-card-title>Studij:</v-card-title>
<v-card-text>
  <ul>
    <li>
      Strojarstvo
      
    </li>
    <li>
    Računarstvo
    </li>
    <li>
      Elektrotehnika

    </li>
  </ul>
  <v-card-text></v-card-text>
  <v-card-text></v-card-text>
  <v-card-text></v-card-text>
  <v-card-text></v-card-text>
  <v-card-text></v-card-text>
  <v-card-text></v-card-text>
  <v-card-text></v-card-text>
</v-card-text>
  <v-divider class="mx-4"></v-divider>

  <v-card-actions>
    <v-btn color="blue" text @click="reserve">
      Upisi se!
    </v-btn>
    <v-btn color="blue" text @click="reserve">
     Posjeti web!
    </v-btn>
    
  </v-card-actions>
</v-card>
</v-col>
<v-col>
  <v-card :loading="loading" class="mx-auto my-12" max-width="400">
    <template slot="progress">
      <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
    </template>

    <v-img height="" src="../AGRO.png"></v-img>
    <v-card-text></v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-title>Studij:</v-card-title>
    <v-card-text>
      <ul>
       <li>Agronomija</li> 
       <ul>
          <li>Bilinogojstvo</li>
          <li> Zootehnika</li>
          <li>Fitomedicina</li>
          <li>Agroekonomika</li>
          <li>Vinogradarstvo i vinarstvo</li>
        </ul>
      
        
    </ul>
    <ul>
    <li>Prehrambena tehnologija</li>
    <ul>
        <li>Prehrambeno inženjerstvo</li>
        <li> Nutricionizam</li>
      </ul>
    </ul>
    <v-card-text></v-card-text>
    <v-card-text></v-card-text>
    <v-card-text></v-card-text>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="blue" text @click="reserve">
        Upisi se!
      </v-btn>
      <v-btn color="blue" text @click="reserve">
        Posjeti web!
      </v-btn>

    </v-card-actions>
  </v-card>
</v-col>
</v-row>
<v-row>
  <v-col>
    <v-card :loading="loading" class="mx-auto my-12" max-width="400">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>

      <v-img height="" src="../EKONOMSKI.png"></v-img>

      <v-card-text></v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Studij:</v-card-title>
      <v-card-text>
        <ul>
          <li> Marketing</li>
          <li> Menadžment</li>
          <li> Poslovanje s Europskom unijom</li>
          <li>Poslovna informatika</li>
          <li> Računovodstvo i financije</li>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
        </ul>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="blue" text @click="reserve">
          Upisi se!
        </v-btn>
        <v-btn color="blue" text @click="reserve">
          Posjeti Web!
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-col>
  <v-col>
    <v-card :loading="loading" class="mx-auto my-12" max-width="400">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>

      <v-img height="" src="../ALK.png"></v-img>
      <v-card-text></v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Studij:</v-card-title>
      <v-card-text>
        <ul>

          <li>
            Slikarstvo

          </li>
          <li>
           Kiparstvo
          </li>
          <li>
             Grafika
          </li>
          <li>
              Grafički dizajn
          </li>
          <li>
             Video montaža i režija
          </li>
        </ul>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="blue" text @click="reserve">
          Upisi se!
        </v-btn>
        <v-btn color="blue" text @click="reserve">
          Posjeti web!
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-col>
  <v-col>
    <v-card :loading="loading" class="mx-auto my-12" max-width="400">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>

      <v-img height="" src="../FZS.png"></v-img>
      <v-card-text></v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Studij:</v-card-title>
      <v-card-text>
        <ul>
          <li>Studij sestrinstva</li>
          <li>Studij primaljstva</li>
          <li>Studij fizioterapije</li>
          <li>
            Studij sanitarnog inženjerstva
          </li>
          <li>
            Studij radiološke tehnologije
          </li>
            <li>Klinička zdravstvena njega</li>
            <li>Radiološka tehnologija</li>
            <li>Studij fizioterapije</li>
            <li>Sanitarno inženjerstvo</li>
            
        </ul>
        <v-card-text>
        
        </v-card-text>
        <v-card-text></v-card-text>

        
        
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="blue" text @click="reserve">
          Upisi se!
        </v-btn>
        <v-btn color="blue" text @click="reserve">
          Posjeti web!
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-col>
</v-row>
<v-row>
  <v-col>
    <v-card :loading="loading" class="mx-auto my-12" max-width="400" height="87,5%">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>

      <v-img height="" src="../FFMO.png"></v-img>
      <v-card-text></v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Studij:</v-card-title>
      <v-card-text>
        <ul>
          <li>Arheologija</li>
         <li> Engleski jezik i književnost</li>
          <li>Filozofija</li>
         <li> Hrvatski jezik i književnost</li>
          <li>Informacijske znanosti</li>
          <li>Latinski jezik i rimska književnost</li>
         <li> Novinarstvo</li>
          <li>Njemački jezik i književnost</li>
          <li>Politologija</li>
          <li>Povijest</li>
         <li> Povijest umjetnosti</li>
          <li>Psihologija</li>
          <li>Ruski jezik i književnost</li>
          <li>Talijanski jezik i književnost</li>
        </ul>
       
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="blue" text @click="reserve">
          Upisi se!
        </v-btn>
        <v-btn color="blue" text @click="reserve">
          Posjeti web!
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-col>
  <v-col>
    <v-card :loading="loading" class="mx-auto my-12" max-width="400">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>

      <v-img height="" src="../GF.png"></v-img>
      <v-card-text></v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Studij:</v-card-title>
      <v-card-text>
        <ul>
          <li>Arhitektura i urbanizm</li>
          <li>Geodezija i geoinformatika</li>
          <li>  Građevinarstvo </li>
        </ul>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>
        <v-card-text></v-card-text>

      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="blue" text @click="reserve">
          Upisi se!
        </v-btn>
        <v-btn color="blue" text @click="reserve">
          Posjeti web!
        </v-btn>

      </v-card-actions>
    </v-card>
  </v-col>
  <v-col>
    <v-card :loading="loading" class="mx-auto my-12" max-width="400">
      <template slot="progress">
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>

      <v-img height="" src="../PF.png"></v-img>

      <v-card-text></v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-title>Studij:</v-card-title>
      <v-card-text>
        <ul>
          <li>Pravo</li>
          <li>Kriminalistika i sigurnosni menadžment</li>
          <li>Pravo - Sveučilišni Centar Posavina u Orašju</li>
         <li> Kriminalistika i sigurnosni menadžment - Sveučilišni Centar Posavina u Orašju</li>
        </ul>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
          <v-card-text></v-card-text>
         
      </v-card-text>
      <v-divider class="mx-4"></v-divider>

      <v-card-actions>
        <v-btn color="blue" text @click="reserve">
          Upisi se!
        </v-btn>
        <v-btn color="blue" text @click="reserve">
          Posjeti Web!
        </v-btn>
      </v-card-actions>

    </v-card>
  </v-col>
</v-row>
  <v-divider></v-divider>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title  class="py-6 justify-center">
  
        <v-btn v-for="icon in icons" :key="icon" class="mx-5" dark icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
  
      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>SUM</strong>
      </v-card-text>
    </v-card>
  </v-footer>
      
    </v-main>
  </v-app>
  
</template>

<script>
export default {
  data: () => ({
    links: [
      'Naslovnica',
      'Profile',
      'Upisi',
      'Stipemdije',
    ],
    items: [
      {
        src: require('../online1.png'),
      }
    ],
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
}
</script>
