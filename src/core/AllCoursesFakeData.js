import oneIcon from '../assets/img/01.png.jpg';
import twoIcon from '../assets/img/03.png.png';
import treeIcon from '../assets/img/04.png.png';
import fourIcon from '../assets/img/05.png.png';
import fiveIcon from '../assets/img/06.png.jpg';
import sixIcon from '../assets/img/08.jpg';


const tableHeader = [
    "تصویر",
    "نام دوره",
    "مدرس",
    "نام ترم",
    "تاریخ شروع",
    "قیمت"
]

const tableData = [
    {
        id:"1",
        tablePic: oneIcon,
        tableTitle: "دوره ری اکت",
        tableTeacher: "حیدر صفری",
        tableTerm: "ترم تابستانه",
        tableDate: "1400/10/10",
        tablePrice: 50000000
    },
    {
        id:"2",
        tablePic: twoIcon,
        tableTitle: "دوره انگولار",
        tableTeacher: "حامد نظری",
        tableTerm: "ترم تابستانه",
        tableDate: "1400/10/10",
        tablePrice: 50000000
    },
    {
        id:"3",
        tablePic: treeIcon,
        tableTitle: "دوره ری اکت",
        tableTeacher: "حیدر صفری",
        tableTerm: "ترم زمستانه",
        tableDate: "1400/10/10",
        tablePrice: 50000000
    },
    {
        id:"4",
        tablePic: fourIcon,
        tableTitle: "دوره انگولار",
        tableTeacher: "حامد نظری",
        tableTerm: "ترم تابستانه",
        tableDate: "1400/10/10",
        tablePrice: 50000000
    },
    {
        id:"5",
        tablePic: fiveIcon,
        tableTitle: "دوره ری اکت",
        tableTeacher: "حیدر صفری",
        tableTerm: "ترم زمستانه",
        tableDate: "1400/10/10",
        tablePrice: 50000000
    },
    {
        id:"6",
        tablePic: sixIcon,
        tableTitle: "دوره انگولار",
        tableTeacher: "حامد نظری",
        tableTerm: "ترم تابستانه",
        tableDate: "1400/10/10",
        tablePrice: 50000000
    },
]


const getTableHeaderData = () => {
    return [...tableHeader];
}

const getTableFakeData = () => {
    return [...tableData];
}

export { getTableHeaderData, getTableFakeData}
