<template>
  <div class="shdow-md pb-6">
    <div class="bg-indigo-600 pb-4">
      <h1 class="text-3xl font-bold text-center text-white">Add Student</h1>
    </div>
    <form
      @submit.prevent="handleAddStudentForm"
      class="w-full"
      id="AddStudentForm"
    >
      <div class="flex items-center m-6">
        <div class="w-1/5">
          <label class="font-medium" for="studentName">Name :</label>
        </div>
        <div class="w-4/5">
          <input
            type="text"
            id="studentName"
            v-model.trim="formData.studentName"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Write Your Name"
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
            v-model.trim="formData.email"
            class="border-2 border-gray-200 w-full py-2 px-4"
            placeholder="Write Your Email"
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
      v-if="error"
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 font-medium rounded"
    >
      Oops! Error encountered {{ error.message }}
    </div>
    <div
      v-if="statusCode === 201"
      class="p-4 text-sm text-red-700 bg-red-100 rounded font-medium"
      role="alert"
    >
      Student Added Successfully
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import useStudent from "../../composable/studentsApi";
import { RouterLink } from "vue-router";
import { onMounted } from "vue";
const { studentData, error, statusCode, createStudentData } = useStudent();

const formData = reactive({
  studentName: "",
  email: "",
});
const handleAddStudentForm = async () => {
  await createStudentData(formData);
  if (statusCode.value === 201)
    document.getElementById("AddStudentForm").reset();
};
</script>
