import { User } from "../../types/user";
import { client } from "../../utils/fetchClient";

export const getUsers = async () => {
  return await client.get<User[]>('/table');
};