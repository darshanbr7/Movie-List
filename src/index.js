import {createRoot} from "react-dom/client"
import App from "./App"
const element=document.getElementById("movie")
const root=createRoot(element)
root.render(<App/>)