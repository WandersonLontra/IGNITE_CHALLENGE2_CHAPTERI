


import { SideBar } from './components/SideBar';
import { Content } from './components/Content';



import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { GenreIdProvider } from './Context/SelectedGenreId';

export function App() {

  return (
    <GenreIdProvider>

      <div style={{ display: 'flex', flexDirection: 'row' }}>

        <SideBar />

        <Content />
        
      </div>

    </GenreIdProvider>

  )
}