import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateCourseScreen from "../Pages/CreateCourseScreen";
import AddCourseScreen from "../Pages/AddCourseScreen";
import CourseContentScreen from "../Pages/CourseContentScreen";

const router = createBrowserRouter([
    {path: '/', element: <App/>},
    {path: '/create', element: <CreateCourseScreen />},
    {path: '/add', element: <AddCourseScreen/>},
    {path: '/createContent', element: <CourseContentScreen/>},

]);

export default router;