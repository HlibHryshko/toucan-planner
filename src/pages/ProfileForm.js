import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import Field from "../components/Field";
import { changeEmail, changePassword } from "../store";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => {
    return state.form;
  });
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
          top: "721px",
          right: "0",
          width: "231px",
          height: "346px",
        }}
      />
      <form
        onSubmit={() => {}}
        className="border-2 border-green-800 rounded-xl p-4 shadow-2xl space-y-10"
        style={{
          width: "600px",
          height: "600px",
          border: "6px solid #004A47",
          boxShadow: "0px 0px 66px 6px rgba(0, 0, 0, 0.25)",
          borderRadius: "25px",
        }}
      >
        {/* Profile div */}
        <div
          className="text-center mx-auto"
          style={{
            height: "55px",
            fontWeight: "400",
            fontSize: "48px",
            fontFamily: "Koh Santepheap",
            color: "#474747",
            marginTop: "28px",
          }}
        >
          <h1>PROFILE</h1>
        </div>
        {/* div that creates space between fields and buttons */}
        <div className="flex flex-col justify-center space-y-5 font-semibold">
          <div>
            {/* div that holds fields */}
            <div>
              <div
                value={email}
                onChange={(event) => {
                  dispatch(changeEmail(event.target.value));
                }}
                className="flex justify-center"
              >
                <Field
                  className="text-center w-96 h-12 max-h-full mt-0 font-semibold"
                  placeholder="Name"
                />
              </div>
            </div>
            {/* div that holds buttons and so on */}
            <div className="flex flex-col items-center">
              <Button primary rounded className="rounded-xl w-96 h-12 mt-5 text-lg">
                My courses
              </Button>
            </div>
            <div
                value={email}
                onChange={(event) => {
                  dispatch(changeEmail(event.target.value));
                }}
                className="flex justify-center"
              >
                <Field
                  className="text-center w-96 h-12 max-h-full mt-6 font-semibold"
                  placeholder="old password"
                />
              </div>
              <div
                value={email}
                onChange={(event) => {
                  dispatch(changeEmail(event.target.value));
                }}
                className="flex justify-center"
              >
                <Field
                  className="text-center w-96 h-12 max-h-full mt-2 font-semibold"
                  placeholder="new password"
                />
              </div>
              <div
                value={email}
                onChange={(event) => {
                  dispatch(changeEmail(event.target.value));
                }}
                className="flex justify-center"
              >
                <Field
                  className="text-center w-96 h-12 max-h-full mt-2 font-semibold"
                  placeholder="repeat password"
                />
              </div>
            {/* div that holds buttons and so on */}
            <div className="flex flex-col items-center">
              <Button primary rounded className="w-64 h-12 mt-10 text-lg">
                Back
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
