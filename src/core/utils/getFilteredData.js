import _ from 'lodash';

// Course
const getCourseFilteredData = (data, searchedValue, selectedValue, property = ["course.courseName", "teacher.fullName"]) => {
  let filtered = data;
  if (searchedValue && selectedValue.length > 0) {
    filtered = data.filter(
      (item) => property.some(prop => _.get(item, prop).toLowerCase().includes(searchedValue.toLowerCase()))
    )
    let myArr = [];
    selectedValue.forEach(element => {
      const x = filtered.filter(
        (item) => property.some(prop => _.get(item, prop).toLowerCase().includes(element))
      )
      x.forEach(el => myArr.push(el));
    });
    filtered = myArr
  }
  else if (searchedValue) {
    filtered = data.filter(
      (item) => property.some(prop => _.get(item, prop).toLowerCase().includes(searchedValue.toLowerCase()))
    )
  } else if (selectedValue && selectedValue.length > 0) {
    let myArr = [];
    selectedValue.forEach(element => {
      const x = data.filter(
        (item) => property.some(prop => _.get(item, prop).toLowerCase().includes(element))
      )
      x.forEach(el => myArr.push(el));
    });
    filtered = myArr
  }
  return { count: filtered.length, filteredItems: filtered };
}


// News
const getNewsFilteredData = (data, searchedValue, selectedValue, property = ["title", "category"]) => {
  let filtered = data;
  if (searchedValue && selectedValue.length > 0) {
    filtered = data.filter(
      (item) => property.some(prop => _.get(item, prop).toLowerCase().includes(searchedValue.toLowerCase()))
    )
    let myArr = [];
    selectedValue.forEach(element => {
      const x = filtered.filter(
        (item) => property.some(prop => _.get(item, prop).toLowerCase().includes(element))
      )
      x.forEach(el => myArr.push(el));
    });
    filtered = myArr
  }
  else if (searchedValue) {
    filtered = data.filter(
      (item) => property.some(prop => _.get(item, prop).toLowerCase().includes(searchedValue.toLowerCase()))
    )
  } else if (selectedValue && selectedValue.length > 0) {
    let myArr = [];
    selectedValue.forEach(element => {
      const x = data.filter(
        (item) => property.some(prop => _.get(item, prop).toLowerCase().includes(element))
      )
      x.forEach(el => myArr.push(el));
    });
    filtered = myArr
  }
  return { count: filtered.length, filteredItems: filtered };
}


export { getCourseFilteredData, getNewsFilteredData };
