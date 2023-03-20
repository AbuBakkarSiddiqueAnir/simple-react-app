

type password = {
  password: string
}


const PasswordStrength = ({ password }: password) => {

  const calculatePasswordStrength = (password: string) => {
    let score = 0;
    if (!password) return score;

    // Check for at least 8 characters
    if (password.length >= 8) {
      score = score + 2;
    }

    // Check for uppercase and lowercase characters
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      score = score + 2;
    }

    // Check for numbers and symbols
    if (/\d/.test(password) && /\W/.test(password)) {
      score = score + 2;
    }

    // Check for repeating characters
    if (/([a-zA-Z0-9])\1{2,}/.test(password)) {
      score--;
    }

    return score;
  };

  const checkBackground = (i: number) => {
    let strength = calculatePasswordStrength(password)
    if (strength > i) return true
    else return false
  }


  return (
    <div className="mt-2">
      <div className="w-full h-2  rounded-full">
        <div
          className={`h-full rounded-full flex transition-all duration-300 ease-in-out w-full gap-x-4 `}

        >
          {
            new Array(6).fill(0).map((_, i) => {
              return (
                <div
                  key={i}
                  style={{ background: `${checkBackground(i) && '#38CB89' }` }}
                  className={` bg-[#F3F3F3] h-1 flex-1  rounded-[2px]`}></div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default PasswordStrength;