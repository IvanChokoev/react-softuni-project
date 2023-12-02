import { PROTECTED } from "../../lib/routes";
import UserAvatar from "../profile/Avatar";

export default function User({ user }) {
    const { id, username } = user;

    return (
        <div className="user-profile">
            <UserAvatar user={user}/>
            <p>@{username}</p>
            <a href={`${PROTECTED}/profile/${id}`} className="view-profile-link">
                <button className="view-profile-button">View Profile</button>
            </a>
        </div>
    );
}