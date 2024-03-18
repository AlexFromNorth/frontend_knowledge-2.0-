import "./App.css";
import "firebase/firestore";
import Main from "./pages/main/Main.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import SignIn from "./components/auth/SignIn.jsx";
import AuthDetails from "./components/auth/AuthDetails.jsx";
import SignUp from "./components/auth/SignUp.jsx";

function App() {
  return (
    <>
      <Header />

      <div>
        <SignIn />
        <SignUp />
        <AuthDetails />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
