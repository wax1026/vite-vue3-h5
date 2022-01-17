// vant 按需引入
// import 'vant/lib/index.css';
import "@vant/touch-emulator"; // 桌面端touch适配
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeCell,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
  Icon,
  Sticky,
  Card,
  Sidebar,
  SidebarItem,
  Form,
  Field,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Tag,
  Image,
  Empty,
  Search,
  Popup,
  Loading,
  Divider
} from "vant";

const plugins = [
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeCell,
  SwipeItem,
  Grid,
  GridItem,
  NavBar,
  Icon,
  Sticky,
  Card,
  Sidebar,
  SidebarItem,
  Form,
  Field,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Tag,
  Image,
  Empty,
  Search,
  Popup,
  Loading,
  Divider
];

export default (app) => {
  plugins.forEach((item) => {
    app.use(item);
  });
};
