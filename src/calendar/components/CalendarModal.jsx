import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen ] = useState(true)


    const onCloseModal = () => {
        console.log('closing modal')
        setIsOpen(false)
    }

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onCloseModal}
    style={customStyles}
    className="modal"
    overlayClassName="modal-fondo"
    closeTimeoutMS={200}
    >
        <h1> Nuevo evento </h1>
        <hr />
        <form>
            <div className="form-group">
            <label>Fecha y hora inicio</label>
            <input
                type="text"
                className="form-control"
                placeholder="Fecha inicio"
                autoComplete="off"
            />
            </div>
            <div className="form-group">
            <label>Fecha y hora fin</label>
            <input
                type="text"
                className="form-control"
                placeholder="Fecha fin"
                autoComplete="off"
            />
            </div>
            <hr />
            <div className="form-group">
            <label>Titulo y notas</label>
            <input
                type="text"
                className="form-control"
                placeholder="Título del evento"
                name="title"
                autoComplete="off"
            />
            <small id="emailHelp" className="form-text text-muted">
                Una descripción corta
            </small>
            </div>
            <div className="form-group">
            <textarea
                type="text"
                className="form-control"
                placeholder="Notas"
                rows="5"
                name="notes"
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">
                Información adicional
            </small>
            </div>
            <button type="submit" className="btn btn-outline-primary btn-block">
            <i className="far fa-save"></i>
            <span> Guardar</span>
            </button>
        </form>
    </Modal>
  )
}
