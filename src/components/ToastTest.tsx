import newStyled from "@emotion/styled";
import useToast from "../utils/useToast";

export default function ToastTest() {
  const { toast } = useToast();

  return (
    <main>
      <StyledButton
        type="button"
        onClick={() => {
          toast("success", "성공적이에요.");
        }}
      >
        success
      </StyledButton>
    </main>
  );
}

const StyledButton = newStyled.button`
  background-color: #000000;
  color: #fff;
  border-radius: 16px;
  padding: 4px 8px;
`;
