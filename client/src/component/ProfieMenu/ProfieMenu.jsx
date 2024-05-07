import React from 'react';
import { Avatar, Menu, MenuItem } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({ user, logout }) => {
//   const navigate = useNavigate();

  return (
    <div>User details</div>
    // <Menu>
    //     <Menu.Target>
    //         <Avatar  src={user?.picture} alt='user image' radius={'xl'}/>
    //     </Menu.Target>
    //     <Menu.Dropdown>
    //         <Menu.Item>
    //             Favourites
    //         </Menu.Item>
    //     </Menu.Dropdown>
    // </Menu>
  );
};

export default ProfileMenu;




// import React from 'react'
// import { Avatar, Menu, MenuDropdown, MenuItem } from '@mantine/core'
// import { useNavigate } from 'react-router-dom'
// const ProfileMenu = ({ user, logout }) => {
//     const navigate = useNavigate()
//     return (
//         <Menu>
//             <Menu.Target>
//                 <Avatar src={user?.picture} alt='user image' radius={"xl"} />
//             </Menu.Target>
//             <Menu.Dropdown>
//                 <Menu.Item onClick={() => navigate("./favourites", { replace: true })}>
//                     Favourites
//                 </Menu.Item>

//                 <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
//                     Bookings
//                 </Menu.Item>

//                 <Menu.Item onClick={() => {
//                     localStorage.clear();
//                     logout()
//                 }}>
//                     Logout
//                 </Menu.Item>
//             </Menu.Dropdown>
//         </Menu>
//     )
// }

// export default ProfileMenu





{/* <Menu>
<Menu.Target>
    <Avatar src={user?.Avatar} alt='user image' radius={"xl"}/>
</Menu.Target>
<Menu.Dropdown>
    <Menu.Item>
        Favorites
    </Menu.Item>
</Menu.Dropdown>
</Menu> */}