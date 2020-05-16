import { styled } from 'shared/styled'

export const Input = styled.input`
  font-size: ${props => props.theme.font ? props.theme.font.size.large : '12px'};
  width: 100%;
`

export const Label = styled.label`
  font-size: 14px;
  width: 100%;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 320px;
`
