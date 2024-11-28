import { useCallback, useState } from "react";
import { eventsApi } from "@/features/event/services/api"; 
import { useEffectOnce } from "@/hooks/useEffectOnce";
import { Event } from "@/features/event/lib/schema"

type Status = "idle" | "loading" | "error" | "success" | "fetching";

export function useEvent() {
  const [eventStatus, setEventStatus] = useState<Status>("idle");
  const [eventData, setEventData] = useState<Event[]>([]);
  const [eventError, setEventError] = useState<string | null>(null);

  const isFetching = eventStatus === "fetching";
  const isLoading = eventStatus === "loading" || isFetching;
  const isError = eventStatus === "error" || !!eventError;
  const isIdle = eventStatus === "idle";
  const isSuccess = eventStatus === "success";

  const resetToIdle = useCallback(
    (timeout = 2000) =>
      setTimeout(() => {
        setEventStatus("idle");
      }, timeout),
    []
  );

  const fetchEvents = useCallback(async () => {
    try {
      console.log("FUNKER DENNE DA?")
      setEventStatus("loading");
      const result = await eventsApi.list();
      setEventData(result.data as Event[]);
      setEventStatus("success");
    } catch (error) {
      setEventStatus("error");
      setEventError("Failed to fetch events");
    }
  }, []);

  console.log(eventData)
  const addEvent = async (data: Partial<Event>) => {
    try {
        setEventStatus("loading");
      await eventsApi.create(data);
      await fetchEvents();
      setEventStatus("success");
    } catch (error) {
      setEventStatus("error");
      setEventError("Failed to create event");
    } finally {
      resetToIdle();
    }
  }




  const updateEvent = async (id: string, data: Partial<Event>) => {
      try {
        setEventStatus("loading");
        await eventsApi.update(id, data);
        await fetchEvents();
        setEventStatus("success");
      } catch (error) {
        setEventStatus("error");
        setEventError(`Failed to update event with ID: ${id}`);
      } finally {
        resetToIdle();
      }
    };



  const deleteEvent = async (id: string) => {
      try {
        setEventStatus("loading");
        await eventsApi.remove(id);
        await fetchEvents();
        setEventStatus("success");
      } catch (error) {
        setEventStatus("error");
        setEventError(`Failed to delete event with ID: ${id}`);
      } finally {
        resetToIdle();
      }
    };

  useEffectOnce(fetchEvents);

  return {
    add: addEvent,
    get: fetchEvents,
    update: updateEvent,
    remove: deleteEvent,
    eventData,
    eventError,
    eventStatus: {
      idle: isIdle,
      loading: isLoading,
      success: isSuccess,
      error: isError,
      fetching: isFetching,
    },
  };
}

export default useEvent;
