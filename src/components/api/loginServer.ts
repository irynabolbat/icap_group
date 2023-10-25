import { Login } from "../../types/login";
import { client } from "../../utils/fetchClient";

export const singIn = ({ 
  username, password
}: Login) => {
  return client.post<Login>('/login/', { 
    username, password
  });
};
