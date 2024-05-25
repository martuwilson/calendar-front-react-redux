import { addHours } from "date-fns"
import { useCalendarStore, useUiStore } from "../../hooks"

export const AddNewEvent = () => {

    const {openDateModal} = useUiStore()
    const {setActiveEvent} = useCalendarStore()

    const handleModalOpen = () => {

        //si hay una nota activa, la limpio primero
        setActiveEvent({
            _id: new Date().getTime(),
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 1),
            bgColor: '#fafafa',
            user: {
              _id: '123',
              name: 'Martu',
            },
          
        })

        openDateModal()
    }
  return (
    <button
        className="btn btn-primary fab"
        onClick={handleModalOpen}
    >
        <i className="fas fa-plus"></i>
    </button>
  )
}
