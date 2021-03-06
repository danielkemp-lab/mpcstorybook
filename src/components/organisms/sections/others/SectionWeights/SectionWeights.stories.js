import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import SectionWeights from './SectionWeights'

storiesOf('Organisms/Sections/Others', module)
  .add('SectionWeights', () => (
    <SectionWeights
      className={text('Class', '')}
    />
  ))
