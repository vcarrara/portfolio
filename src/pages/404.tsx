import React from 'react'
import { Link } from 'gatsby'
import MainLayout from '../components/layouts/MainLayout'
import Container from '../components/core/Container'
import Button from '../components/core/Button'

function NotFoundPage() {
    return (
        <MainLayout>
            <div className="flex items-center justify-center">
                <Container>
                    <div className="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
                        <div className="max-w-max mx-auto">
                            <main className="sm:flex">
                                <p className="text-4xl font-extrabold text-primary-500 sm:text-5xl">404</p>
                                <div className="sm:ml-6">
                                    <div className="sm:border-l sm:border-gray-400 sm:pl-6">
                                        <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">Oops, I don't know that page</h1>
                                        <p className="mt-1 text-base text-gray-500">🧐 Please check the URL in the address bar and try again.</p>
                                    </div>
                                    <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                                        <Button as={Link} to="/">
                                            Go back home
                                        </Button>
                                        <Button type="transparent" as="a" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/victor-carrara/">
                                            Contact me
                                        </Button>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </Container>
            </div>
        </MainLayout>
    )
}

export default NotFoundPage
