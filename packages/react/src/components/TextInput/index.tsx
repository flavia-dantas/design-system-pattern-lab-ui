import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps
  extends React.ComponentPropsWithoutRef<typeof Input> {
  prefix?: string
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </TextInputContainer>
  )
}