import React from 'react';
import FollowerCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const ProfileLeft = () => {
        return (
            <div className="ProfileSide">
                <LogoSearch/>
                <ProfileInfo/>
                <FollowerCard/>
            </div>
        );
}

export default ProfileLeft;