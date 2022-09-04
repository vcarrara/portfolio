import React from 'react'
import { Link } from 'gatsby'
import { Disclosure } from '@headlessui/react'
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const navigation = [
    { name: 'Web', to: '/web' },
    { name: 'DevOps', to: '/devops' },
    { name: 'Data', to: '/data' },
    { name: 'Programming', to: '/programming' },
]

export default function Navbar() {
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars2Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to="/" className="hover:text-primary-500 text-xl font-medium transition-colors duration-300 ease-in-out">
                                        Portfo<span className="text-primary-500">lio.</span>
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map(({ name, to }) => (
                                            <Link
                                                to={to}
                                                key={name}
                                                activeClassName="text-primary-500"
                                                className="transition-colors duration-300 ease-in-out text-base font-medium hover:text-primary-500"
                                            >
                                                {name}
                                            </Link>
                                        ))}
                                        <a
                                            href="https://www.linkedin.com/in/victor-carrara/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="relative before:w-0.5 before:h-full before:left-0 before:bg-primary-500 before:absolute pl-4 transition-colors duration-300 ease-in-out text-base font-medium hover:text-primary-500"
                                        >
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map(({ name, to }) => (
                                <Disclosure.Button
                                    key={name}
                                    as={Link}
                                    to={to}
                                    className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                                    activeClassName="text-primary-500"
                                >
                                    {name}
                                </Disclosure.Button>
                            ))}

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 1" className="ml-3 py-2 stroke-primary-500 w-12">
                                <path d="M 0 0 L 1 1 L 2 0 L 3 1 L 4 0" stroke-width="0.2" fill="none" />
                            </svg>

                            <Disclosure.Button
                                as="a"
                                href="https://www.linkedin.com/in/victor-carrara/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </Disclosure.Button>

                            <div className="ml-3 text-3xl py-2 flex flex-row items-center space-x-4">
                                <a href="https://github.com/vcarrara" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="hover:text-primary-500 transition-colors duration-300 ease-in-out hover:shadow-xl"
                                    />
                                </a>
                                <a href="https://www.linkedin.com/in/victor-carrara/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="hover:text-primary-500 transition-colors duration-300 ease-in-out hover:shadow-xl"
                                    />
                                </a>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
