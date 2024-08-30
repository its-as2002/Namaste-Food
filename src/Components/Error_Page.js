import { useRouteError } from "react-router-dom";

const Error_Page = ()=>{
    const err = useRouteError();
    return (<div className="error-page">
        <h1>Oops Something Went Wrong</h1>
        <h3>{err.status}:{err.statusText}</h3>
    </div>)
}

export default Error_Page;