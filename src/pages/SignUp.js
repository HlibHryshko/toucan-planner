import { useState } from "react";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Field from "../components/Field";

const SignUp = () => {
  const [privacySettingsAccepted, setPrivaceSettingsAccepted] = useState(false);
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: "100vh",
        position: "relative",
        padding: "15px",
      }}
    >
      <img
        alt=""
        src="tucan.png"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "231px",
          height: "346px",
        }}
      />
      <form
        onSubmit={() => {}}
        className="border-2 border-green-800 rounded-xl p-4 shadow-2xl space-y-5"
        style={{
          width: "458px",
          height: "515px",
          border: "6px solid #004A47",
          boxShadow: "0px 0px 66px 6px rgba(0, 0, 0, 0.25)",
          borderRadius: "25px",
        }}
      >
        {/* Sign Up div */}
        <div
          style={{
            width: "171px",
            height: "55px",
            fontWeight: "400",
            fontSize: "40px",
            display: "flex",
            color: "#474747",
            marginLeft: "155px",
            marginTop: "44px",
          }}
        >
          Sign Up
        </div>
        {/* div that creates space between fields and buttons */}
        <div className="flex flex-col justify-center space-y-5">
          <div>
            {/* div that holds fields */}
            <div>
              <div className="flex justify-center">
                <Field
                  className="text-center w-full h-12 max-h-full mx-10 mt-5"
                  placeholder="e-mail"
                />
              </div>
              <div className="flex justify-center">
                <Field
                  className="text-center w-full h-12 max-h-full mx-10 mt-5"
                  placeholder="password"
                />
              </div>
              <div className="flex justify-center">
                <Field
                  className="text-center w-full h-12 max-h-full mx-10 my-5"
                  placeholder="repeat password"
                />
              </div>
            </div>
            {/* div that holds buttons and so on */}
            <div>
              <CheckBox
                value={privacySettingsAccepted}
                onChange={() => {
                  setPrivaceSettingsAccepted((currentState) => !currentState);
                }}
              />
            </div>
            <div className="flex flex-col items-center">
              <Button primary rounded className="w-64 h-12 mt-5 text-lg">
                Sign Up
              </Button>

              {/* div that holds already have an account and sign in options */}
              <div className="flex">
                <div
                  style={{
                    width: "171px",
                    height: "55px",
                    fontSize: "15px",
                    lineHeight: "48px",
                    display: "flex",
                    color: "#474747",
                    marginLeft: "120px",
                  }}
                >
                  {" "}
                  Already have an account?
                </div>
                <div
                  style={{
                    width: "171px",
                    height: "55px",
                    fontSize: "15px",
                    lineHeight: "48px",
                    display: "flex",
                    color: "#004A47",
                    marginLeft: "7px",
                  }}
                >
                  {" "}
                  Sign In
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
