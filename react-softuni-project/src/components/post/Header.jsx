import React from 'react';
import {Avatar} from "@chakra-ui/react";
import { useUser } from '../../hooks/users';
import { PROTECTED } from "../../lib/routes";
import { Link } from "react-router-dom";

export default function Header({ uid, date }) {
    const{user, isLoading} = useUser(uid);

    if (isLoading) return "Loading...";

    const calculateRelativeTime = (timestamp) => {
        const now = new Date();
        const createdAt = new Date(timestamp);

        const timeDifference = now - createdAt;
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} days ago`;
        } else if (hours > 0) {
            return `${hours} hours ago`;
        } else if (minutes > 0) {
            return `${minutes} minutes ago`;
        } else {
            return `less than a minute ago`;
        }
    };

    return (
        <div className='header'>
            <Link to={`${PROTECTED}/profile/${user?.id}`} className="avatar-container">
                <Avatar name={user.username} />
            </Link>
            <div className="user-info-container">
                <Link to={`${PROTECTED}/profile/${user?.id}`}>
                    <button className="button-style">@{user.username}</button>
                </Link>
                <span className="text-style">{calculateRelativeTime(date)} </span>
            </div>
        </div>

    );
}
