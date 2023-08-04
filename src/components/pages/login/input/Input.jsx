import { BsPersonCircle } from "react-icons/bs";

export default function Input(value, onchange, placeholder) {
    return (
        <div className="input-container">
            <BsPersonCircle className="icon" />
            <input type="text"
                required
                placeholder={placeholder}
                value={value}
                onChange={onchange} />
        </div>
    )
}
