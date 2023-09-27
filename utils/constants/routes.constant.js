import Dashboard from "../../assets/images/svg/dashboard";
import DropdownDashboardIcon from "../../assets/images/svg/dropdown-dashboard-icon";
import DropdownLogoutIcon from "../../assets/images/svg/dropdown-logout-icon";
import DropdownManagePortfolioIcon from "../../assets/images/svg/dropdown-manage-portfolio-icon";
import DropdownMyProfileIcon from "../../assets/images/svg/dropdown-my-profile-icon";
import DropdownMyOrdersIcon from "../../assets/images/svg/dropdown-my-orders-icon";
import DropdownSellYourDesignIcon from "../../assets/images/svg/dropdown-sell-your-design-icon";
import EarningsPayments from "../../assets/images/svg/earnings-payments";
import MyDesign from "../../assets/images/svg/my-design";
import Profile from "../../assets/images/svg/profile";

export const UNAUTHENTICATED_ROUTES = {
  HOME: "/",
  COLLECTION: "/collection",
  MEN: "/men",
  WOMEN: "/women",
  SELL_YOUR_DESIGN: "/sell-your-design",
  CONTACT_US: "contact-us",
  USER_AGREEMENT: "/user-agreement",
  PRIVACY_POLICY: "/privacy-policy",
  COOKIE_POLICY: "/cookie-policy",
  DESIGN_PRODUCT_LISTING: "/design-product-listing",
  CUSTOMIZE_PRODUCT: "/customize-product",
  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDER_CONFIRMATION: "/order-confirmation",
};

export const AUTHENTICATED_ROUTES = {
  MY_DASHBOARD: "/dashboard",
  MY_DESIGN: "/my-designs",
  ADD_ARTWORK: "/add-artwork",
  EARNINGS_PAYMENTS: "/earnings-payments",
  MANAGE_PORTFOLIO: "/manage-portfolio",
  DESIGN_PRODUCT_LISTING: "/design-product-listing",
  CUSTOMIZE_PRODUCT: "/customize-product",
  ASSOCIATED_PRODUCTS: "/associated-products",
  MY_ORDERS: "/orders",
  MY_PROFILE: "/profile",
  LOGOUT: "/logout",
};

export const HomeMenuItems = [
  {
    label: "Home",
    linkTo: UNAUTHENTICATED_ROUTES.HOME,
    selectedOptionKey: "home",
  },

  {
    label: "Orders",
    linkTo: AUTHENTICATED_ROUTES.MY_ORDERS,
    selectedOptionKey: "orders",
  },

  {
    label: "Collection",
    linkTo: UNAUTHENTICATED_ROUTES.COLLECTION,
    selectedOptionKey: "collection",
  },
  {
    label: "Men",
    linkTo: UNAUTHENTICATED_ROUTES.MEN,
    selectedOptionKey: "men",
  },
  {
    label: "Women",
    linkTo: UNAUTHENTICATED_ROUTES.WOMEN,
    selectedOptionKey: "women",
  },
  {
    label: "Sell Your Design",
    linkTo: UNAUTHENTICATED_ROUTES.SELL_YOUR_DESIGN,
    selectedOptionKey: "sell-your-design",
  },
  {
    label: "Contact Us",
    linkTo: UNAUTHENTICATED_ROUTES.CONTACT_US,
    selectedOptionKey: "contact-us",
  },
];

export const DropdownMenu = [
  {
    label: "My Dashboard",
    linkTo: AUTHENTICATED_ROUTES.MY_DASHBOARD,
    selectedOptionKey: "my-dashboard",
    icon: <DropdownDashboardIcon />,
  },

  {
    label: "Sell Your Design",
    linkTo: AUTHENTICATED_ROUTES.MY_DASHBOARD,
    selectedOptionKey: "my-design",
    icon: <DropdownSellYourDesignIcon />,
  },

  {
    label: "Manage Portfolio",
    linkTo: `${AUTHENTICATED_ROUTES.MY_DASHBOARD}/${AUTHENTICATED_ROUTES.MY_DESIGN}`,
    selectedOptionKey: "manage-portfolio",
    icon: <DropdownManagePortfolioIcon />,
  },

  {
    label: "My Orders",
    linkTo: AUTHENTICATED_ROUTES.MY_ORDERS,
    selectedOptionKey: "my-orders",
    icon: <DropdownMyOrdersIcon />,
  },

  {
    label: "My Profile",
    linkTo: `${AUTHENTICATED_ROUTES.MY_DASHBOARD}/${AUTHENTICATED_ROUTES.MY_PROFILE}`,
    selectedOptionKey: "my-portfolio",
    icon: <DropdownMyProfileIcon />,
  },

  {
    label: "Logout",
    linkTo: UNAUTHENTICATED_ROUTES.HOME,
    selectedOptionKey: "logout",
    icon: <DropdownLogoutIcon />,
  },
];

export const FooterMenu = [
  {
    label: "User Agreement",
    linkTo: UNAUTHENTICATED_ROUTES.USER_AGREEMENT,
    selectedOptionKey: "user-agreement",
  },
  {
    label: "Privacy Policy",
    linkTo: UNAUTHENTICATED_ROUTES.PRIVACY_POLICY,
    selectedOptionKey: "privacy-policy",
  },
  {
    label: "Cookie Policy",
    linkTo: UNAUTHENTICATED_ROUTES.COOKIE_POLICY,
    selectedOptionKey: "cookie-policy",
  },
];

export const DASHBOARD_MENU = [
  {
    label: "Dashboard",
    linkTo: AUTHENTICATED_ROUTES.MY_DASHBOARD,
    selectedOptionKey: "dashboard",
    icon: <Dashboard />,
  },

  {
    label: "My Designs",
    linkTo: `${AUTHENTICATED_ROUTES.MY_DASHBOARD}${AUTHENTICATED_ROUTES.MY_DESIGN}`,
    selectedOptionKey: "my-design",
    icon: <MyDesign />,
  },
  {
    label: "Earnings & Payments",
    linkTo: `${AUTHENTICATED_ROUTES.MY_DASHBOARD}${AUTHENTICATED_ROUTES.EARNINGS_PAYMENTS}`,
    selectedOptionKey: "earnings-payments",
    icon: <EarningsPayments />,
  },
  {
    label: "My Profile",
    linkTo: `${AUTHENTICATED_ROUTES.MY_DASHBOARD}${AUTHENTICATED_ROUTES.MY_PROFILE}`,
    selectedOptionKey: "my-profile",
    icon: <Profile />,
  },
];
