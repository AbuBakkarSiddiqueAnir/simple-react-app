

function Divider() {
    return (
      <div className="flex items-center justify-center my-4">
        <hr className="bg-secondaryColor border-t-2 w-full mr-3" />
        <span className="text-xl leading-[24px] font-medium text-textColor-third">OR</span>
        <hr className="bg-secondaryColor border-t-2 w-full ml-3" />
      </div>
    );
  }

export default Divider