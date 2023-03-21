

export interface PasswordInputPropsTypes {
    icon: string;
    onChange: (value: string) => void;
    placeHolder: string;
  }



export interface TextInputPropsTypes {
    icon: string;
    onChange: (value: string, isValid:boolean) => void;
    placeHolder: string;
    validator?:(value: string) => boolean
  }


  export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};
