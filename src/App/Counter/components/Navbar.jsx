import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="w-[85%] mx-auto flex justify-between mt-8">
      <div className="font-bold">Counter-App</div>
      <Link to='/'>back</Link>
    </div>
  )
}

export default Navbar
