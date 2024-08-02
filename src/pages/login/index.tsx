import { AuthPage } from "@refinedev/core";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      renderContent={(content) => (
        <div>
          Marko
          <p
            style={{
              padding: 10,
              color: "#004085",
              backgroundColor: "#cce5ff",
              borderColor: "#b8daff",
              textAlign: "center",
            }}
          >
            email: demo@refine.dev
            <br /> password: demodemo
          </p>
          {content}
        </div>
      )}
    />
  );
};
