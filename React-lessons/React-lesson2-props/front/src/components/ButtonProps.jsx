import './style.css'

export default function ButtonProps(props) {
    return <button className={`btn ${props.className || ''}`} type="button">{props.name || 'Button'}</button>
}