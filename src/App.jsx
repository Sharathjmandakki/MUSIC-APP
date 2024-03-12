import { Route, Router, Routes, Switch } from 'react-router-dom';
import Register from './Login&Register/Register';
import Login from './Login&Register/login';
import Entry from './Login&Register/Entry';
import Update from './Login&Register/Update';
import UpdatePassword from './Login&Register/UpdatePassword';
import Artest from './Artest/Artest'
import AddPage from './Artest/AddPage'
import AddPlayList from './Artest/AddPlayList'
import AddSongs from './Artest/AddSongs'
import User from './User/User'
import Songs from './User/Songs'
import PlayList from './User/PlayList'
import PlayLists from './User/PlayLists'
import Player from './User/Player';
import Admin from './Admin/Admin';
import View from './Admin/View';
import Home from './Admin/Home';
import About from './Login&Register/About';
import Unpaid from './Helpers/Unpaid';
import Help from './Helpers/Help';
import AddUser from './Admin/AddUser';
import EditUser from './Admin/EditUser';
import DeleteUser from './Admin/DeleteUser';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/entry/' element={<Entry />}>
          <Route path='' element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='update' element={<Update />} />
          <Route path='updatepassword' element={<UpdatePassword />} />
        </Route>
        <Route path='/' element={<User />}>
          <Route path='' element={<Songs />} />
          <Route path='playlists' element={<PlayLists />} />
          <Route path='help' element={<Help />} />
        </Route>

        <Route path='/artest/' element={<Artest />}>
          <Route path='' element={<Songs />} />
          <Route path='playlists' element={<PlayLists />} />
          <Route path='add/' element={<AddPage />}>
            <Route path='' element={<AddPlayList />} />
            <Route path='addsongs' element={<AddSongs />} />
            <Route path='addplaylist' element={<AddPlayList />} />
          </Route>
          <Route path='help' element={<Help />} />
        </Route>

        <Route path='/admin/' element={<Admin />}>
          <Route path='' element={<Home />} />
          <Route path='song' element={<Songs />} />
          <Route path='playlists' element={<PlayLists />} />
          <Route path='addadmin' element={<AddUser />} />
          <Route path='add/' element={<AddPage />}>
            <Route path='' element={<AddPlayList />} />
            <Route path='addsongs' element={<AddSongs />} />
            <Route path='addplaylist' element={<AddPlayList />} />
          </Route>
          <Route path='view' element={<View />}>
          </Route>
        </Route>

        {/* <Route path='/play' element={<Player/>}/> */}
        <Route path='/playlist' element={<PlayList />} />
        <Route path='/about' element={<About />} />
        <Route path='/pay' element={<Unpaid />} />
          <Route path='/edituser' element={<EditUser />} />
          <Route path='/delete' element={<DeleteUser />} />
      </Routes>
    </div>
  );
}

export default App;
