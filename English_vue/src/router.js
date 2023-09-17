import { createRouter,createWebHashHistory } from "vue-router";
// import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("./views/Login.vue")
    }, {
        path: "/register",
        name: "register",
        component: () => import("./views/Register.vue")
    },{
        path: "/",
        name: "main",
        redirect:'/login',
        component: () => import("./views/main/Main.vue"),
        children:[{
            path: "/home",
            name: "home",
            component: () => import("./views/home.vue")
        },{
            path: "/exercise",
            name: "exercise",
            component: () => import("./views/exercise/index.vue")
        },{
            path: "/exercise_result",
            name: "exercise_result",
            component: () => import("./views/exercise_result/index.vue")
        },{
            path: "/exercise_detail",
            name: "exercise_detail",
            component: () => import("./views/exercise_result/pages/detail.vue")
        },{
            path: "/essay_control",
            name: "essay_control",
            component: () => import("./views/essay_control/index.vue")
        },{
            path: "/class_control",
            name: "class_control",
            component: () => import("./views/class_control/index.vue")
        },{
            path: "/class_student",
            name: "class_student",
            component: () => import("./views/class_control/pages/classStudent.vue")
        },{
            path: "/class_homework",
            name: "class_homework",
            component: () => import("./views/class_control/pages/classHomework.vue")
        },{
            path: "/students_homework",
            name: "students_homework",
            component: () => import("./views/class_control/pages/studentsHomework.vue")
        },{
            path: "/student_class",
            name: "student_class",
            component: () => import("./views/student_class/index.vue")
        },{
            path: "/homework",
            name: "homework",
            component: () => import("./views/homework/index.vue")
        },{
            path: "/homework_detail",
            name: "homework_detail",
            component: () => import("./views/homework/pages/detail.vue")
        },{
            path: "/select_word",
            name: "select_word",
            component: () => import("./views/essay_control/pages/select_word.vue")
        },{
            path: "/sentence_audio",
            name: "sentence_audio",
            component: () => import("./views/essay_control/pages/sentence_audio.vue")
        },{
            path: "/personal",
            name: "personal",
            component: () => import("./views/personal_center/index.vue")
        },{
            path: "/user_manage",
            name: "user_manage",
            component: () => import("./views/admin/userManage.vue")
        }]
    },{
        path: "/nine_grid",
        name: "nine_grid",
        component: () => import("./views/exercise/pages/nineGrid.vue")
    },{
        path: "/blank",
        name: "blank",
        component: () => import("./views/exercise/pages/blank.vue")
    },{
        path: "/homework_ninGrid",
        name: "homework_ninGrid",
        component: () => import("./views/homework/pages/nineGrid.vue")
    },{
        path: "/homework_blank",
        name: "homework_blank",
        component: () => import("./views/homework/pages/blank.vue")
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router
