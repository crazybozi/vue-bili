<template>
<<<<<<< HEAD
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png" />
</div>

=======
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
>>>>>>> 2c328c1dcfd3fb7ea93d123b34227fd3d0465c0c
</template>

<script>
export default {
  name: "Home",
  created() {
    this.axios.get("http://localhost:3000/popular").then((res) => {
      console.log(res.data);
    });
  },
};
</script>