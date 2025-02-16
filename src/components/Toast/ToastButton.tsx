import newStyled from "@emotion/styled";
import useToast from "../../utils/useToast";
import colors from "../../styles/colors";

const ToastButton = () => {
  const { toast } = useToast();

  return (
    <main>
      <StyledButton
        type="button"
        onClick={() => {
          toast("success", {
            amount: "-$432.9",
            name: "Name",
            timestamp: "YYYY.MM.DD 00:00",
            type: "transfer",
          });
        }}
      >
        Toast
      </StyledButton>
    </main>
  );
};

export default ToastButton;

const StyledButton = newStyled.button`
  position: absolute;
  bottom: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.primary};
  color: #fff;
  border-radius: 16px;
  padding: 4px 8px;
`;
