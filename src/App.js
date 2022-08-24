import "./App.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header>
        <NavigationBar />
        <Intro />
      </Header>
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
