import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { activationUser } from "../api/loginAndReg.ts";

export default function UserActivation() {
  const { token } = useParams<{ token: string }>();
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!token) return;
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }

    const getMessage = async () => {
      const res = await activationUser(token);

      if (res) {
        setMessage("Your account has been activated");
        setIsSuccess(true);
      } else {
        setMessage("An error occurred during activation");
        setIsSuccess(false);
      }
    };

    getMessage();
  }, [token, isFirstRender]);

  return (
    <div>
      <div className="centered-block">
        {isSuccess !== null && (
          <div
            className={`activation-message p-3 has-text-white has-background-${
              isSuccess ? "primary" : "danger"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}
