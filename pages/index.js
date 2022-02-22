import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoApple } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Sweden!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Karwan M.A.
          </Heading>
          <p>Computer - Decoder / Developer / Designer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Basics
        </Heading>
        <Paragraph>
          Karwan is a full-stack developer with only six months until graduation
          as a .NET systems developer from Sweden. He works part time with a
          business system based in Stockholm, Sweden as his final part of his
          exam. Currently he is also working on his own application for messages
          to utilize messaging in private, as privacy is something he values a
          lot.
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Linköping, Sweden.
        </BioSection>
        <BioSection>
          <BioYear>2015 to 2018</BioYear>
          Studied within the Tech program in high school.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started studying .NET system development at TUC Sweden.
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Working with my final projects to gain my exams as a .NET developer.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Side hobbies
        </Heading>
        <Paragraph>Art, VM&apos;s, Linux Distros.</Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/mrlowbot" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @mrlowbot
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/peariumlucifer" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @peariumlucifer
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoApple} />}
              >
                KarwanAzar@icloud.com
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
