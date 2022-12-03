import "./App.scss";
import AppBar from "./components/AppBar/AppBar";
import BoardBar from "./components/BoardBar/BoardBar";
import BoardContent from "./components/BoardContent/BoardContent";

function App() {
    return (
        <div className="wrapper">
            <nav className="navbar app"><AppBar /></nav>
            <nav className="navbar board"><BoardBar /></nav>
            <div className="board-cols"><BoardContent /></div>
        </div>
    );
}

export default App;
