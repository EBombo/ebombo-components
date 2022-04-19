import React, { useGlobal, useEffect } from "reactn";


type TranslationMap = { [key: string]: any };

export interface WithAuthenticationProps {
  children: any;
  translations: TranslationMap;
  // routes: 
}

export const TRANSLATION_KEY = "translations";

export const WithTranslation = (props : WithAuthenticationProps) => {

  const [_, setTranslation] = useGlobal<TranslationMap>(TRANSLATION_KEY);

  useEffect(() => {
    const setup = async () => {
      setTranslation(props.translations);
    };

    setup();
  }, []);

  return props.children;
};

export default WithTranslation;
