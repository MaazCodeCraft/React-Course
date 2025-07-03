import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) {
    return (
      <div>
        <AiFillHeart
          color="#ff6b81"
          size={20}
          onClick={toggle}
          cursor={"pointer"}
        />
      </div>
    );
  }
  return (
    <div>
      <AiOutlineHeart size={20} onClick={toggle} cursor={"pointer"} />
    </div>
  );
};

export default Like;
