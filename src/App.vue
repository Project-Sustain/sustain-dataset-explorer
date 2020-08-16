<template>
  <div class="container-fluid">
    <Navbar/>
    <div class="row">
      <div class="col-lg-3">
        <QueryConstructor/>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from "@/components/Navbar";
import QueryConstructor from "@/components/QueryConstructor";

export default {
  name: 'App',
  components: {QueryConstructor, Navbar},
}
</script>
