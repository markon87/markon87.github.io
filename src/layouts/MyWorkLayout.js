import { Outlet } from "react-router-dom"

export default function MyWorkLayout() {
  return (
    <div className="container work-layout">
      <h1 className="page-title">My Work</h1>
      <br />
      <Outlet />
    </div>
  )
}
