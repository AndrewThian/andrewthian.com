import styled from 'styled-components'

type Props = {
  padding?: boolean
}

const CenteredColumn = styled.div<Props>`
  max-width: 640px;
  margin: 0 auto;
  padding: ${(props) => (props.padding ? '0 1rem' : 'inherit')};

  @media (min-width: 640px) {
    padding: unset;
  }
`

CenteredColumn.defaultProps = {
  padding: true,
}

export default CenteredColumn
