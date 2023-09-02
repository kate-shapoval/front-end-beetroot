import './style.css'
import Button from './Button'
export default function User({ item, children }) {
    function login() {
        console.log(item.name)
    }
    return (
        <div className={`cart ${item.age > 18 ? 'green' : 'red'}`}>
            <div className={'name'}>{item.name}</div>
            <div className={'age'}>{item.age}</div>

            {
                item.age > 18 ?
                    // <Button name={"Login"} />
                    <button onClick={login}>LoginClick</button>
                    : <div className="error">не підходиш</div>
            }
            {children}
        </div>

    )
}