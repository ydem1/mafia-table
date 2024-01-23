import { usersFromServer } from './users';

export const getUserByID = (userId: number) => usersFromServer.find(user => user.id === userId);
