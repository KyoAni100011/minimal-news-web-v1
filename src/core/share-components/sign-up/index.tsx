import { Link } from "@tanstack/react-router";

export default function SignUp() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="font-bold text-lg">Sign Up</p>
      <form>
        <div className="mb-2">
          <label className="block mb-2" htmlFor="email">
            Email:
          </label>
          <input className="border" type="email" id="email" />
        </div>
        <div className="mb-2">
          <label className="block mb-2" htmlFor="password">
            Password:
          </label>
          <input className="border" type="password" id="password" />
        </div>
        <div>
          <button className="border px-1" type="submit">
            Sign up
          </button>
        </div>
        <Link className="text-blue-800 underline" to="/">
          Forgot password
        </Link>
        <div>
          Create new account?
          <Link className="ml-1 text-blue-800 underline" to="/signin">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
