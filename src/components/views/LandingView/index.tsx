import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Container from '../../core/Container'
import Title from '../../core/Title'
import Button from '../../core/Button'
import Circle from '../../core/Circle'
import Lines from '../../core/Lines'

type LandingViewProps = {
    nodes: Queries.IndexPageQuery['categories']['nodes']
    count: Record<string, number>
    totalTopics: number
}

function LandingView({ nodes, count, totalTopics }: LandingViewProps) {
    return (
        <Container>
            <div className="space-y-28">
                {/* Title */}
                <div className="flex md:justify-between md:flex-row flex-col-reverse relative">
                    <div className="col-span-1 text-5xl flex flex-row items-center justify-center space-x-8 mt-8 md:mt-0 md:space-x-0 md:space-y-8 md:flex-col">
                        <a href="https://github.com/vcarrara" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                                icon={faGithub}
                                className="fab fa-github hover:text-primary-500 transition-colors duration-300 ease-in-out hover:shadow-xl"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/victor-carrara/" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                className="fab fa-github hover:text-primary-500 transition-colors duration-300 ease-in-out hover:shadow-xl"
                            />
                        </a>
                    </div>
                    <div className="col-start-3 col-span-9 space-y-8 md:ml-32">
                        <div>
                            <h1 className="text-8xl font-bold">Hi!</h1>
                            <h1 className="text-8xl font-bold">
                                I am <span className="text-primary-500">Victor</span>
                            </h1>
                        </div>
                        <h1 className="text-6xl font-bold">Software Engineer</h1>
                        <div className="space-y-8">
                            <p className="font-medium text-base text-justify">
                                I am a <span className="text-primary-500">Software Engineer</span> at Namkin with an engineering degree in computing sciences
                                and a specialization in <span className="text-primary-500">Software Innovation</span>. I am dynamic, motivated, professional and
                                I can work in teams as much as alone. My past experiences have proven that I am able to work with lots of different problematics
                                and technologies.
                            </p>
                            <Button as={Link} to="/all-projects">
                                Discover my work
                            </Button>
                        </div>
                    </div>
                    <div className="-z-10">
                        <div className="absolute left-0 bottom-0">
                            <Lines className="w-16 transform rotate-[30deg]" />
                        </div>
                        <div className="absolute right-96 top-0 hidden lg:block">
                            <Lines className="w-24 transform -rotate-[30deg]" />
                        </div>
                        <div className="absolute right-48 bottom-0 hidden lg:block">
                            <Lines edges={5} className="w-20 transform -rotate-[15deg]" />
                        </div>
                        <div className="absolute right-16 top-24 hidden lg:block">
                            <Circle className="w-12" />
                        </div>
                    </div>
                </div>

                {/* Introduction */}
                <div className="space-y-12">
                    <div className="space-y-4">
                        <Title>What I do</Title>
                        <p className="font-medium text-base text-justify">
                            I have spent the last six years surpassing myself in my training and professional experiences to give me the means to excel in what
                            I am engaged in. I put my <span className="text-primary-500">skills</span>, my <span className="text-primary-500">creativity</span>,
                            my <span className="text-primary-500">curiosity</span> and my <span className="text-primary-500">ethic</span> to the benefit of my
                            projects and I always learn from a past experience. Thanks to the plurality of professional, school and personal projects that I
                            have realised in teams, I will use my knowledges, my skills and my experience to be{' '}
                            <span className="text-primary-500">proficient</span> on what I am working on.
                        </p>
                    </div>
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {nodes.map(({ id, html, frontmatter }) => (
                            <Link
                                key={id}
                                to={frontmatter?.slug || '/'}
                                className="group rounded-2xl bg-gray-800 shadow-md p-6 space-y-4 transform transition-all hover:shadow-lg md:hover:-translate-y-3 ease-in-out"
                            >
                                <div className="space-x-2 text-3xl overflow-x-hidden overflow-y-hidden">
                                    {frontmatter?.icons?.map(([description, className]: any) => (
                                        <span title={description} key={`devicon_${className}`}>
                                            <i className={className} />
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-2xl font-bold">
                                    <span className="group-hover:text-primary-500">{frontmatter?.title}</span>
                                    <button className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-500 align-middle">
                                        {count[frontmatter?.category || 'unknown']}
                                    </button>
                                </h2>
                                {html && <div className="font-medium text-base text-justify" dangerouslySetInnerHTML={{ __html: html }} />}
                                <Button>Learn more</Button>
                            </Link>
                        ))}
                        <h2 className="text-base font-bold">
                            <Link className="underline hover:text-primary-500" to="/all-projects">
                                See all
                            </Link>
                            <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-black text-white">
                                {totalTopics}
                            </span>
                        </h2>
                    </div>
                </div>
                {/* Testimonials */}
                <div className="space-y-8">
                    <Title>They trust me</Title>
                    <blockquote className="space-y-10 text-center">
                        <i className="text-5xl fas fa-quote-right"></i>
                        <p className="mt-6 font-medium text-justify text-base">
                            Victor was working in my team as an intern in 2019. His task was to prototype some new user interface architecture for our BBj
                            product platform. His ability to understand quickly, combined with his solid knowledge and expertise, allowed him to quickly deliver
                            valuable results which exceeded our expectations. He was able to successfully combine field knowledge of software development
                            practices and architecture with concrete development work in our Java-based BBj environment and in HTML5, JavaScript, and React
                            components in particular. Victor will be an asset for most any professional team that can make use of his energy, high work ethics,
                            and knowledge. He will always find open doors in my team, should our ways ever cross again.
                        </p>
                        <div className="space-y-2">
                            <p className="font-semibold">- PhD. Stephan Wald</p>
                            <p className="font-medium">CEO of Basis Europe Distribution GmbH (Saarbrücken, Germany)</p>
                        </div>
                    </blockquote>
                </div>
            </div>
        </Container>
    )
}

export default LandingView
