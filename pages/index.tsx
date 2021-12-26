import React from 'react'
import tw from 'twin.macro'
import { Avatar, Button, Card, Chip, Heading, Text } from '../components'
import { BaseLayout } from '../layouts'
import { description, events, links, projects, skills } from '../libraries'

// eslint-disable-next-line max-lines-per-function
const HomePage: React.FC = () => (
  <BaseLayout title="Home">
    <div tw="h-full grid p-8 gap-8 grid-cols-1 lg:(grid-cols-4 p-24 gap-24) box-border">
      <div tw="mb-8 flex flex-col col-span-full lg:col-span-1 items-center">
        <div tw="mx-24 my-16 space-y-8 flex flex-col justify-center items-center">
          <Avatar
            // eslint-disable-next-line no-secrets/no-secrets
            src="https://www.gravatar.com/avatar/698994bad3112f6a9cfa8e51a8a6f689?s=200"
            width={200}
            height={200}
            alt="tuxsnct"
            css={tw`overflow-hidden shadow-lg min-w-min`}
          />
          <Heading as="h1">tuxsnct</Heading>
          <Text>{description}</Text>
        </div>
        {/* eslint-disable-next-line max-len */}
        <div tw="w-full h-auto mx-8 gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 items-center justify-around">
          {
            links.map((link, index) => (
              <Button
                as="a"
                key={index}
                variant="icon"
                leftIcon={link.icon}
                href={link.url}
                boxStyles={tw`space-x-4`}
                iconStyles={tw`w-full h-full`}
                textStyles={tw`text-xl`}
              >
                {link.name}
              </Button>
            ))
          }
        </div>
      </div>
      <main tw="col-span-full lg:col-span-3 space-y-16">
        <div tw="space-y-4">
          <Heading>Welcome to tuxsnct&apos;s Website!</Heading>
        </div>
        <div tw="space-y-4">
          <Heading as="h2" id="projects">Projects</Heading>
          <div tw="flex flex-col gap-4">
            {
              projects.map((project, index) => (
                <Card
                  key={index}
                  variant="icon"
                  leftIcon="logos:git-icon"
                  title={project.name}
                  as="a"
                  href={project.url}
                  withRipple
                />
              ))
            }
          </div>
        </div>
        <div tw="space-y-4">
          <Heading as="h2" id="timeline">Timeline</Heading>
          <div tw="flex flex-col gap-4">
            {
              events.map((event, index) => (
                <Card
                  key={index}
                  variant="number"
                  number={index + 1}
                  title={`${event.name}（${event.date}）`}
                  withRipple
                />
              ))
            }
          </div>
        </div>
        <div tw="space-y-4">
          <Heading as="h2" id="skills">Skills</Heading>
          <div tw="flex gap-4 flex-wrap">
            {
              skills.map((skill, index) => (
                <Chip key={index} variant="icon" leftIcon={skill.icon}>
                  {skill.name}
                </Chip>
              ))
            }
          </div>
        </div>
      </main>
    </div>
  </BaseLayout>
)

export {
  HomePage
}

export * from './404'
export * from './privacy-policy'
export * from './terms'
