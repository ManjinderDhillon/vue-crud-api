import axios from "axios";
import { ref } from "vue";
export default function useStudent() {
  const url = "http://localhost:3333/students/";
  const studentData = ref([]);
  const error = ref(null);
  const statusCode = ref(null);
  const delError = ref(null);
  //   Get All Student Data
  const getAllStudent = async () => {
    studentData.value = [];
    error.value = null;
    try {
      const res = await axios(url);
      const err = "";
      console.log(res.data);
      studentData.value = res.data;
      error.value = err;
    } catch (err) {
      error.value = err;
      //   console.log(err);
    }
  };
  //   Get Single Student Data
  const getSingleStudentData = async (id) => {
    studentData.value = [];
    error.value = null;
    try {
      const res = await axios(url + id);
      studentData.value = res.data;
    } catch (err) {
      error.value = err;
    }
  };
  //   Add Student Data
  const createStudentData = async (formData) => {
    studentData.value = [];
    error.value = null;
    try {
      const config = {
        method: "POST",
        url: url,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(formData),
      };
      const res = await axios(config);
      studentData.value = res.data;
      statusCode.value = res.status;
    } catch (err) {
      error.value = err;
    }
  };
  // Update Student Data
  const updateStudent = async (id, data) => {
    studentData.value = [];
    error.value = null;
    try {
      const config = {
        method: "Put",
        url: url + id,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      };
      const res = await axios(config);
      studentData.value = res.data;
      statusCode.value = res.status;
    } catch (err) {
      error.value = err;
    }
  };
  // Delete Student Data
  const destroyStudent = async (id) => {
    studentData.value = [];
    error.value = null;
    try {
      const config = {
        method: "DELETE",
        url: url + id,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios(config);
      statusCode.value = res.status;
    } catch (err) {
      delError.value = err;
    }
  };
  return {
    studentData,
    error,
    statusCode,
    delError,
    getAllStudent,
    getSingleStudentData,
    createStudentData,
    updateStudent,
    destroyStudent,
  };
}
