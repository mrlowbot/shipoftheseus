import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import Paragraph from '../comps/paragraph'
import Section from '../comps/section'
import { IoLogoTwitter, IoLogoGithub, IoLogoApple } from 'react-icons/io5'

const Home = () => (
  <Container maxW="container.xl">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Box display="flex" alignItems="center">
      <Box flexGrow={1}>
        <Heading as="h2" size="3xl">
          Ship of Theseus
        </Heading>
        <p>Philosophy</p>
      </Box>
    </Box>

    <br></br>
    <Section delay={0.1}>
      <Heading as="h3" size="xl">
        The Idea
      </Heading>
      <Paragraph>
        In the metaphysics of identity, the Ship of Theseus is a thought
        experiment that raises the question of whether an object that has had
        all of its components replaced remains fundamentally the same object.
        The concept is one of the oldest in Western philosophy, having been
        discussed by Heraclitus and Plato by c. 500-400 BC.
      </Paragraph>
    </Section>

    <Section delay={0.1}>
      <Heading as="h3" size="xl">
        History
      </Heading>
      <Paragraph>
        Part of the thought puzzle (identity over time problem) was discussed by
        ancient philosophers such as Heraclitus (Cratylus 401d) and Plato
        (Parmenides 139), but there is no remaining evidence that they knew
        this paradox. The paradox was later discussed by Plutarch, and more
        recently by Thomas Hobbes and John Locke. Several variants are known,
        including the grandfather&apos;s axe and Trigger&apos;s broom, which have
        each had both head and handle replaced. The particular "Ship of Theseus"
        version of the thought puzzle was first introduced in Greek legend as
        reported by the historian, biographer, and essayist Plutarch: The ship
        wherein Theseus and the youth of Athens returned from Crete had thirty
        oars, and was preserved by the Athenians down even to the time of
        Demetrius Phalereus, for they took away the old planks as they decayed,
        putting in new and stronger timber in their places, insomuch that this
        ship became a standing example among the philosophers, for the logical
        question of things that grow; one side holding that the ship remained
        the same, and the other contending that it was not the same. --Plutarch,
        Theseus Plutarch thus questions whether the ship would remain the
        same if it were entirely replaced, piece by piece. Centuries later, the
        philosopher Thomas Hobbes introduced a further puzzle, wondering what
        would happen if the original planks were gathered up after they were
        replaced, and then used to build a second ship. Hobbes asked which
        ship, if either, would be the original ship of Theseus. An ancient
        Buddhist text titled in Sanskrit Mahāprajñāpāramitopadeśa, which was
        later translated into Classical Chinese (Da zhidu lun 大智度論),
        contains a similar philosophical puzzle. It takes the form of a
        body-swapping story. The story tells of a traveler who encountered two
        demons in the night. As one demon ripped off all parts of his body one
        by one, the other demon replaced them with those of a corpse. The
        traveler was left confused about who he was after the body-swapping.
      </Paragraph>
    </Section>

    <Section delay={0.1}>
      <Heading as="h3" size="xl">
        Thought Experiment
      </Heading>
      <Paragraph>
        It is supposed that the famous ship sailed by the hero Theseus was kept
        in a harbor as a museum piece, and as the years went by, some of the
        wooden parts began to rot and were replaced by new ones; then, after a
        century or so, every part had been replaced. The question then is
        whether the "restored" ship is still the same object as the original. If
        it is, then suppose the removed pieces were stored in a warehouse, and
        after the century, technology was developed that cured their rot and
        enabled them to be reassembled into a ship. Is this "reconstructed" ship
        the original ship? If it is, then what about the restored ship in the
        harbor still being the original ship as well?
      </Paragraph>
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
)

export default Home
