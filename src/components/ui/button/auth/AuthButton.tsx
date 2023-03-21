import { AuthButtonType } from "../../../../types/types"

function AuthButton({ onClickHandler, label }: AuthButtonType) {
  return (
    <button onClick={onClickHandler} className="bg-primaryColor hover:bg-blue-700 text-white text-[16px] leading-5 font-bold py-4 px-4 rounded-[16px]">
      {label}
    </button>
  )
}

export default AuthButton
