import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirect = (path: string, delay: number, replace: boolean = false) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(path.startsWith("/") ? path : `/${path}`, { replace });
    }, delay);

    return () => clearTimeout(timer)
  }, [navigate, path, delay, replace]);
};
