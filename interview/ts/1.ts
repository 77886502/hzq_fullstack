type FunctionProps = {
    // onSomething 函数 参数+返回值
    onSomething: () => void;
    // input num
    onChange:(id:number) => void;
    // @types/react 泛型如何去做这件事？
    onClick(event:React.MouseEvent<HTMLButtonElement>)
}
// T 类型一个占位
type Dog<T> = {name:string,type:T}
const dog:Dog<number> = {name:'cheems',type:3}
interface Props {

}
const Item:React.FC<Props> = (props) =>{
    return (
        <div>
        </div>
    )
}