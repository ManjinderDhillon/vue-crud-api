<template>
  <div class="shdow-md pb-6">
    <div class="bg-indigo-600 pb-4">
      <h1 class="text-3xl font-bold text-center text-white">Edit Student</h1>
    </div>
    <div
      v-if="error"
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 font-medium rounded"
    >
      Oops! Error encountered {{ error.message }}
    </div>
    <form
      @submit.prevent="handleUpdateStudentForm"
      class="w-full"
      v-else-if="studentData"
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="stuid">ID :</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="stuid"
            class="border-2 border-gray-200 w-full py-2 px-4"
            v-model.trim="studentData.id"
            readonly
            disabled
          />
        </div>
      </div>
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="studentName">Name :</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="studentName"
            class="border-2 border-gray-200 w-full py-2 px-4"
            v-model.trim="studentData.studentName"
            required
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
            v-model.trim="studentData.email"
            required
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

    <div
      v-if="statusCode === 200"
      class="p-4 text-sm text-red-700 bg-red-100 rounded font-medium"
      role="alert"
    >
      Student Updated Successfully
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
import useStudent from "../../composable/studentsApi";
import { useRoute } from "vue-router";
const { studentData, error, statusCode, getSingleStudentData, updateStudent } =
  useStudent();
const { params } = useRoute();
onMounted(() => {
  getSingleStudentData(params.id);
});
const handleUpdateStudentForm = () => {
  updateStudent(params.id, studentData.value);
};
</script>
