import { useDispatch, useSelector } from "react-redux"
import { } from "../store"

export const useCalendarStore = () => {

    const {
        events, activeEvent
    } = useSelector(state => state.calendar)

  return {
        //Propiedades
        events,
        activeEvent,
    
        //Metodos 
        
  }
}
