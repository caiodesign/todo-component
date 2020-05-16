import React from 'react'

import { Container, Row } from 'styled-bootstrap-grid'

import { Input, Label, Form } from './styled'
import Button from 'shared/Components/Button'

export interface Props {
  /**
  * Background color of button
  */
  category?: Array<string>
  /**
   * Function on click
   */
  onClick: () => void
}

function TodoForm({ onClick, category }: Props) {

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault()

    onClick()
  }

  return (
    <Container>
      <Form>
        <Row>
          <Label htmlFor="title">Title</Label>
          <Input id="title" type="text" />
        </Row>

        <Row>
          <Label>Description</Label>
          <Input id="description" />
        </Row>

        <Row>
          <Label>Category</Label>
          <Input id="category" />
        </Row>

        <Button onClick={handleClick}>Create</Button>
      </Form>
    </Container>
  )
}

TodoForm.defaultProps = {
  onClick: () => null
}

export default TodoForm
