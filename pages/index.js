import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import Paragraph from '../comps/paragraph'
import Section from '../comps/section'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoBrushOutline,
  IoPawOutline,
  IoHappyOutline
} from 'react-icons/io5'
import countapi from 'countapi-js'

let L = [];
countapi.visits().then((result) => {
  L.push(result.value);
});

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
        (Parmenides 139), but there is no remaining evidence that they knew this
        paradox. The paradox was later discussed by Plutarch, and more recently
        by Thomas Hobbes and John Locke.
        <br></br>
        <br></br>
        Several variants are known, including the grandfather&apos;s axe and
        Trigger&apos;s broom, which have each had both head and handle replaced.
        The particular &quot;Ship of Theseus&quot; version of the thought puzzle
        was first introduced in Greek legend as reported by the historian,
        biographer, and essayist Plutarch: The ship wherein Theseus and the
        youth of Athens returned from Crete had thirty oars, and was preserved
        by the Athenians down even to the time of Demetrius Phalereus, for they
        took away the old planks as they decayed, putting in new and stronger
        timber in their places, insomuch that this ship became a standing
        example among the philosophers, for the logical question of things that
        grow; one side holding that the ship remained the same, and the other
        contending that it was not the same. --Plutarch, Theseus Plutarch thus
        questions whether the ship would remain the same if it were entirely
        replaced, piece by piece. Centuries later, the philosopher Thomas Hobbes
        introduced a further puzzle, wondering what would happen if the original
        planks were gathered up after they were replaced, and then used to build
        a second ship.
        <br></br>
        <br></br>
        Hobbes asked which ship, if either, would be the original ship of
        Theseus. An ancient Buddhist text titled in Sanskrit
        Mahāprajñāpāramitopadeśa, which was later translated into Classical
        Chinese (Da zhidu lun 大智度論), contains a similar philosophical
        puzzle. It takes the form of a body-swapping story. The story tells of a
        traveler who encountered two demons in the night. As one demon ripped
        off all parts of his body one by one, the other demon replaced them with
        those of a corpse. The traveler was left confused about who he was after
        the body-swapping.
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
        whether the &quot;restored&quot; ship is still the same object as the
        original.
        <br></br>
        <br></br>
        If it is, then suppose the removed pieces were stored in a warehouse,
        and after the century, technology was developed that cured their rot and
        enabled them to be reassembled into a ship. Is this
        &quot;reconstructed&quot; ship the original ship? If it is, then what
        about the restored ship in the harbor still being the original ship as
        well?
      </Paragraph>
    </Section>

    <Section delay={0.1}>
      <Heading as="h3" size="xl">
        Proposed resolutions
      </Heading>
      <Paragraph>
        No identity over time This solution was first introduced by the Greek
        philosopher Heraclitus who attempted to solve the thought puzzle by
        introducing the idea of a river where water replenishes itself as it
        flows past. Arius Didymus quoted him as saying &quot;upon those who step
        into the same rivers, different and again different waters flow&quot;.
        Plutarch disputed Heraclitus&apos; claim about stepping twice into the
        same river, citing that it cannot be done because &quot;it scatters and
        again comes together, and approaches and recedes&quot;.
        <br></br>
        <br></br>
        Four-dimensionalism Main article: Perdurantism Ted Sider and others have
        proposed that considering objects to extend across time as
        four-dimensional causal series of three-dimensional
        &quot;time-slices&quot; could solve the Ship of Theseus problem because,
        in taking such an approach, all four-dimensional objects remain
        numerically identical to themselves while allowing individual
        time-slices to differ from each other. The aforementioned river,
        therefore, comprises different three-dimensional time-slices of itself
        while remaining numerically identical to itself across time; one can
        never step into the same river-time-slice twice, but one can step into
        the same (four-dimensional) river twice.
        <br></br>
        <br></br>
        Cognitive science According to Noam Chomsky, as described in Of Minds
        and Language (2009), the thought puzzle arises because of extreme
        externalism: the assumption that what is true in our minds is true in
        the world. Chomsky says that this is not an unassailable assumption,
        from the perspective of the natural sciences, because human intuition is
        often mistaken. Cognitive science would treat this thought puzzle as the
        subject of an investigation of the human mind. Studying this human
        confusion can reveal much about the brain&apos;s operation, but little
        about the nature of the human-independent external world. Following on
        from this observation, a significant strand in cognitive science would
        consider The Ship not as a thing, nor even a collection of objectively
        existing thing-parts, but rather as an organisational structure that has
        perceptual continuity.
        <br></br>
        <br></br>
        When Theseus thinks of his ship, he has expectations about what parts
        can be found where, how they interact, and how they interact with the
        wider world. As long as there is a time/space continuity between this
        set of relationships, it is The Ship of Theseus. An organisational
        structure of course has to have components, but these also are defined
        in the same way. Such a recursive structure must &quot;bottom out&quot;
        somewhere and the enactivists see this grounding to be based in our
        embodied relationship with our environment. In Cohen&apos;s (see below)
        example where a scavenger follows Theseus, collecting the discarded
        parts of the original Ship of Theseus, and then reassembles them, the
        reassembled ship is not The Ship of Theseus because, presumably a court
        of law would say, Theseus does not have the &quot;owns&quot;
        relationship with the reconstructed ship.
      </Paragraph>
    </Section>

    <Section delay={0.1}>
      <Heading as="h3" size="xl">
        Conclusion of idea
      </Heading>
      If anything, this idea can be boiled down to one thing. The ship of
      Theseus will technically still be the same ship even if every part of the
      ship has been replaced but only if Theseus himself touches it again.
      <br></br>
      <br></br>
      Hopefully you have found this idea and this website interesting.
      <Paragraph></Paragraph>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        On the web
      </Heading>
      <List>
        <ListItem>
          <Link href="https://society6.com/mrlowbot" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoBrushOutline} />}
            >
              Art works!
            </Button>
          </Link>
        </ListItem>
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
          <Link href="https://twitter.com/MrLowBot_git" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoLogoTwitter} />}
            >
              @MrLowBot_git
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://www.craftz.dog/" target="_blank">
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoPawOutline} />}
            >
              Website inspiration!
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link>
            <Button
              variant="ghost"
              colorScheme="teal"
              leftIcon={<Icon as={IoHappyOutline} />}
            >
              Visits: {L}
            </Button>
          </Link>
        </ListItem>
      </List>
    </Section>
  </Container>
)

export default Home
