import React, { Component } from "react";
import DropDown from './DropDown'
import { withTranslation } from 'react-i18next';

const TRANSLATE_OPTIONS = [
  { text: 'English', value: 'en' },
  { text: 'Portugues', value: 'pt' }
];

class Header extends Component {
  constructor(props) {
    super();
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
  handleLanguageChange = (language) => {
    this.props.i18n.changeLanguage(language);
  }
  render() {
    const { t } = this.props;
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light mb-2">
        <span className="navbar-brand mb-0 h1">{t(this.props.title)}</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button type="button"
              onClick={() => this.props.onSelect('WebSearch')}
              className="nav-item nav-link btn btn-light mr-1"
            >
              {t('app_menu_web')}
            </button>
            <button type="button"
              onClick={() => this.props.onSelect('StoreSearch')}
              className="nav-item nav-link btn btn-light mr-1"
            >
              {t('app_menu_store')}
            </button>
          </div>
          <div className="navbar-nav ml-auto">
            <DropDown
              class="light"
              label="app_menu_translate"
              options={TRANSLATE_OPTIONS}
              onChange={this.handleLanguageChange}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default withTranslation()(Header);