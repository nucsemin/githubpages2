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
    path: '/githubpages2',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'githubpages2/contacts',
        element: <ContactsPage />,
      },
      {
        path: 'githubpages2/todos/',
        element: <TodosPage />,

      },
      {
        path: 'githubpages2/todos/:todoId',
        element: <TodoDetail />,
      },
      {
        path: 'githubpages2/todos/create',
        element: <TodosCreate />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <TodoListContextWrapper>
      <RouterProvider router={myRouter} />
    </TodoListContextWrapper>
  </React.StrictMode>,
)
