<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-gray-100"
  >
    <img src="@/assets/logo.png" alt="Fansngage Logo" class="h-20 w-auto mb-6 drop-shadow-lg" />
    <div
      class="bg-white p-10 rounded-2xl shadow-2xl text-center max-w-md border-t-8 border-[#e82264]"
    >
      <h1 class="text-7xl font-extrabold text-[#e82264] mb-2 tracking-tight drop-shadow">404</h1>
      <h2 class="text-2xl font-bold mb-2 text-gray-800">Oops! Page Not Found</h2>
      <p class="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.<br />But don't worry,
        you can always get back to the fun!
      </p>
      <router-link
        to="/"
        class="inline-block px-6 py-3 bg-[#e82264] text-white font-bold rounded-xl shadow hover:bg-pink-700 transition-all duration-200"
        >Go Home</router-link
      >
      <div class="mt-6">
        <router-link
          to="/help"
          class="text-[#e82264] underline font-semibold hover:text-pink-700 transition"
          >Visit Help Center</router-link
        >
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped></style>
