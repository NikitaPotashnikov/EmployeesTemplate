import "./app-info.css";

const AppInfo = ({ counterEmployees, increaseEmployees }) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {counterEmployees}</h2>
            <h2>Премию получат: {increaseEmployees}</h2>
        </div>
    )
}

export default AppInfo;