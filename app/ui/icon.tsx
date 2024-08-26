import {
  AddIcon,
  BackArrowIcon,
  CallIcon,
  ChangeIcon,
  DeleteIcon,
  FavouriteIcon,
  LightModeIcon,
  MoreIcon,
  MuteIcon,
  SearchIcon,
  SettingsIcon,
} from '@/app/lib/icons';

const icons = {
  add: AddIcon,
  'back-arrow': BackArrowIcon,
  call: CallIcon,
  change: ChangeIcon,
  delete: DeleteIcon,
  favourite: FavouriteIcon,
  'light-mode': LightModeIcon,
  more: MoreIcon,
  mute: MuteIcon,
  search: SearchIcon,
  settings: SettingsIcon,
};

export type IconType = keyof typeof icons;

interface IconProps {
  iconId: IconType;
  className?: string;
}

const Icon = ({ iconId, className }: IconProps) => {
  const Comp = icons[iconId];
  return <Comp className={className} />;
};

export default Icon;
