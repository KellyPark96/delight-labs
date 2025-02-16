import { useEffect, useState } from "react";
import {
  ToastItemType,
  ToastType,
  useToastStore,
} from "../../store/toastStore";
import { css, keyframes } from "@emotion/react";
import newStyled from "@emotion/styled";
import colors from "../../styles/colors";
import ToastNameAndAmount from "./ToastNameAndAmount";
import ToastDate from "./ToastDate";

const DURATION = 3000;
const ANIMATION = 500;

interface ToastItemProps {
  toast: ToastItemType;
}

const ToastItem = ({ toast }: ToastItemProps) => {
  const [visible, setVisible] = useState(true);
  const { subtractToastList } = useToastStore();
  const { id, type, message } = toast;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, DURATION);

    const removeTimer = setTimeout(() => {
      subtractToastList(id);
    }, DURATION + ANIMATION);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, [id, subtractToastList]);

  return (
    <>
      <ToastBox id={id} $type={type} $visible={visible}>
        <div
          className="transaction-list-item"
          css={css`
            display: flex;
            gap: 20px;
            width: 100%;
            height: 51px;
          `}
        >
          <div
            css={css`
              flex: 1;
              height: 100%;
            `}
          >
            <ToastNameAndAmount name={message.name} amount={message.amount} />
            <ToastDate type={message.type} date={message.timestamp} />
          </div>
        </div>
      </ToastBox>
    </>
  );
};

const getToastColors = (type: ToastType) => {
  switch (type) {
    case "success":
      return {
        backgroundColor: colors.primaryToast,
      };
    default:
      return {
        backgroundColor: colors.primaryToast,
      };
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
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ $type }) => getToastColors($type).backgroundColor};
  border: 0;
  color: #fff;
  min-width: 200px;
  max-width: 450px;
  width: 40%;
  padding: 16px 20px;
  border-radius: 16px;
  font-size: 14px;
  animation: ${({ $visible }) => ($visible ? fadeIn : fadeOut)} 0.5s ease;
  transition: opacity 0.5s ease, transform 0.5s ease;
`;

export default ToastItem;
