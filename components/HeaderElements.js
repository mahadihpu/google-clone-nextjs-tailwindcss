import { DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import HeaderElement from './HeaderElement';

const HeaderElements = () => {
    return (
        <div className="flex w-full justify-evenly lg:text-base lg:justify-start lg:space-x-36 lg:pl-32 border-b-[1px]">
            <div className="flex space-x-6">
                <HeaderElement title="All" Icon={SearchIcon} selected />
                <HeaderElement title="Images" Icon={PhotographIcon} />
                <HeaderElement title="Videos" Icon={PlayIcon} />
                <HeaderElement title="News" Icon={NewspaperIcon} />
                <HeaderElement title="Maps" Icon={MapIcon} />
                <HeaderElement title="More" Icon={DotsVerticalIcon} />
            </div>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">More</p>
            </div>
        </div>
    );
};

export default HeaderElements;