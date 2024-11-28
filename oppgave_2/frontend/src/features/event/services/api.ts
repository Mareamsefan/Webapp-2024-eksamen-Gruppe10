import { ofetch } from 'ofetch';
import { endpoint } from "@/config/url";


const list = async () => {
    try {
        const events = await ofetch(endpoint.events.list);
        
        if (events.length === 0) {
            console.warn('No events found.');
            return {
                status: 204,
                message: 'No Content (ingen arrangementer)',
                data: [],
            };
        }

        return {
            status: 200,
            message: 'OK',
            data: events,
        };
    } catch (error) {
        console.error('Error fetching events:', error);

        throw {
            status: 500,
            message: 'Internal Server Error',
            error: 'An unknown error occurred',
        };
    }
};



const details = async (id: string) => {
    try {
        const event = await ofetch(endpoint.events.details.replace('{id}', id));
        
        return {
            status: 200,
            message: 'OK',
            data: event,
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error fetching details for event ID ${id}:`, error.message);

            if (error.message.includes('404')) {
                throw {
                    status: 404,
                    message: `Event with ID ${id} not found`,
                };
            }

            throw {
                status: 500,
                message: 'Internal Server Error',
                error: error.message,
            };
        } else {
            console.error(`Unknown error occurred while fetching details for ID ${id}:`, error);
            throw {
                status: 500,
                message: 'Internal Server Error',
                error: 'An unknown error occurred',
            };
        }
    }
};



const create = async (data: Record<string, any>) => {
    try {
        const newEvent = await ofetch(endpoint.events.create, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return {
            status: 200,
            message: 'Event created successfully',
            data: newEvent,
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error creating event:', error.message);

            if (error.message.includes('404')) {
                throw {
                    status: 404,
                    message: 'Endpoint not found',
                };
            }

            throw {
                status: 500,
                message: 'Internal Server Error',
                error: error.message,
            };
        } else {
            console.error('Unknown error occurred while creating event:', error);
            throw {
                status: 500,
                message: 'Internal Server Error',
                error: 'An unknown error occurred',
            };
        }
    }
};



const update = async (id: string, data: Record<string, any>) => {
    try {
        const updatedEvent = await ofetch(endpoint.events.update.replace('{id}', id), {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return {
            status: 200,
            message: 'Event updated successfully',
            data: updatedEvent,
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error updating event with ID ${id}:`, error.message);

            if (error.message.includes('404')) {
                throw {
                    status: 404,
                    message: `Event with ID ${id} not found`,
                };
            }

            throw {
                status: 500,
                message: 'Internal Server Error',
                error: error.message,
            };
        }

        console.error(`Unknown error occurred while updating event with ID ${id}:`, error);
        throw {
            status: 500,
            message: 'Internal Server Error',
            error: 'An unknown error occurred',
        };
    }
};


const remove = async (id: string) => {
    try {
        const deletedEvent = await ofetch(endpoint.events.delete.replace('{id}', id), {
            method: 'DELETE',
        });

        return {
            status: 200,
            message: 'Event deleted successfully',
            data: deletedEvent,
        };
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error deleting event with ID ${id}:`, error.message);

            if (error.message.includes('404')) {
                throw {
                    status: 404,
                    message: `Event with ID ${id} not found`,
                };
            }

            throw {
                status: 500,
                message: 'Internal Server Error',
                error: error.message,
            };
        }

        console.error(`Unknown error occurred while deleting event with ID ${id}:`, error);
        throw {
            status: 500,
            message: 'Internal Server Error',
            error: 'An unknown error occurred',
        };
    }
};


export const eventsApi = {
    list,
    details,
    create,
    update,
    remove,
};