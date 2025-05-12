import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import List from "./pages/list/List";
import Main from "./pages/main/Main";
import Game from "./pages/game/Game";
import Chart from "./pages/chart/Chart";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const router = createBrowserRouter([
    {
        path: "",
        element: <Main />,
    },
    {
        path: "/list",
        element: <List />,
    },
    {
        path: "/game/:id",
        element: <Game />
    },
    {
        path: "/charts",
        element: <Chart />
    },
    {
        path: "/health",
        element: <>{JSON.stringify({ status: "OK" })}</>,
    },
])

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
