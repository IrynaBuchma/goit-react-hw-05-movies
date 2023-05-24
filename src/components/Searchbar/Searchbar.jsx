import { useState } from "react";
import { toast } from 'react-toastify';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onHandleSubmit }) {
    const [query, setQuery] = useState('');

    const handleChangeQuery = e => {
        setQuery(e.currentTarget.value.toLowerCase());
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(query.trim() === '') {
          toast.info('Please input your query');
          return;
        }

        onHandleSubmit(query);
        setQuery('');
    }

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <input 
                type='text'
                value={query}
                autoComplete='off'
                placeholder='Movie name'
                onChange={handleChangeQuery}  
                className={css.input}       
            />
            <button 
                type="submit"
                className={css.button}
            >
                Search
            </button>
        </form>
    )
}

Searchbar.propTypes = {
    onHandleSubmit: PropTypes.func.isRequired,
}