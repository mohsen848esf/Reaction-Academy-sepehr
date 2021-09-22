// name: "",
//phoneNum: "",
//nationalID: "",
//birthday: "",
//email: "",
//password: "",

const fakeData = [
    {name:"babak69", phoneNum:"09112233445", nationalID:"0012345678", birthday:"1369", email:"babak123@gmail.com", password:"123456"},
    {name:"shayan80", phoneNum:"09112233445", nationalID:"0012345678", birthday:"1380", email:"shayan123@gmail.com", password:"123456"},
    {name:"masomeh80", phoneNum:"09112233445", nationalID:"0012345678", birthday:"1380", email:"masomeh123@gmail.com", password:"123456"},
    {name:"maryam70", phoneNum:"09112233445", nationalID:"0012345678", birthday:"1370", email:"maryam123@gmail.com", password:"123456"}
]

const getFakeUserData = () => {
    return [...fakeData];
}

export {getFakeUserData};