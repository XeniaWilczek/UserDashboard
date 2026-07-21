import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Overview from "./routes/Overview/Overview";
import Create from "./routes/Create/Create";
import Edit from "./routes/Edit/Edit";
import Root from "./routes/Root/Root";
import ErrorPage from "./routes/Root/ErrorPage/ErrorPage";
import { UserContext } from "./context/userContext";
import { useEffect, useReducer } from "react";
import { useUserReducer } from "./hooks/useUserReducer";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Overview /> },
          { path: "create", element: <Create /> },
          { path: "edit/:id", element: <Edit /> },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    },
  );

  const [users, dispatch] = useReducer(useUserReducer, [], () => {
    const localData = localStorage.getItem("users");
    return localData ? JSON.parse(localData) : [];
  });

  // Speichern bei jeder Änderung am State
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
