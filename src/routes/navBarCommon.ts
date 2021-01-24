// material icon
import AddIcon from '@material-ui/icons/Add';
import ShopIcon from '@material-ui/icons/Shop';
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
        icon: ShopIcon,
        href: PATH_NAME.PRODUCT,
        items: [
          {
            title: 'Add Product',
            icon: AddIcon,
            href: PATH_NAME.PRODUCT_ADD,
          },
          {
            title: 'List Product',
            icon: ViewListIcon,
            href: PATH_NAME.PRODUCT_LIST,
          },
        ],
      },
      {
        title: 'Rapper',
        href: PATH_NAME.RAPPER,
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
