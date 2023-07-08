<template>
  <div class="shadow-md pb-6">
    <table class="table-auto w-full">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">ID</th>
          <th class="py-1">Name</th>
          <th class="py-1">Email</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td class="py-2">1</td>
          <td class="py-2">Sonam</td>
          <td class="py-2">Sonam@gmail.com</td>
        </tr>
      </tbody>
    </table>
    <div class="flex m-8 justify-center">
      <RouterLink :to="{ name: 'list' }">
        <button
          type="button"
          class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
        >
          Back TO Home
        </button>
      </RouterLink>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
