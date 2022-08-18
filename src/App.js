import "./App.css";
import Content from "./components/Content/Content";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
function App() {
    return (
        <div className="App">
            <Sidebar />
            <div className="app_wraper">
                <Content />
                <Footer />
            </div>
        </div>
    );
}

export default App;
