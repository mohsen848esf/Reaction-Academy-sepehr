import angular from '../../assets/img/angularicon.svg';
import react from '../../assets/img/reacticon.svg';
import vuejs from '../../assets/img/vuejs.svg';
import bootstrap from '../../assets/img/bootstrap.svg';

const AllCoursesFakeData = [
    {
        image: angular,
        title: "دوره انگولار",
        teacher: "دکتر محمدحسین بحرالعلومی",
        season: "تابستانه",
        date: "1400/03/6",
        price: "5000000",
        status: "فعال"
    },
    {
        image: react,
        title: "دوره ری اکت",
        teacher: "حیدر صفری",
        season: "تابستانه",
        date: "1400/03/5",
        price: "3000000",
        status: "فعال"
    },
    {
        image: bootstrap,
        title: "دوره جامع CSS",
        teacher: "حامد نظری",
        season: "تابستانه",
        date: "1400/12/6",
        price: "2000000",
        status: "فعال"
    },
    {
        image: angular,
        title: "دوره جامع HTML",
        teacher: "دکتر محمدحسین بحرالعلومی",
        season: "زمستانه",
        date: "1400/03/6",
        price: "4000000",
        status: "غیر فعال"
    },
    {
        image: vuejs,
        title: "دوره Vue",
        teacher: "حیدر صفری",
        season: "زمستانه",
        date: "1400/05/6",
        price: "1000000",
        status: "غیر فعال"
    }
]

const getFakeData = () => {
    return [...AllCoursesFakeData]
}

export default getFakeData;