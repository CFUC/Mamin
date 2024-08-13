import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <>
      <h1>404 | NOT FOUND</h1>
    </>
  );
};

export default NotFound;
