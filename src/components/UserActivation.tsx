import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { activationUser } from "../api/loginAndReg.ts";

export default function UserActivation() {
  const { token } = useParams<{ token: string }>();
  const [message, setMessage] = useState("");
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!token) return;
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const getMessage = async () => {
      const res = (await activationUser(token)) || "Oops";
      setMessage(res);
    };

    getMessage();
  }, [token, isFirstRender]);

  return (
    <div>
      <div className="centered-block">{message}</div>;
    </div>
  );
}
