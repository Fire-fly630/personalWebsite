import { Outlet } from 'react-router-dom'
import './index.scss'
import Sidebar from '../Sidebar'

const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className="page">
                {/* <span className="tags top-tags">&lt;body&gt;</span> */}

                <Outlet />

                <span className="tags botton-tags">
                    {/* &lt;/body&gt; */}
                    <br />
                    <span className="botton-tag-html"></span>
                </span>

            </div>
        </div>
    )
}
export default Layout