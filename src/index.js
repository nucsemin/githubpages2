import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { TodoListContextWrapper } from './contexts/TodoListContextProvider'
import { ContactsPage } from './components/Pages/ContactsPage/ContactsPage'
import { TodosPage } from './components/Pages/TodosPage/TodosPage'
import { TodoDetail } from './components/TodoDetail/TodoDetail'
import { TodosCreate } from './components/TodosCreate/TodosCreate'
import { Main } from './components/Main/Main'

// /
// /contacts
// /todos/
// /tdosos/:id

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'contacts',
        element: <ContactsPage />,
      },
      {
        path: 'todos/',
        element: <TodosPage />,

      },
      {
        path: 'todos/:todoId',
        element: <TodoDetail />,
      },
      {
        path: 'todos/create',
        element: <TodosCreate />,
      },
    ],
  },
], { basename: "/githubpages2" }
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoListContextWrapper>
      <RouterProvider router={myRouter} />
    </TodoListContextWrapper>
  </React.StrictMode>,
)
