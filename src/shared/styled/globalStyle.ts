import theme from './theme'

export default `
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&display=swap');
*,
*::before,
*::after {
  box-sizing: inherit;
}
html {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  background-color: ${theme.color.white};
  font-family: ${theme.font.family};
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
#root {
  height: 100%;
}
`
