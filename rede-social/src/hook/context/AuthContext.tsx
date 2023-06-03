import * as SecurityStrore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';
import { ReactNode, createContext, useReducer } from 'react';
import { api } from '../../lib/axios';
import { Auth, UserToken } from '../../types/Auth';


interface AuthContextLogin {
  token: string;
  user: string;
  profile: string;
  erroMessage: string;
  isLoading: boolean;
  login?: () => void;
  tryLocalLogin?: () => void;
  register?: () => void;
}


const defaultValue = {
  token: '',
  user: '',
  profile: '',
  erroMessage: '',
  isLoading: true,
}



const Context = createContext<AuthContextLogin>(defaultValue)

const Provider = ({ children }: { children: ReactNode }) => {
  const reducer = (state: AuthContextLogin, action:any) => {
    switch (action.type) {
      case "login":
        return {
          ...state,
          ...action.payload,
          errorMessage: "",
        };
      case "add_error":
        return {
          ...state,
          errorMessage: action.payload,
        };
      case "user_created":
        return {
          ...state,
          ...action.payload,
          errorMessage: "",
        };
      case "logout":
        return {
          ...state,
          ...action.payload,
          errorMessage: "",
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, defaultValue);

  const login = async (auth: Auth) => {
    try {
      const {data} = await api.post('security/login', auth);
      const { user, profile } = jwtDecode(
        data.accessToken
      ) as UserToken;

      await SecurityStrore.setItemAsync("token", data.accessToken);
      await SecurityStrore.setItemAsync("user", user);
      await SecurityStrore.setItemAsync("profile", profile);

      dispatch({
        type: "login",
        payload: {
          token: data.accessToken,
          profile: profile,
          user: user,
          isLoading: false,
        },
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Houve um erro no login.",
      });
    }
  };

  const tryLocalLogin = async () => {
    try {
      const token = await SecurityStrore.getItemAsync("token");
      const user = await SecurityStrore.getItemAsync("user");
      const profile = await SecurityStrore.getItemAsync("profile");

      dispatch({
        type: "login",
        payload: {
          token,
          user,
          profile,
          isLoading: false,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const register = async (auth: Auth) => {
    try {
      await  api.post('security/register',auth);
      dispatch({
        type: "user_created",
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
      
      dispatch({
        type: "add_error",
        payload: "Houve um erro no cadastro.",
      });
    }
  };

  const logout = async () => {
    try {
      await SecurityStrore.deleteItemAsync("token");
      await SecurityStrore.deleteItemAsync("user");
      await SecurityStrore.deleteItemAsync("profile");

      dispatch({
        type: "logout",
        payload: {
          token: "",
          profile: "",
          user: "",
          isLoading: false,
        },
      });
    } catch (err) {
      dispatch({
        type: "add_error",
        payload: "Houve um erro no logout.",
      });
    }
  };
  return (
    <Context.Provider
      value={
        {
          ...state,
          login,
          tryLocalLogin,
          register,
        }

      }
    >
      {children}
    </Context.Provider>
  )
}

export { Provider, Context };

