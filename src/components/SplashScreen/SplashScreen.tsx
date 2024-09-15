import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  APP_DESCRIPTION,
  APP_ROUTE_DICTIONARY,
  APP_TITLE,
  WAITING_TIME_IN_WELCOME,
} from "@/config/constants";
import { selectAppIsReady, setIsReady } from "@/redux/app.slice";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";

const SplashScreen = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isReady = useAppSelector(selectAppIsReady);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    if (isReady) {
      router.push(APP_ROUTE_DICTIONARY.home.href);
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isReady]);

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsReady(true));
    }, WAITING_TIME_IN_WELCOME);
  }, []);

  return (
    <Container
      fluid
      className="vh-100 d-flex flex-column justify-content-center bg-primary bg-gradient"
    >
      <h1 className="display-1 text-white text-center">
        <span className="border-bottom border-4">{APP_TITLE}</span>
      </h1>
      <p className="lead text-white text-center">{APP_DESCRIPTION}</p>
    </Container>
  );
};

export default SplashScreen;
