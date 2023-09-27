export const FAKE_TOKEN = "8A29B2D4C575BF2DB4218B453BA91";

export const PHONE_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;

export const pageSize = 10;
export const perPageLimit = 1000;

export const PER_PAGE = {
  LIMIT: 100,
};

export const GLOBAL_DATE_TIME_FORMAT = "MM-DD-YYYY hh:mm A";
export const GLOBAL_DATE_FORMAT = "MMMM Do, YYYY";
export const GLOBAL_TIME_FORMAT = "hh:mm a";
export const GLOBAL_TIME_OUR_FORMAT = "hh:mm A";
export const LOCAL_DATE_FORMAT = "LL";

export const NUMBER_PATTERN = {
  PATTERN: /^[-+]?[0-9]+\.[0-9]+$/,
};
export const phoneMask = [
  "(",
  /[1-9]/,
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const WeekDays = [
  { day: "Monday", checked: false },
  { day: "Tuesday", checked: false },
  { day: "Wednesday", checked: false },
  { day: "Thursday", checked: false },
  { day: "Friday", checked: false },
  { day: "Saturday", checked: false },
  { day: "Sunday", checked: false },
];

export const ActiveInactive = [
  {
    label: "Active",
    value: true,
  },
  {
    label: "In Active",
    value: false,
  },
];

export const PAYMENT_OPTIONS = [
  { label: "Credit Card", value: "credit-card" },
  {
    label: "Merchant",
    value: "merchant",
  },
];
