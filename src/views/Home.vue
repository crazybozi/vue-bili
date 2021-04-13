<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 1d4e3da6b6002bd21a05d80a12d1614be0e72476
<div class="home">
  <img alt="Vue logo" src="../assets/logo.png" />
</div>

<<<<<<< HEAD
=======
=======
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
>>>>>>> 2c328c1dcfd3fb7ea93d123b34227fd3d0465c0c
>>>>>>> 1d4e3da6b6002bd21a05d80a12d1614be0e72476
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