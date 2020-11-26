// material icon
import AddIcon from '@material-ui/icons/Add';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import ViewListIcon from '@material-ui/icons/ViewList';
import PersonIcon from '@material-ui/icons/Person';
import BuildIcon from '@material-ui/icons/Build';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleIcon from '@material-ui/icons/People';
import CheckIcon from '@material-ui/icons/Check';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EditIcon from '@material-ui/icons/Edit';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
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
    subheader: 'Song Library',
    items: [
      {
        title: 'Songs',
        icon: LibraryMusicIcon,
        href: PATH_NAME.SONG,
        items: [
          {
            title: 'Add Songs',
            icon: AddIcon,
            href: PATH_NAME.SONG_ADD,
          },
          {
            title: 'List Song',
            icon: ViewListIcon,
            href: PATH_NAME.SONG_LISTS,
          },
        ],
      },
      {
        title: 'Artists',
        href: PATH_NAME.ARTISTS,
        icon: PersonIcon,
      },
    ],
  },
  {
    subheader: 'Tools',
    items: [
      {
        title: 'NoteBot',
        icon: BuildIcon,
        href: PATH_NAME.TOOLS_NOTEBOT,
      },
    ],
  },
  {
    subheader: 'Analytics',
    items: [
      {
        title: 'Amplitude',
        icon: AssessmentIcon,
        isExternalLink: true,
        href: PATH_NAME.AMPLITUDE,
      },
    ],
  },
  {
    subheader: 'App Library',
    items: [
      {
        title: 'Apps',
        icon: AppsIcon,
        href: PATH_NAME.APP,
        items: [
          {
            title: 'Add Apps',
            icon: AddIcon,
            href: PATH_NAME.APP_ADD,
          },
          {
            title: 'List Apps',
            icon: ViewListIcon,
            href: PATH_NAME.APP_LISTS,
          },
        ],
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
  {
    subheader: 'License Library',
    items: [
      {
        title: 'Licenses',
        icon: CheckIcon,
        href: PATH_NAME.LICENSES,
        items: [
          {
            title: 'Add License',
            icon: AddIcon,
            href: PATH_NAME.LICENSES_ADD,
          },
          {
            title: 'List Linceses',
            icon: ViewListIcon,
            href: PATH_NAME.LICENSES_LISTS,
          },
        ],
      },
    ],
  },
  {
    subheader: 'Location',
    items: [
      {
        title: 'Location',
        icon: LocationOnIcon,
        href: PATH_NAME.LOCATION,
      },
    ],
  },
  {
    subheader: 'Systems',
    items: [
      {
        title: 'Mass Process',
        icon: BookmarksIcon,
        href: PATH_NAME.SYSTEM,
        items: [
          {
            title: 'Mass Tagging',
            icon: LocalOfferIcon,
            href: PATH_NAME.SYSTEM_MASS_TAGGING,
          },
          {
            title: 'Mass Editing',
            icon: EditIcon,
            href: PATH_NAME.SYSTEM_MASS_EDITING,
          },
        ],
      },
    ],
  },
];
