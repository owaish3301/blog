import { Outlet } from "react-router";
import logo from "/logo.svg";
import Switch from "@/components/ui/Switch";
import { useTheme } from "../theme/theme-context";

export default function Auth() {
  const { setTheme} = useTheme();

  return (
    <div className="pt-4 md:pt-12 px-8 max-w-xl m-auto">
        <div className="fixed top-8 right-8">
          <Switch onChange={(checked) => {setTheme(checked?"light":"dark")}} />
        </div>
        <div className="w-max m-auto mb-4">
            <img src={logo} alt="logo" className="m-auto" />
            <p className="mt-4 text-2xl">Blogify</p>
        </div>
        <Outlet />
    </div>
  )
}
