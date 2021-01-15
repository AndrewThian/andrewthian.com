import { ReactElement } from 'react'
import { CenteredColumn } from '~/components/Layouts'
import { Page } from '~/components/Page'

export default function About(): ReactElement {
  return (
    <Page>
      <CenteredColumn>
        <div>about</div>
      </CenteredColumn>
    </Page>
  )
}
