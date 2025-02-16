import { useEffect, useState } from "react";
import { ToastItemType, ToastType, useToastStore } from "../store/toast";
import { keyframes } from "@emotion/react";
import newStyled from "@emotion/styled";

const DURATION = 4000;
const ANIMATION = 500;

interface ToastItemProps {
  toast: ToastItemType;
}

function ToastItem({ toast }: ToastItemProps) {
  const [visible, setVisible] = useState(true);
  const { subtractToastList } = useToastStore();
  const { id, type, message } = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, DURATION);

    const removeTimer = setTimeout(() => {
      subtractToastList(id); // toastList에서 제거
    }, DURATION + ANIMATION);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [id, subtractToastList]);

  return (
    <>
      <ToastBox id={id} $type={type} $visible={visible}>
        {message}
      </ToastBox>
    </>
  );
}

const getToastColors = (type: ToastType) => {
  switch (type) {
    case "success":
      return { backgroundColor: "#E1F4EB", borderColor: "#64B78E" };
    case "warning":
      return { backgroundColor: "#FCF4DE", borderColor: "#E7B416" };
    case "error":
      return { backgroundColor: "#FCDDDD", borderColor: "#D9534F" };
    default:
      return { backgroundColor: "#ffffff", borderColor: "#000000" };
  }
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;
const ToastBox = newStyled.div<{ $type: ToastType; $visible: boolean }>`
  position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
  background-color: ${({ $type }) => getToastColors($type).backgroundColor};
  border: 1px solid ${({ $type }) => getToastColors($type).borderColor};
  color: #000000;
  padding: 16px 24px;
  border-radius: 16px;
  font-size: 14px;
  animation: ${({ $visible }) => ($visible ? fadeIn : fadeOut)} 0.5s ease;
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

export default ToastItem;
