/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Pages from "./Components/Home/Pages";
import Certificate from "./Components/Certificate/Certificate";

const App = () => {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Pages />} />
          <Route path='/certificate' element= {<Certificate />} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
