import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Container from '../core/Container'
import Icon from '../core/Icon'
import Navbar from '../core/Navbar'

function MainLayout({ children }: React.PropsWithChildren) {
    const { site } = useStaticQuery<Queries.BuildTimeQuery>(graphql`
        query BuildTime {
            site {
                buildTime(formatString: "YYYY")
            }
        }
    `)

    return (
        <div className="min-h-screen flex flex-col">
            <header>
                <Navbar />
            </header>
            <main className="flex-1">{children}</main>
            <footer>
                <Container>
                    <p>@Copyright {site?.buildTime} - Victor Carrara</p>
                    <p>
                        Created and designed with ❤️, Gatsby <Icon use="gatsby" />, React <Icon use="react" />, GraphQL <Icon use="graphql" /> and Tailwind CSS{' '}
                        <Icon use="tailwindcss" />.
                    </p>
                </Container>
            </footer>
        </div>
    )
}

export default MainLayout
