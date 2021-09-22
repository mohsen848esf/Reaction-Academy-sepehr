import Http from "../../interceptor/interceptor";

const MainUrl = process.env.REACT_APP_PUBLIC_PATH;

// get all employees
const getAllEmployee = async () => {
  try {
    const result = await Http.get(`${MainUrl}employee/getall`);
    return result.data;
  } catch (error) {
    return error;
  }
}

const EmployeeById = async (employeeId) => {
  try {
    const result = await Http.get(`${MainUrl}employee/${employeeId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Update employee By Id
const UpdateEmployeeById = async (employeeId, obj) => {
  try {
    const result = await Http.put(`${MainUrl}employee/${employeeId}`, obj);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Active employee
const activeEmployee = async (employeeId) => {
  try {
    const result = await Http.put(`${MainUrl}employee/active/${employeeId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Deactive employee
const deActiveEmployee = async (employeeId) => {
  try {
    const result = await Http.put(`${MainUrl}employee/deactive/${employeeId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}

// Delete employee
const DeleteEmployee = async (employeeId) => {
  try {
    const result = await Http.delete(`${MainUrl}employee/${employeeId}`);
    return result.data;
  } catch (error) {
    return error;
  }
}
export {
  EmployeeById,
  activeEmployee,
  getAllEmployee,
  deActiveEmployee,
  UpdateEmployeeById,
  DeleteEmployee
};
