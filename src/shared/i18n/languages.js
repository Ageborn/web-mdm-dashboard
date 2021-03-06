/*
 *   Copyright © 2018 Teclib. All rights reserved.
 *
 *   This file is part of web-mdm-dashboard
 *
 * web-mdm-dashboard is a subproject of Flyve MDM. Flyve MDM is a mobile
 * device management software.
 *
 * Flyve MDM is free software: you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 3
 * of the License, or (at your option) any later version.
 *
 * Flyve MDM is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * ------------------------------------------------------------------------------
 * @author     Gianfranco Manganiello (gmanganiello@teclib.com)
 * @author     Hector Rondon (hrondon@teclib.com)
 * @copyright  Copyright © 2018 Teclib. All rights reserved.
 * @license    GPLv3 https://www.gnu.org/licenses/gpl-3.0.html
 * @link       https://github.com/flyve-mdm/web-mdm-dashboard
 * @link       http://flyve.org/web-mdm-dashboard
 * @link       https://flyve-mdm.com
 * ------------------------------------------------------------------------------
 */

/** import dependencies */
import React from 'react'
import I18n from '.'

/**
 * Generate array with the different available language options
 * @function languages
 * @return {array}
 */
export default () => {
  const languages = [{
    abbreviation: 'en_GB',
    name: I18n.t('commons.english'),
    country: I18n.t('commons.Britain'),
    isAvailable: true,
  },
  {
    abbreviation: 'cs_CZ',
    name: I18n.t('commons.czech'),
    country: I18n.t('commons.Czech_Republic'),
    isAvailable: true,
  },
  {
    abbreviation: 'fr_FR',
    name: I18n.t('commons.french'),
    country: I18n.t('commons.France'),
    isAvailable: true,
  },
  {
    abbreviation: 'es_MX',
    name: I18n.t('commons.spanish'),
    country: I18n.t('commons.Mexico'),
    isAvailable: true,
  },
  {
    abbreviation: 'es_AR',
    name: I18n.t('commons.spanish'),
    country: I18n.t('commons.Argentina'),
    isAvailable: true,
  },
  {
    abbreviation: 'es_ES',
    name: I18n.t('commons.spanish'),
    country: I18n.t('commons.Spain'),
    isAvailable: true,
  },
  {
    abbreviation: 'ar_EG',
    name: I18n.t('commons.arabic'),
    country: I18n.t('commons.Egypt'),
    isAvailable: true,
  },
  {
    abbreviation: 'ar_SA',
    name: I18n.t('commons.arabic'),
    country: I18n.t('commons.Saudi_Arabia'),
    isAvailable: true,
  },
  {
    abbreviation: 'ca_ES',
    name: I18n.t('commons.catalan'),
    country: I18n.t('commons.Spain'),
    isAvailable: true,
  },
  {
    abbreviation: 'gl_ES',
    name: I18n.t('commons.galician'),
    country: I18n.t('commons.Spain'),
    isAvailable: true,
  },
  {
    abbreviation: 'de_DE',
    name: I18n.t('commons.german'),
    country: I18n.t('commons.Germany'),
    isAvailable: true,
  },
  {
    abbreviation: 'he_IL',
    name: I18n.t('commons.hebrew'),
    country: I18n.t('commons.Israel'),
    isAvailable: true,
  },
  {
    abbreviation: 'hi_IN',
    name: I18n.t('commons.hindi'),
    country: I18n.t('commons.India'),
    isAvailable: true,
  },
  {
    abbreviation: 'hu_HU',
    name: I18n.t('commons.hungarian'),
    country: I18n.t('commons.Hungary'),
    isAvailable: true,
  },
  {
    abbreviation: 'it_IT',
    name: I18n.t('commons.italian'),
    country: I18n.t('commons.Italy'),
    isAvailable: true,
  },
  {
    abbreviation: 'ko_KR',
    name: I18n.t('commons.korean'),
    country: I18n.t('commons.Korea'),
    isAvailable: true,
  },
  {
    abbreviation: 'pl_PL',
    name: I18n.t('commons.polish'),
    country: I18n.t('commons.Poland'),
    isAvailable: true,
  },
  {
    abbreviation: 'pt_BR',
    name: I18n.t('commons.portuguese'),
    country: I18n.t('commons.Brazil'),
    isAvailable: true,
  },
  {
    abbreviation: 'pt_PT',
    name: I18n.t('commons.portuguese'),
    country: I18n.t('commons.Portugal'),
    isAvailable: true,
  },
  {
    abbreviation: 'ja_JP',
    name: I18n.t('commons.japanese'),
    country: I18n.t('commons.Japon'),
    isAvailable: true,
  },
  {
    abbreviation: 'ru_RU',
    name: I18n.t('commons.russian'),
    country: I18n.t('commons.Russia'),
    isAvailable: true,
  },

  {
    abbreviation: 'ur_PK',
    name: I18n.t('commons.China'),
    country: I18n.t('commons.Pakistan'),
    isAvailable: true,
  },
  {
    abbreviation: 'zh_CN',
    name: I18n.t('commons.chinese'),
    country: I18n.t('commons.China'),
    isAvailable: true,
  },
  {
    abbreviation: 'th_TH',
    name: I18n.t('commons.thai'),
    country: I18n.t('commons.Thailand'),
    isAvailable: true,
  },
  ]
  const renderList = []
  languages.forEach((language) => {
    if (language.isAvailable) {
      renderList.push(
        <option value={language.abbreviation} key={language.abbreviation}>
          {language.name}
          {' '}
-
          {language.country}
        </option>,
      )
    }
  })
  return (renderList)
}
