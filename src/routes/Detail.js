import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === null) {
      navigate(`${process.env.PUBLIC_URL}/`);
    }
  });

  if (location.state) {
    const { title } = location.state;
    return <span>{title}</span>;
  }
}

export default Detail;
