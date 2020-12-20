// material icon
import AddIcon from '@material-ui/icons/Add';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

// paths name
import { PATH_NAME } from 'configs';

export const navBarCommon = [
  {
    subheader: 'Demo',
    items: [
      {
        title: 'Playbackground',
        href: PATH_NAME.PLAY_BACKGROUND,
        icon: SportsEsportsIcon,
      },
    ],
  },
  {
    subheader: 'Dashboard',
    items: [
      {
        title: 'Product',
        icon: LibraryMusicIcon,
        href: PATH_NAME.SONG,
        items: [
          {
            title: 'Add Product',
            icon: AddIcon,
            href: PATH_NAME.SONG_ADD,
          },
          {
            title: 'List Product',
            icon: ViewListIcon,
            href: PATH_NAME.SONG_LISTS,
          },
        ],
      },
      {
        title: 'Rapper',
        href: PATH_NAME.ARTISTS,
        icon: PersonIcon,
      },
    ],
  },
  {
    subheader: 'Users',
    items: [
      {
        title: 'Users',
        icon: PeopleIcon,
        href: PATH_NAME.USERS,
      },
    ],
  },
];
