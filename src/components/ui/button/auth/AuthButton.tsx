

function AuthButton({ onClickHandler }: { onClickHandler: () => void }) {
  return (
    <button onClick={onClickHandler} className="bg-primaryColor hover:bg-blue-700 text-white text-[16px] leading-5 font-bold py-4 px-4 rounded-[16px]">
      Sign up
    </button>
  )
}

export default AuthButton
