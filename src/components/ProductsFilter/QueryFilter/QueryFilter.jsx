import sprite from 'assets/sprite-2.svg';
import { CleanBtn, FieldTitle, IconClean, IconSearch, InputGroup, SearchBtn } from './QueryFilter.styled';

export const QueryFilter = ({ query, onTitleChange, onCleanForm }) => {
  return (
    
      <InputGroup >      
        <FieldTitle type="text" name="query" placeholder="Search" value={query} onChange={onTitleChange} />
        <CleanBtn type="button" className="cleanBtn" onClick={onCleanForm}>
            <IconClean>
              <use href={`${sprite}#x`} />
            </IconClean>
        </CleanBtn>
              
        <SearchBtn type="submit">
          <IconSearch>
            <use href={`${sprite}#search`} />
          </IconSearch>
        </SearchBtn>
      </InputGroup>
      
  )
}

