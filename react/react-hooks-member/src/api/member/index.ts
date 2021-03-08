import {MemberEntity} from '../../model';
import {members} from './mockData';

// ts 函数 (): 限定返回值类型 Promise
// ？Promise resolve 后的数据是什么
// :Promise<MemberEntity[]>

const fetchMember = ():Promise<MemberEntity[]> =>{
    // ts keypoint + react
    return Promise.resolve(members);
}
export const memberAPI = {
    fetchMember 
}