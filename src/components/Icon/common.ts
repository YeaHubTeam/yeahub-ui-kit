import Cap from '../../assets/academic-cap.svg';
import Chat from '../../assets/icons/chat.svg';
import Check from '../../assets/icons/check.svg';
import ChevroneDown from '../../assets/icons/chevrone_down.svg';
import ChevroneLeft from '../../assets/icons/chevrone_left.svg';
import ChevroneRight from '../../assets/icons/chevrone_right.svg';
import CloseSidebar from '../../assets/icons/close_sidebar.svg';
import Follow from '../../assets/icons/follow.svg';
import Kebab from '../../assets/icons/kebab.svg';
import Notification from '../../assets/icons/notification.svg';
import OpenSidebar from '../../assets/icons/open_sidebar.svg';
import Search from '../../assets/icons/search.svg';
import Settings from '../../assets/icons/settings.svg';

export const icons: Record<
  string,
  (arg?: boolean) => React.FunctionComponent<React.SVGAttributes<SVGElement>>
> = {
  cap: () => Cap,
  chat: () => Chat,
  check: () => Check,
  chevroneDown: () => ChevroneDown,
  chevroneLeft: () => ChevroneLeft,
  chevroneRight: () => ChevroneRight,
  closeSidebar: () => CloseSidebar,
  follow: () => Follow,
  kebab: () => Kebab,
  notification: () => Notification,
  search: () => Search,
  settings: () => Settings,
  sidebar: (isExpanded?) => (isExpanded ? CloseSidebar : OpenSidebar),
};
