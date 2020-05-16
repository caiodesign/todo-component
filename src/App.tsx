import React from 'react'

import { ThemeProvider } from 'styled-components'
import { BaseCSS } from 'styled-bootstrap-grid'

import globalStyle from 'shared/styled/globalStyle'
import theme from 'shared/styled/theme'
import Main from 'shared/Containers/Main'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BaseCSS css={globalStyle} />
        <Main />
      </ThemeProvider>
    </div>
  )
}

export default App
