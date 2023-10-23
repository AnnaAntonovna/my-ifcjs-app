import React, { FC } from "react";
import { getApp } from "firebase/app";
import { useAppContext } from "../../middleware/ContextProvider";
import { Button } from "@mui/material";
import { Navigate } from 'react-router-dom';


export const LoginForm: FC = () => {
  const [state, dispatch] = useAppContext();

  const onLogin = () => {
    dispatch({type: 'LOGIN'});
  };

  const onLogout = () => {
    dispatch({type: 'LOGOUT'})
  }

  return (
    <div>
      {state.user ? (
        <>
          <p>{state.user.displayName}</p>
          <button
          className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger hover:bg-danger hover:text-white-100 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
          onClick={onLogout}>Logout</button>
        </>
      ) : (
        <Navigate to='my-login'/>
      )}
    </div>
  );
};
