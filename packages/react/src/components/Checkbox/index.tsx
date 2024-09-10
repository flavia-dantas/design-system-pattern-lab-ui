/* eslint-disable prettier/prettier */
import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxContainer> {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
