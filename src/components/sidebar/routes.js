import { ReactComponent as Dash } from '../../assets/hompage.svg';
import { ReactComponent as Quotes } from '../../assets/fi_file-text.svg';
import { ReactComponent as Book } from '../../assets/u_book-alt.svg';
import { ReactComponent as Ship } from '../../assets/uil_ship.svg';
import { ReactComponent as Trade } from '../../assets/u_wallet.svg';

import { ReactComponent as Bills } from '../../assets/fi_credit-card.svg';
import { ReactComponent as Products } from '../../assets/u_pricetag-alt.svg';
import { ReactComponent as FixedRates } from '../../assets/u_balance-scale.svg';
import { ReactComponent as Network } from '../../assets/u_user.svg';
import { ReactComponent as Reports } from '../../assets/u_folder-open.svg';

import { ReactComponent as Notifications } from '../../assets/ion_notifications-outline.svg';
import { ReactComponent as Settings } from '../../assets/u_setting.svg';
import { ReactComponent as Support } from '../../assets/Support.svg';

export const topRoutes = [
  { title: 'Dashboard', link: '', img: Dash },
  { title: 'Quotes', link: 'quotes', img: Quotes },
  { title: 'Bookings', link: 'bookings', img: Book },
  { title: 'Shipments', link: 'shipments', img: Ship },
  { title: 'Trade Finance', link: 'trade-finance', img: Trade },
];

export const midRoutes = [
  { title: 'Billings', link: 'billings', img: Bills },
  { title: 'Products', link: 'products', img: Products },
  { title: 'Fixed Rates', link: 'fixed-rates', img: FixedRates },
  { title: 'Network', link: 'network', img: Network },
  { title: 'Reports', link: 'reports', img: Reports },
];

export const baseRoutes = [
  { title: 'Notifications', link: 'notifications', img: Notifications },
  { title: 'Settings', link: 'settings', img: Settings },
  { title: 'Support', link: 'support', img: Support },
];
