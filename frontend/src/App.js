import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import NewNotePage from "./pages/NewNotePage";

import RootPage from "./pages/RootPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "new-note", element: <NewNotePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
