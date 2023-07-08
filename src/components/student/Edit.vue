<template>
  <div class="shdow-md pb-6">
    <div class="bg-indigo-600 pb-4">
      <h1 class="text-3xl font-bold text-center text-white">Add Student</h1>
    </div>
    <form @submit.prevent="handleUpdateStudentForm" class="w-full">
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuid">ID :</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuid"
            class="border-2 border-gray-200 w-full py-2 px-4"
            readonly
            disabled
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuname">Name :</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuname"
            class="border-2 border-gray-200 w-full py-2 px-4"
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="email">Email :</label>
        </div>
        <div class="w-4/5">
          <input
            type="email"
            id="email"
            class="border-2 border-gray-200 w-full py-2 px-4"
          />
        </div>
      </div>
      <div class="m-8 flex justify-center">
        <button
          type="submit"
          class="bg-purple-700 text-white font-medium p-2 rounded-md hover:bg-purple-800 mr-6"
        >
          Add
        </button>
        <RouterLink :to="{ name: 'list' }">
          <button
            type="button"
            class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800"
          >
            Back TO Home
          </button>
        </RouterLink>
      </div>
    </form>
  </div>
</template>
<script setup>
const handleUpdateStudentForm = () => {
  console.log("updated");
};
</script>
