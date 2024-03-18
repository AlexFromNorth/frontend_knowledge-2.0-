import "./App.css";
import "firebase/firestore";
import Main from "./pages/main/Main.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import SignIn from "./components/auth/SignUp";
import SignUp from "./components/auth/SignIn";
import AuthDetails from "./components/auth/AuthDetails";

function App() {
  return (
    <>
      <Header />
      <div>
              <SignIn/>
              {/* <SignUp/> */}
              <AuthDetails/>
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
