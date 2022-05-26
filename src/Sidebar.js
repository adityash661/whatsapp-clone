import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';
import { ChatOutlined, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

const Sidebar = () => {
  return ( 
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://yt3.ggpht.com/yti/APfAmoGgdxeLOii-0p-ww888gZc6DS69gC8DpK99g900Rw=s88-c-k-c0x00ffffff-no-rj-mo"/>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
   );
}
 
export default Sidebar;