type ButtonProps = {
  onclick?: () => void;
  name: string;
};

const Button = ({ onclick, name }: ButtonProps) => {
  return (
    <button
      onClick={onclick}
      className="bg-orange-600 cursor-pointer hover:bg-orange-500 p-1 border-1 rounded-xl active:scale-105"
    >
      {name}
    </button>
  );
};

export default Button;
