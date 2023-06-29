import { AnnouncementProvider } from "./contexts/AnnouncementContext/AnnouncementContext";
import { AuthCommentProvider } from "./contexts/CommentContex/CommentContex";
import { AuthLoginProvider } from "./contexts/LoginContext/LoginContex";
import { AuthRegisterProvider } from "./contexts/RegisterContext/RegisterContext";
import { RoutesMain } from "./routes";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <AuthRegisterProvider>
        <AuthLoginProvider>
          <AnnouncementProvider>
            <AuthCommentProvider>
              <RoutesMain/>
            </AuthCommentProvider>
          </AnnouncementProvider>
        </AuthLoginProvider>
      </AuthRegisterProvider>
    </>
  );
};

export { App };
