<template>
    <div v-if="show" :class="['toast', `toast-${toastType}`]">
      <div class="toast-content-wrapper">
        <div class="toast-icon" v-html="icon[toastType]"></div>
        <div class="toast-message">{{ message }}</div>
        <div class="toast-progress" :style="{ animationDuration: duration + 's' }"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        show: false,
        message: 'Sample Message',
        toastType: 'info',
        duration: 5,
        icon: {
          success: '<span class="material-symbols-outlined">task_alt</span>',
          danger: '<span class="material-symbols-outlined">error</span>',
          warning: '<span class="material-symbols-outlined">warning</span>',
          info: '<span class="material-symbols-outlined">info</span>',
        },
      };
    },
    methods: {
      showToast(message = 'Sample Message', toastType = 'info', duration = 5000) {
        if (!Object.keys(this.icon).includes(toastType)) {
          toastType = 'info';
        }
        this.message = message;
        this.toastType = toastType;
        this.duration = duration / 1000;
        this.show = true;
        setTimeout(() => {
          this.show = false;
        }, duration);
      },
    },
  };
  </script>
  
  <style scoped>
  .toast {
    /* Add your toast styles here */
  }
  .toast-progress {
    animation: progress linear;
  }
  @keyframes progress {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
  </style>
  