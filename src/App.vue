<template>
  <div class="container-fluid">
    <Navbar/>
    <div class="row">
      <div class="col-lg-3">
        <QueryConstructor/>
      </div>
      <div class="col">
        <AllMaps/>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";
import QueryConstructor from "@/components/QueryConstructor";
import AllMaps from "@/components/maps/AllMaps";

export default {
  name: 'App',
  components: {AllMaps, QueryConstructor, Navbar},
}
</script>

<style>
.leaflet-container {
  width: 100%;
  height: 100vh;
}
body {
  /*font-family: 'Martel', serif;*/
  /*font-family: 'Quicksand', sans-serif;*/
  font-family: 'Merriweather Sans', sans-serif;
}

control-label{
  text-align:left;
}

small span {
  color: crimson;
}
</style>
