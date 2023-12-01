import React from 'react';
import UserAvatar from "../../components/profile/Avatar.jsx";
import { useUser } from '../../hooks/users';
import  CalculateRelativeTime  from "../../utils/dateAndTime.jsx"
import UsernameButton from '../profile/UsernameButton.jsx';

export default function Header({ post }) {
    const {uid, date} = post;
    const{user, isLoading} = useUser(uid);

    if (isLoading) return "Loading...";

    return (
        ///try to fix the issue with Avatar. FIXED
        <div className='header'>
            <div className='avatar-container'>
            <UserAvatar user={user} size='md' />
            </div>
            <div className="user-info-container">
                <UsernameButton user={user}/>
                <span className="text-style">{CalculateRelativeTime({ timestamp: date })} </span>
            </div>
        </div>

    );
}
