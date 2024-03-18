import "./App.css";
import "firebase/firestore";
import Main from "./pages/main/Main.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Authwrapper from "./components/auth/AuthWrapper.tsx";

function App() {
  return (
    <>
      <Header />

      <div>
        <Authwrapper />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
