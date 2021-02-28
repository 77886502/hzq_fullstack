import * as React from 'react';

interface Props {
  userName: string;
  onChange: (e) => void;
}
// ts 帮助我们在开发阶段就可以避免很多错误
// 什么时候要写ts 什么时候容易出问题？ 类型约束
// ts 代码 @types/react 
// 有需要去ts 约束他的类型？ props 
// Function Component
// export const NameEditComponent = (props:Props) => (
export const NameEditComponent: React.FC<Props> = (props) => (
  <>
    <label>Update name:</label>
    <input value={props.userName} onChange={props.onChange}/>
  </>
)
