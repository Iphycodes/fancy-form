import { UserForm } from "../user-form";
import { StyledHomeContainer } from "./index.styled";

export const Home = () => {
  return (
    <StyledHomeContainer>
      <div className="title">Enter Details</div>
      <div className="user-form">
        <UserForm />
      </div>
    </StyledHomeContainer>
  );
};
