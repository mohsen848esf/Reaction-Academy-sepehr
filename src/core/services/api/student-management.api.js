import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

// get all students
const getAllStudents = async () => {
  try {
    const result = await Http.get(`${MainUrl}student/getall`);
    return result.data;
  } catch (error) {
    return error;
  }
}

const StudentById = async (studentId) => {
  try {
    const result = await Http.get(`${MainUrl}student/${studentId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Update Student By Id
const UpdateStudentById = async (studentId, obj) => {
  try {
    const result = await Http.put(`${MainUrl}student/${studentId}`, obj);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Active Student
const activeStudent = async (studentId) => {
  try {
    const result = await Http.put(`${MainUrl}student/active/${studentId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Deactive Student
const deActiveStudent = async (studentId) => {
  try {
    const result = await Http.put(`${MainUrl}student/deactive/${studentId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Delete Student by Id
const deleteStudentById = async (studentId) => {
  try {
    const result = await Http.delete(`${MainUrl}student/${studentId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}



export {
  StudentById,
  activeStudent,
  getAllStudents,
  deActiveStudent,
  deleteStudentById,
  UpdateStudentById
};
