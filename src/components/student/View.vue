<template>
  <div class="shadow-md pb-6">
    <div
      v-if="error"
      class="p-4 mb-4 text-sm text-red-700 bg-red-100 font-medium rounded"
    >
      Oops! Error encountered {{ error }}
    </div>
    <table class="table-auto w-full" v-else-if="studentData">
      <thead class="bg-slate-600 text-white">
        <tr>
          <th class="py-1">ID</th>
          <th class="py-1">Name</th>
          <th class="py-1">Email</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td class="py-2">{{ studentData.id }}</td>
          <td class="py-2">{{ studentData.studentName }}</td>
          <td class="py-2">{{ studentData.email }}</td>
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
import useStudent from "../../composable/studentsApi";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
const { studentData, error, getSingleStudentData } = useStudent();
const route = useRoute();
onMounted(() => {
  getSingleStudentData(route.params.id);
});
</script>
