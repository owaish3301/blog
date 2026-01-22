import { Outlet } from "react-router";
import logo from "/logo.svg";

export default function Auth() {
  return (
    <div className="pt-4 md:pt-12 px-8 max-w-xl m-auto">
        <div className="w-max m-auto mb-4">
            <img src={logo} alt="logo" className="m-auto" />
            <p className="mt-4 text-2xl">Blogify</p>
        </div>
        <Outlet />
    </div>
  )
}
