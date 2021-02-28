//  members 页面的相关组件都放置在member文件下，有利于管理
import * as React from "react";
export const MemberHeader: React.FC<{}> = () => {
    return(
        <tr>
            <th>Avtar</th>
            <th>id</th>
            <th>Name</th>
        </tr>
    )
}