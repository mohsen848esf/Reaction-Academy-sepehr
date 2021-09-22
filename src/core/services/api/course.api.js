import Http from "../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

const Courses = async () => {
  try {
    const result = await Http.get(`${MainUrl}course`);
    return result.data;
  } catch (error) {
    return error;
  }
};

//Delete Course
const DeleteCourse = async (courseId) => {
  try {
    const result = await Http.delete(`${MainUrl}course/${courseId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

const addStudentToTerm = async (studenId, termId) => {
  try {
    const result = await Http.post(`${MainUrl}term/addStudentToTerm/${studenId}`, termId);
    return result.data;
  } catch (error) {
    return error;
  }
}

const removeStudentFromTerm = async (studenId, termId) => {
  try {
    const result = await Http.post(`${MainUrl}term/removeStudentFromTerm/${studenId}`, termId);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Add Course
const addCourse = async (course) => {
  try {
    const result = await Http.post(`${MainUrl}course/add`, course);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Get Course by Id
const getCourseById = async (courseId) => {
  try {
    const result = await Http.get(`${MainUrl}course/${courseId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Edit Course
const editCourse = async (courseId, objCourse) => {
  try {
    const result = await Http.put(`${MainUrl}course/${courseId}`, objCourse);
    return result.data;
  } catch (error) {
    return error;
  }
}

export {
  Courses,
  addCourse,
  editCourse,
  DeleteCourse,
  getCourseById,
  addStudentToTerm,
  removeStudentFromTerm
};
