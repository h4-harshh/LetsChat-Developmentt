import React from 'react'
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';
import {CiMenuFries} from 'react-icons/ci';


const Chatuser = () => {

  const {selectedConversation}=useConversation();
  const {onlineUsers}=useSocketContext();
  const getOnlineUsers=(userId)=>{
    return onlineUsers.includes(userId)?"online":"offline";
  }


  const isOnline=getOnlineUsers(selectedConversation._id);
  

  return (
    <div className='relative'>
        <label
            htmlFor="my-drawer-2"
            className="btn btn-ghost drawer-button lg:hidden absolute left-5 mt-2"
          >
            <CiMenuFries className="text-white text-3xl" />
        </label>
      <div className='flex space-x-3 items-center justify-center h-[10vh] bg-gray-800 hover:bg-gray-700 duration-300'>
          <div className={`avatar ${isOnline === "online"?"online":""}`}>
              <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
          </div>
          <div>
              <h1 className='xl'>{selectedConversation.fullname}</h1>
              <span className='sm'>{getOnlineUsers(selectedConversation._id)}</span>
          </div>
      </div>
    </div>
  )
}

export default Chatuser