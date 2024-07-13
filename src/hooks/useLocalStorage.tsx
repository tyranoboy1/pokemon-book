import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/slices";
import { useEffect } from "react";
import pokemonSlice from "../store/slices/pokemonSlice";

const useLocalStorage = () => {
  const language = useSelector((state: RootState) => state.pokemon.language);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      dispatch(pokemonSlice.actions.setLanguage(storedLanguage));
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (event: any) => {
      if (event.key === "language") {
        dispatch(pokemonSlice.actions.setLanguage(event.newValue));
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [dispatch]);

  useEffect(() => {
    if (language) {
      localStorage.setItem("language", language);
    }
  }, [language]);
};

export default useLocalStorage;
