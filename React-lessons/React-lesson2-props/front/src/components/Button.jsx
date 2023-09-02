import './style.css'

export default function Button({ name, className }) {
    return <button className={`btn ${className || ''}`} type="button">{name || 'Button'}</button>
}