import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage"
import LoginPage from "./pages/loginPage"


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
