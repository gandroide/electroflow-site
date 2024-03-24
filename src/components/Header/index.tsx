import react, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TfiMenu, TfiClose } from 'react-icons/tfi';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import {
  StyledHeaderContainer,
  StyledHeaderContent,
  StyledHeaderLogoContainer,
  StyledHeaderNavigation,
  StyledHeaderNavigationButton,
  StyledHeaderNavigationItem,
  StyledHeaderNavigationList,
  StyledHeaderNavigationLink,
  StyledHeaderNavigationCloseButton,
  StyledHeaderNavigationHeader,
  StyledLanguageDropdownContainer,
  StyledLanguageDropdownList,
  StyledLanguageDropdownOption,
  StyledLanguageDropdownValue,
  StyledLanguageDropdownArrow,
} from './styled';

import { Language } from '../../interfaces';
import Logo from '../../assets/imgs/logo.png';

const languages: Language[] = [
  {
    id: 1,
    code: 'pt',
    name: 'Português',
  },
  {
    id: 2,
    code: 'en',
    name: 'Inglês',
  },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguageHandler = (index: number) => {
    i18n.changeLanguage(languages[index].code);
    setCurrentLanguage(languages[index]);
  };

  const toggleLanguageDropdownHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledLanguageDropdownContainer>
      <StyledLanguageDropdownValue
        aria-controls="listLanguage"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Alterar linguagem"
        role="combobox"
        tabIndex={0}
        aria-activedescendant={isOpen ? currentLanguage.id.toString() : ''}
        onClick={toggleLanguageDropdownHandler}
      >
        {currentLanguage.code.toUpperCase()}
        <StyledLanguageDropdownArrow>
          <MdOutlineArrowDropDown />
        </StyledLanguageDropdownArrow>
      </StyledLanguageDropdownValue>
      {isOpen && (
        <StyledLanguageDropdownList
          role="listbox"
          id="listLanguage"
          aria-label="Alterar linguagem"
          tabIndex={-1}
        >
          {languages.map((language, index) => (
            <StyledLanguageDropdownOption
              key={language.id}
              onClick={() => changeLanguageHandler(index)}
              role="option"
              id={language.id.toString()}
              aria-selected={currentLanguage.id === language.id}
            >
              {language.name}
            </StyledLanguageDropdownOption>
          ))}
        </StyledLanguageDropdownList>
      )}
    </StyledLanguageDropdownContainer>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <StyledHeaderContainer>
      <StyledHeaderLogoContainer>
        <img src={Logo} />
      </StyledHeaderLogoContainer>
      <StyledHeaderContent>
        <LanguageDropdown />
        <StyledHeaderNavigationButton onClick={toggleOpenHandler}>
          <TfiMenu />
        </StyledHeaderNavigationButton>
      </StyledHeaderContent>
      <StyledHeaderNavigation $isOpen={isOpen}>
        <StyledHeaderNavigationHeader>
          <StyledHeaderLogoContainer>Logo</StyledHeaderLogoContainer>
          <StyledHeaderNavigationCloseButton onClick={toggleOpenHandler}>
            <TfiClose />
          </StyledHeaderNavigationCloseButton>
        </StyledHeaderNavigationHeader>
        <StyledHeaderNavigationList>
          <StyledHeaderNavigationItem>
            <StyledHeaderNavigationLink to="/budget">
              Link 1
            </StyledHeaderNavigationLink>
          </StyledHeaderNavigationItem>
          <StyledHeaderNavigationItem>
            <StyledHeaderNavigationLink to="/budget">
              Link 1
            </StyledHeaderNavigationLink>
          </StyledHeaderNavigationItem>
        </StyledHeaderNavigationList>
      </StyledHeaderNavigation>
    </StyledHeaderContainer>
  );
};

export default Header;
