import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { useTodoListMethodsContext } from '../../../../contexts/TodoListContextProvider'
import { Modal } from '../../../Modal/Modal'

export function DeleteTodoModal({
  setIsDeleteModalOpen, isOpen, title, id,
}) {
  const { deleteTodo } = useTodoListMethodsContext()

  const navigate = useNavigate()

  const closeDeleteModalHandler = () => {
    setIsDeleteModalOpen(false)
  }

  const deleteHandler = () => {
    deleteTodo(id)
    closeDeleteModalHandler()
    navigate('..', {
      relative: 'path',
    })
  }

  return (
    <Modal isOpen={isOpen} closeHandler={closeDeleteModalHandler}>
      <p>
        Вы точно хотите удалить задачу
        {' '}
        <b>
          &quot;
          {title}
          &quot;
        </b>
      </p>
      <div className="d-flex justify-content-center">
        <button
          onClick={closeDeleteModalHandler}
          type="button"
          className={classNames('btn', 'mx-2', 'btn-primary')}
        >
          Close
        </button>
        <button
          onClick={deleteHandler}
          type="button"
          className="btn btn-danger"
        >
          Delete
        </button>
      </div>
    </Modal>
  )
}
