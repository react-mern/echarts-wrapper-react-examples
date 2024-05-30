import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

const RootLayout = () => {
    return (
        <div className="flex max-h-screen">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-4/5 h-screen overflow-auto flex flex-col">
                <Outlet />
            </div>
        </div>
    )
}

export default RootLayout
