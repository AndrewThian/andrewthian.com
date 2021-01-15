import { ReactElement } from 'react'
import { CenteredColumn } from '~/components/Layouts'
import { Page, PageHeader } from '~/components/Page'
export default function Home(): ReactElement {
  return (
    <Page>
      <CenteredColumn>
        <PageHeader
          title="Hey! I'm Andrew"
          subtitle="I'm a developer, typography nerd, comic and video games consumer. Living in sunny Singapore."
        />
      </CenteredColumn>
    </Page>
  )
}
