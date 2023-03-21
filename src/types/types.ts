export type authPostDataType = {
  email: string;
  password: string;
};

export type UsersType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type ReceivedUsersDataType = {
  length: number;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UsersType[];
};

export type authStateType = {
  token: string | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string;
};
export type AuthButtonType = {
  onClickHandler: () => void;
  label: string;
};

export type OAuthButtonType = {
  onClickHandler: () => void;
  label: string;
  icon: string;
};

export type PasswordStrengthType = {
  password: string;
};

export interface TableProps {
  data: UsersType[];
}

export type LINK_TYPE = {
  key: string;
  label: string;
  path: string;
  icon: string;
};

export type SIDEBAR_LINKS_TYPE = LINK_TYPE[];
