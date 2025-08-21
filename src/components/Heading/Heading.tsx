import style from "./styles.module.css"

type HeadingProps = {
    children: React.ReactNode; 
}

export default function Heading({children}: HeadingProps) {
    return <a className={style.heading}>{children}</a>
}