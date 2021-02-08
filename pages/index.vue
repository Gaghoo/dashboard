<template>
  <div class="dashboard-container">

    <div class="cards-container">
      <div class="card card-nfe">
        <div class="card-info">
          <h2 class="main-counter">Main counter</h2>
          <span class="second-counter">second counter</span>
          <span class="third-counter">third counter</span>
        </div>
        <nuxt-link to="#" class="card-link">Link</nuxt-link>
      </div>

      <div class="card card-cde">
        <div class="card-info">
          <h2 class="main-counter">Main counter</h2>
          <span class="second-counter">second counter</span>
          <span class="third-counter">third counter</span>
        </div>
        <nuxt-link to="#" class="card-link">Link</nuxt-link>
      </div>

      <div class="card card-fde">
        <div class="card-info">
          <h2 class="main-counter">Main counter</h2>
          <span class="second-counter">second counter</span>
          <span class="third-counter">third counter</span>
        </div>
        <nuxt-link to="#" class="card-link">Link</nuxt-link>
      </div>

      <div class="card card-events">
        <div class="card-info">
          <h2 class="main-counter">Main counter</h2>
          <span class="second-counter">second counter</span>
          <span class="third-counter">third counter</span>
        </div>
        <nuxt-link to="#" class="card-link">Link</nuxt-link>
      </div>
    </div>

  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.dashboard-container {
  @apply w-full p-4;
}

.dashboard-container .cards-container {
  @apply grid grid-cols-4 gap-4;
}

.dashboard-container .cards-container .card {
  @apply rounded text-white flex flex-col relative;
}

.dashboard-container .cards-container .card::after {
  content: '';
  background-image: url('~assets/bacon.svg');
  width: 50px;
  height: 50px;
  background-size: 50px 50px;
  background-repeat: no-repeat;
  position: absolute;
  top: 25%;
  right: 10%;
  transition: all .3s;
}

.dashboard-container .cards-container .card:hover::after {
  transform: scale(1.3);
}

.dashboard-container .cards-container .card .card-info {
  @apply h-32 flex flex-col p-4;
}

.dashboard-container .cards-container .card .card-info .main-counter {
  @apply flex-grow text-3xl font-bold;
}

.dashboard-container .cards-container .card .card-info .second-counter {
  @apply flex-grow text-2xl font-light;
}

.dashboard-container .cards-container .card .card-info .third-counter {
  @apply flex-grow text-lg font-light;
}

.dashboard-container .cards-container .card .card-link {
  @apply text-center text-sm font-light rounded-bl rounded-br;
}

.dashboard-container .cards-container .card-nfe {
  @apply bg-yellow-600;
}

.dashboard-container .cards-container .card-nfe .card-link {
  @apply bg-yellow-700;
}

.dashboard-container .cards-container .card-cde {
  @apply bg-red-600;
}

.dashboard-container .cards-container .card-cde .card-link {
  @apply bg-red-700;
}

.dashboard-container .cards-container .card-fde {
  @apply bg-green-600;
}

.dashboard-container .cards-container .card-fde .card-link {
  @apply bg-green-700;
}

.dashboard-container .cards-container .card-events {
  @apply bg-purple-600;
}

.dashboard-container .cards-container .card-events .card-link {
  @apply bg-purple-700;
}
</style>
