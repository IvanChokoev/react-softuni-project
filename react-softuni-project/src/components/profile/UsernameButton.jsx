import { PROTECTED } from "../../lib/routes";
import { Link } from "react-router-dom";
import "./index.css"

export default function UsernameButton({user}) {
  return (
      <Link to={`${PROTECTED}/profile/${user?.id}`}>
          <button className="button-style">@{user.username}</button>
      </Link>
  )
}