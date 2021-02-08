<template>
  <div class="app-container">
    <div class="menu-container" :class="{ closed: !isOpen }">
      <div class="menu-header">
        Menu! - {{ isOpen }}
      </div>
      <div class="menu-content">
        <ul>
          <li>
            <template v-if="isOpen">
              Icone + Texto 1
            </template>
            <template v-else>
              Icone 1
            </template>
          </li>
          <li>
            <template v-if="isOpen">
              Icone + Texto 1
            </template>
            <template v-else>
              Icone 1
            </template>
          </li>
          <li>
            <template v-if="isOpen">
              Icone + Texto 1
            </template>
            <template v-else>
              Icone 1
            </template>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-container">
      <div class="content-header">
        <button
          @click="toggle"
          type="button"
          class="menu-toggle">Toggle Menu
        </button>

        <div class="content-header-actions">
          <div class="notification">N</div>
          <div class="profile">Profile</div>
          <div class="settings">S</div>
        </div>
      </div>

      <div class="content">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapGetters('menu', ['isOpen'])
  },
  methods: {
    ...mapActions('menu', ['toggle'])
  }
};
</script>

<style scoped>
.app-container {
  @apply flex flex-row w-screen h-screen;
}

.app-container .menu-container {
  @apply flex flex-col w-48 bg-blue-500;
}

.app-container .menu-container.closed {
  @apply w-16;
}

.app-container .menu-container .menu-header {
  @apply bg-blue-500 p-4 flex flex-col justify-center;
}

.app-container .menu-container .menu-content {
  @apply bg-blue-700 flex-grow;
}

.app-container .content-container {
  @apply flex flex-col flex-grow;
}

.app-container .content-container .content-header {
  @apply flex flex-row justify-between bg-gray-500;
}

.app-container .content-container .content-header .content-header-actions {
  @apply flex flex-row justify-around p-4;
}

.app-container .content-container .content-header .content-header-actions .profile {
  @apply mx-4;
}

</style>
