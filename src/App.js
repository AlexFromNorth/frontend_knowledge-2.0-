import "./App.css";
import "firebase/firestore";
import Main from "./pages/main/Main.tsx";
import Header from "./pages/header/Header.tsx";
import Footer from "./pages/footer/Footer.tsx";
import AuthDetails from "./pages/auth/AuthDetails.tsx";
import { Counter } from "./components/auth/Counter.tsx";

function App() {
  return (
    <>
      <Header />
      <Counter />

      <div>
        <AuthDetails />
      </div>
      <Main />
      <Footer />
    </>
  );
}

export default App;
