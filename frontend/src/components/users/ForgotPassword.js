import { useEffect, useState } from "react";
import { forgotPassword, clearAuthError } from "..//..//actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import MetaData from "../layouts/MetaData";
import { logout } from "../../actions/userActions";

export default function ForgotPasword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    dispatch(forgotPassword(formData));
    dispatch(logout);
  };

  useEffect(() => {
    if (message) {
      toast(message, {
        type: "success",
        position: toast.POSITION.BOTTOM_CENTER,
      });
      setEmail("");
      return;
    }

    if (error) {
      toast(error, {
        position: toast.POSITION.BOTTOM_CENTER,
        type: "error",
        onOpen: () => {
          dispatch(clearAuthError);
        },
      });
      return;
    }
  }, [message, error, dispatch]);

  return (
    <div>
      <MetaData title={"Forgot Password"} />
      <div className="Miandivmobilepaddingdiv">
        <div className="row wrapper" style={{ width: "100%" }}>
          <div className="col-10 col-lg-5">
            <form onSubmit={submitHandler} className="shadow-lg">
              <h1 className="mb-3">Forgot Password</h1>
              <div className="form-group">
                <label htmlFor="email_field">Enter Email</label>
                <input
                  type="email"
                  id="email_field"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button
                type="submit2"
                className="btn update-btn btn-block mt-4 mb-3"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
