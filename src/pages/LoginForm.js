import Button from "../components/Button";
import Field from "../components/Field";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="border-2 border-green-800 rounded-xl p-4 shadow-2xl">
        <div>
          <Field />
        </div>
        <div>
          <Field />
        </div>
        <div>
          <Button className='w-full justify-center' primary rounded>Login</Button>
          <Button className='w-full justify-center' primary outline rounded>Sign Up</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
