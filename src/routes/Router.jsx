import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TodoListApp from '../pages/TodoListApp';
import LoginPage from '../Pages/LoginPage';

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/todolist', element: <TodoListApp /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
