import { useDispatch, useSelector } from "react-redux";
import {
  onAddNewEvent,
  onDeleteEvent,
  onLoadEvents,
  onSetActiveEvent,
  onUpdateEvent,
} from "../store";
import { calendarApi } from "../api";
import { convertEventsToDateEvents } from "../helpers";
import Swal from "sweetalert2";

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = async (calendarEvent) => {
    try {
      dispatch(onSetActiveEvent(calendarEvent));
    } catch (error) {
      console.log(error);
    }
  };
  const startSavingEvent = async (calendarEvent) => {
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/event/${calendarEvent.id}`, calendarEvent);
        dispatch(onUpdateEvent({ ...calendarEvent, user }));
        return;
      }
      const {
        data: { info },
      } = await calendarApi.post("/event", calendarEvent);
      dispatch(onAddNewEvent({ ...calendarEvent, id: info.id, user }));
    } catch (error) {
      console.error(error);
      Swal.fire("Update Error", error.response.data.msg, "error");
    }
  };
  const startDeleteEvent = async () => {
    try {
      await calendarApi.delete(`/event/${activeEvent.id}`);
      dispatch(onDeleteEvent());
    } catch (error) {
      console.error(error);
      Swal.fire("Delete Error", error.response.data.msg, "error");
    }
  };
  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get("/event");
      const events = convertEventsToDateEvents(data.info);
      dispatch(onLoadEvents(events));
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };

  return {
    //*Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,
    //*Metodos
    startDeleteEvent,
    setActiveEvent,
    startLoadingEvents,
    startSavingEvent,
  };
};
