import Button from "../components/Button";
import Field from "../components/Field";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      position: "relative",
      padding: "15px"
    }}
    >
      <img src="tucan.jpg" alt="Example image"
        style={{
          position: "absolute",
          top: "0",
          right: "0",
          width: "231px",
          height: "346px"
        }}
      />
      <form className= "border-2 border-green-800 rounded-xl p-4 shadow-2xl"
      style={{
          width: '458px',
          height: '515px',
          border: '6px solid #004A47',
          boxShadow: '0px 0px 66px 6px rgba(0, 0, 0, 0.25)',
          borderRadius: '25px'
          }} >
        
        <div style={{ width: '171px',
                      height: '55px',
                      fontWeight: '400',
                      fontSize: '40px',
                      display: 'flex',
                      color: '#474747',
                      marginLeft: "155px",
                      marginTop: "44px" }}> Sign In
        </div>
        <div style={{
                      height: '57px',
                      fontWeight: '400',
                      fontSize: '27px',
                      textAlign: "center",
                     // lineHeight: '48px',
                      display: 'flex',
                      marginBottom: '17px',
                      marginTop: "28px",
                      marginLeft: "57px",
                      marginRight: "57px"
                      }}>
          <Field placeholder = "e-mail"/>
        </div>
        <div style={{ height: '57px',
                      fontWeight: '400',
                      fontSize: '27px',
                      lineHeight: '48px',
                      display: 'flex',
                      marginBottom: '43px',
                      marginTop: "28px",
                      }}>
          <Field placeholder = "password" style={{
                      fontSize:"15px",
                      textIndent: ""}} />
        </div>
        {/* <div style={{ height: '57px',
                      fontWeight: '400',
                      fontSize: '27px',
                      lineHeight: '48px',
                      display: 'flex',
                      marginBottom: '17px',
                      marginTop: "28px",
                      marginLeft: "57px",
                      marginRight: "57px",
                      marginBottom: '43px' }}>
          <Field placeholder = "repeat password"/>
        </div> */}
        <div>
          <Button className='w-full justify-center' primary rounded 
             style={{ fontSize: '22px'}}>Sign In</Button>
          <Button className='w-full justify-center' primary outline rounded
           style={{ fontSize: '22px'}}>Forgot password</Button>
        </div>
        <div className="flex">
          <div style={{ width: '171px',
                        height: '55px',
                        fontSize: '15px',
                        lineHeight: '48px',
                        display: 'flex',
                        color: '#474747',
                        marginLeft: "90px"
                        }}> Don't have an account?
                        
          </div>
          <div style={{ width: '171px',
                        height: '55px',
                        fontSize: '15px',
                        lineHeight: '48px',
                        display: 'flex',
                        color: '#004A47'
                        }}> Sign Up
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
