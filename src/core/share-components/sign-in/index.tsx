import { Link } from "@tanstack/react-router";

export default function SignIn() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <p className="font-bold text-lg">Sign Up</p>
      <form>
        <div className="mb-2">
          <label className="block mb-2" htmlFor="username">
            Username:
          </label>
          <input className="border" type="text" id="username" />
        </div>
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
        <div>
          Already have account?
          <Link className="ml-1 text-blue-800 underline" to="/signup">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
