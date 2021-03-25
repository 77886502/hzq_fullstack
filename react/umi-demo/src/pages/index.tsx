import styles from '../global.less';
// import { Link } from "umi";
import {Redirect} from 'umi';

export default () => <Redirect to={{
  pathname:'/login'
}}/>
