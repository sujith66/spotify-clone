import React from "react";
import { HeartIcon, HomeIcon, LibraryIcon, PlayIcon, RssIcon, SearchIcon } from "@heroicons/react/outline";

function Sidebar() {
  return (
    <div className="text-gray-500 p-5 text-sm">
      <div className="space-y-4">
        <button className="flex items-center gap-1 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>

        <button className="flex items-center gap-1 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center gap-1 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your library</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900"/>

        <button className="flex items-center gap-1 hover:text-white">
          <PlayIcon className="h-5 w-5" />
          <p>Create playlist</p>
        </button>

        <button className="flex items-center gap-1 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center gap-1 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your Episodes</p>
        </button>

        <hr className="border-t-[0.1px] border-gray-900"/>

        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
        <p className="cursor-pointer hover:text-white">Playlist name</p>
      </div>
    </div>
  );
}

export default Sidebar;
