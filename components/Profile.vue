<template>
  <div class="profile">
    <img class="profile-img" alt="" src="~/assets/img/profile.jpg">
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.profile{
  position: relative;
}

.profile-img{
  border-radius: 50%;
  object-fit: cover;
  filter: drop-shadow(1px 1px 1px rgba(0,0,0,0.1));
  width: 200px;
  position: relative;
  z-index: 1;
}

.profile::after{
  content: '巧';
  font-family: $jp-font;
  font-size: $bg-size;
  color: $whitegrey;
  position: absolute;
  pointer-events: none;
  z-index: 0;
  top: -70px;
  left: 130px;
}
</style>
