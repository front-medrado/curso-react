import './styles.css'

export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
            className='text-input'
            type="search"
            name=""
            id=""
            placeholder='Type your search here'
            onChange={handleChange}
            value={searchValue}
        />
    );
}
