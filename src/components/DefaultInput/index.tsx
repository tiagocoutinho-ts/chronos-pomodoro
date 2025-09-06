import style from "./styles.module.css"

type DefaultInputProps = {
    id: string;
    labelText: string;
} & React.ComponentProps<"input">

export default function DefaultInput({id, labelText, type, ...rest} :DefaultInputProps){
    return (
        <>
        {<label htmlFor={id}>{labelText}</label>}
        <input className={style.input} placeholder="Digite algo" id={id} type={type} {...rest}/>  
        </>
    )
}