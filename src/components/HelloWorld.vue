<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<!-- <template>
 <div class="latar">
  <div class="greetings">
    <h1 class="black">{{ msg }}</h1>
    
    <h4>
    Tentang Saya
    </h4>
    <br>
    
    <p>
      syafiqka ali marsam, SMK Taruna Bhakti Depok,saya akan menjelaskan sedikit kemampuan saya. saya dapat menmpraktekan dalam mengoperasikan HTML, CSS, Bootstrap, Figma dan Wordpress. Serta sedikit memahami tentang Javascript, MySql, dan Laravel.</p> 
    
      <p>
      Perminatan   = Front End developer<br>
      Alamat = Jln nurul iman Kp babakan rt 005 rw 010 Sukatani, Tapos, Depok<br>
      Email  = ariqsyechan76@gmail.com<br>
      No. Hp = 081281092017
      </p>
      
      
      </div>
  </div>
</template> -->

<template>
<div class="card-footer">
       <footer><h2>Sosmed</h2></footer>
       <br>
       <a href=""><i class="sosmed fa-brands fa-instagram"></i>@here_me_ali</a><br>
       <a href=""><i class="sosmed fa-brands fa-github"></i>syafiqkaalimarsam</a><br>
       <a href=""><i class="sosmed fa-solid fa-envelope"></i>ariqsyechan76@gmail.com</a><br>
       <a href=""><i class="sosmed fa-brands fa-whatsapp"></i>081281092017</a><br>
       </div>
</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }

.sosmed{
    margin-left: 0.5px;
    margin-right: 0.5px;
    padding-bottom: 15px;
  }
  .sosmed i{
    margin-left: 20px;
  }

}
</style>
