import react, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TfiMenu } from 'react-icons/tfi';
import { RiCloseFill } from 'react-icons/ri';
import { MdOutlineArrowDropDown } from 'react-icons/md';

import {
  StyledHeaderContainer,
  StyledHeaderContent,
  StyledHeaderLogoContainer,
  StyledHeaderNavigation,
  StyledHeaderNavigationButton,
  StyledHeaderNavigationItem,
  StyledHeaderNavigationList,
  StyledLanguageDropdownContainer,
  StyledLanguageDropdownList,
  StyledLanguageDropdownOption,
  StyledLanguageDropdownValue,
  StyledLanguageDropdownArrow,
  StyledHeaderNavigationAnchor,
  StyledHeaderNavigationLink,
} from './styled';

import { Language } from '../../interfaces';
import Logo from '../../assets/imgs/logo.png';
import { useLocation } from 'react-router-dom';

const languages: Language[] = [
  {
    id: 1,
    code: 'pt',
    name: 'Português',
  },
  {
    id: 2,
    code: 'en',
    name: 'English',
  },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const changeLanguageHandler = (index: number) => {
    i18n.changeLanguage(languages[index].code);
    setCurrentLanguage(languages[index]);
    toggleLanguageDropdownHandler();
  };

  const toggleLanguageDropdownHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      event.target &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, !isOpen);

    return () => {
      document.removeEventListener('click', handleClickOutside, !isOpen);
    };
  }, []);

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
          <MdOutlineArrowDropDown fill="#fff" />
        </StyledLanguageDropdownArrow>
      </StyledLanguageDropdownValue>
      {isOpen && (
        <StyledLanguageDropdownList
          role="listbox"
          id="listLanguage"
          aria-label="Alterar linguagem"
          tabIndex={-1}
          ref={dropdownRef}
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
  const { t } = useTranslation();
  const location = useLocation();

  const toggleOpenHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <StyledHeaderContainer>
      <StyledHeaderLogoContainer $isOpen={isOpen} to="/">
        <img src={Logo} />
      </StyledHeaderLogoContainer>
      <StyledHeaderContent>
        <LanguageDropdown />
        <StyledHeaderNavigationButton
          onClick={() => toggleOpenHandler()}
          $isOpen={isOpen}
        >
          {!isOpen ? <TfiMenu fill="#fff" /> : <RiCloseFill fill="#1F3541" />}
        </StyledHeaderNavigationButton>
      </StyledHeaderContent>
      <StyledHeaderNavigation $isOpen={isOpen}>
        <StyledHeaderNavigationList>
          <StyledHeaderNavigationItem>
            <StyledHeaderNavigationAnchor
              to="/#mission"
              onClick={toggleOpenHandler}
            >
              {t('translations.header.mission.title')}
            </StyledHeaderNavigationAnchor>
          </StyledHeaderNavigationItem>
          <StyledHeaderNavigationItem>
            <StyledHeaderNavigationAnchor
              to="/#services"
              onClick={toggleOpenHandler}
            >
              {t('translations.header.services.title')}
            </StyledHeaderNavigationAnchor>
          </StyledHeaderNavigationItem>
          <StyledHeaderNavigationItem>
            <StyledHeaderNavigationAnchor
              to="/#gallery"
              onClick={toggleOpenHandler}
            >
              {t('translations.header.portfolio.title')}
            </StyledHeaderNavigationAnchor>
          </StyledHeaderNavigationItem>
          <StyledHeaderNavigationItem>
            <StyledHeaderNavigationAnchor
              to="/#products"
              onClick={toggleOpenHandler}
            >
              {t('translations.products.title')}
            </StyledHeaderNavigationAnchor>
          </StyledHeaderNavigationItem>
          <StyledHeaderNavigationItem>
            <StyledHeaderNavigationAnchor
              to="/#team"
              onClick={toggleOpenHandler}
            >
              {t('translations.header.team.title')}
            </StyledHeaderNavigationAnchor>
          </StyledHeaderNavigationItem>
          <StyledHeaderNavigationItem>
            <StyledHeaderNavigationAnchor
              to="/#contact"
              onClick={toggleOpenHandler}
            >
              {t('translations.header.contact.title')}
            </StyledHeaderNavigationAnchor>
          </StyledHeaderNavigationItem>
          {/* <StyledHeaderNavigationItem>
            <StyledHeaderNavigationLink to="/budget">
              {t('translations.header.budget.title')}
            </StyledHeaderNavigationLink>
          </StyledHeaderNavigationItem> */}
        </StyledHeaderNavigationList>
      </StyledHeaderNavigation>
    </StyledHeaderContainer>
  );
};

export default Header;
