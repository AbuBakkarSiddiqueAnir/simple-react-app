
import { OAuthButtonType } from "../../../../types/types";

function OauthButton({ onClickHandler, icon, label }:OAuthButtonType) {
  return (

      <button
        onClick={onClickHandler}
        className="px-6 py-4 bg-secondaryColor text-textColor-first text-[16px] leading-[19px]  rounded-[16px]  flex items-center"
      >
        <img src={icon} className="mr-2" />

        {label}
      </button>

  );
}

export default OauthButton;
