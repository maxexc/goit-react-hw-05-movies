import { useState } from 'react';
import PropTypes from 'prop-types';

import { SearchBtn, SearchForm, SearchInput } from './SearchBar.styled';
import { FcSearch } from 'react-icons/fc';
import { toast } from 'react-hot-toast';

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    const searchQuery = query.toLowerCase().trim();
    if (searchQuery === '') {      
      return  toast.success('It cannot be empty. Please try again.',
      { iconTheme: {
        primary: '#ecc92b',
        secondary: '#FFFAEE' }, });
      // {icon: '💡' }  
    }
    onSubmit(searchQuery);
    setQuery('');
  };

  return (
    <SearchForm onSubmit={onFormSubmit}>      
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <SearchBtn type="submit">
        <FcSearch size={30} />TEST
      </SearchBtn>
    </SearchForm>    
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};