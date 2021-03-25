import './about.less';
import '../global.less';
import { Link } from "umi";


export default function AboutPages() {
    return (
        <div className='title'>
            <Link to="/">index</Link>
            Page About
        </div>
    )
}
