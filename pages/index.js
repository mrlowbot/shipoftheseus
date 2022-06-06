import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  Icon,
  Image,
  Textarea,
  Badge,
  Checkbox
} from '@chakra-ui/react'
import Paragraph from '../comps/paragraph'
import Section from '../comps/section'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoHappyOutline,
  IoLogoMedium,
  IoBrushOutline,
  IoHardwareChipSharp
} from 'react-icons/io5'
import { useState } from 'react'

if (typeof window === 'object') {
  // Check if document is finally loaded
  document.addEventListener('DOMContentLoaded', function () {})
}

export default function Home() {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendMessage = async e => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    setSuccess(false)
    const res = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ phone: phone, message: message })
    })
    const apiResponse = await res.json()

    if (apiResponse.success) {
      setSuccess(true)
    } else {
      setError(true)
    }
    setLoading(false)
  }

  return (
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
          Part of the thought puzzle (identity over time problem) was discussed
          by ancient philosophers such as Heraclitus (Cratylus 401d) and Plato
          (Parmenides 139), but there is no remaining evidence that they knew
          this paradox. The paradox was later discussed by Plutarch, and more
          recently by Thomas Hobbes and John Locke.
          <br></br>
          <br></br>
          Several variants are known, including the grandfather&apos;s axe and
          Trigger&apos;s broom, which have each had both head and handle
          replaced. The particular &quot;Ship of Theseus&quot; version of the
          thought puzzle was first introduced in Greek legend as reported by the
          historian, biographer, and essayist Plutarch: The ship wherein Theseus
          and the youth of Athens returned from Crete had thirty oars, and was
          preserved by the Athenians down even to the time of Demetrius
          Phalereus, for they took away the old planks as they decayed, putting
          in new and stronger timber in their places, insomuch that this ship
          became a standing example among the philosophers, for the logical
          question of things that grow; one side holding that the ship remained
          the same, and the other contending that it was not the same.
          --Plutarch, Theseus Plutarch thus questions whether the ship would
          remain the same if it were entirely replaced, piece by piece.
          Centuries later, the philosopher Thomas Hobbes introduced a further
          puzzle, wondering what would happen if the original planks were
          gathered up after they were replaced, and then used to build a second
          ship.
          <br></br>
          <br></br>
          Hobbes asked which ship, if either, would be the original ship of
          Theseus. An ancient Buddhist text titled in Sanskrit
          Mahāprajñāpāramitopadeśa, which was later translated into Classical
          Chinese (Da zhidu lun 大智度論), contains a similar philosophical
          puzzle. It takes the form of a body-swapping story. The story tells of
          a traveler who encountered two demons in the night. As one demon
          ripped off all parts of his body one by one, the other demon replaced
          them with those of a corpse. The traveler was left confused about who
          he was after the body-swapping.
        </Paragraph>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" size="xl">
          Thought Experiment
        </Heading>
        <Paragraph>
          It is supposed that the famous ship sailed by the hero Theseus was
          kept in a harbor as a museum piece, and as the years went by, some of
          the wooden parts began to rot and were replaced by new ones; then,
          after a century or so, every part had been replaced. The question then
          is whether the &quot;restored&quot; ship is still the same object as
          the original.
          <br></br>
          <br></br>
          If it is, then suppose the removed pieces were stored in a warehouse,
          and after the century, technology was developed that cured their rot
          and enabled them to be reassembled into a ship. Is this
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
          flows past. Arius Didymus quoted him as saying &quot;upon those who
          step into the same rivers, different and again different waters
          flow&quot;. Plutarch disputed Heraclitus&apos; claim about stepping
          twice into the same river, citing that it cannot be done because
          &quot;it scatters and again comes together, and approaches and
          recedes&quot;.
          <br></br>
          <br></br>
          Four-dimensionalism Main article: Perdurantism Ted Sider and others
          have proposed that considering objects to extend across time as
          four-dimensional causal series of three-dimensional
          &quot;time-slices&quot; could solve the Ship of Theseus problem
          because, in taking such an approach, all four-dimensional objects
          remain numerically identical to themselves while allowing individual
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
          from the perspective of the natural sciences, because human intuition
          is often mistaken. Cognitive science would treat this thought puzzle
          as the subject of an investigation of the human mind. Studying this
          human confusion can reveal much about the brain&apos;s operation, but
          little about the nature of the human-independent external world.
          Following on from this observation, a significant strand in cognitive
          science would consider The Ship not as a thing, nor even a collection
          of objectively existing thing-parts, but rather as an organisational
          structure that has perceptual continuity.
          <br></br>
          <br></br>
          When Theseus thinks of his ship, he has expectations about what parts
          can be found where, how they interact, and how they interact with the
          wider world. As long as there is a time/space continuity between this
          set of relationships, it is The Ship of Theseus. An organisational
          structure of course has to have components, but these also are defined
          in the same way. Such a recursive structure must &quot;bottom
          out&quot; somewhere and the enactivists see this grounding to be based
          in our embodied relationship with our environment. In Cohen&apos;s
          (see below) example where a scavenger follows Theseus, collecting the
          discarded parts of the original Ship of Theseus, and then reassembles
          them, the reassembled ship is not The Ship of Theseus because,
          presumably a court of law would say, Theseus does not have the
          &quot;owns&quot; relationship with the reconstructed ship.
        </Paragraph>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" size="xl">
          Conclusion of idea
        </Heading>
        If anything, this idea can be boiled down to one thing. The ship of
        Theseus will technically still be the same ship even if every part of
        the ship has been replaced but only if Theseus himself touches it again.
        <br></br>
        <br></br>
        Hopefully you have found this idea and this website interesting.
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My links/art works.
        </Heading>
        These images are connected to 4 different Twitter accounts. The left one
        with glasses is me. Click on them to see where they lead.
        <List>
          <ListItem>
            <Box
              flexShrink={0}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 2 }}
              textAlign="left"
            >
              <Link href="https://twitter.com/JokerOfTime" target="_blank">
                <Image
                  borderColor="whiteAlpha.800"
                  borderWidth={0}
                  borderStyle="solid"
                  maxWidth="100px"
                  display="inline-block"
                  borderRadius="full"
                  src="/images/mee.png"
                  alt="imagine for my art "
                />
              </Link>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;
              <Link href="https://twitter.com/emilcarlssonart" target="_blank">
                <Image
                  borderColor="whiteAlpha.800"
                  borderWidth={0}
                  borderStyle="solid"
                  maxWidth="100px"
                  display="inline-block"
                  borderRadius="full"
                  src="/images/skull.png"
                  alt="imagine for my art "
                />
              </Link>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;
              <Link href="https://twitter.com/ZoeyMusk" target="_blank">
                <Image
                  borderColor="whiteAlpha.800"
                  borderWidth={0}
                  borderStyle="solid"
                  maxWidth="100px"
                  display="inline-block"
                  borderRadius="full"
                  src="/images/lady.png"
                  alt="imagine for my art "
                />
              </Link>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp;
              <Image
                borderColor="whiteAlpha.800"
                borderWidth={0}
                borderStyle="solid"
                maxWidth="100px"
                display="inline-block"
                borderRadius="full"
                src="/images/bird.png"
                alt="imagine for my art "
              />
            </Box>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/mrlowbot" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                MrLowBot
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/Karwaneth" target="_blank">
              <Button
                variant="ghost"
                colorScheme="twitter"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                KarwanETH
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://medium.com/@JokerOfTime" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<Icon as={IoLogoMedium} />}
              >
                Articles
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://rarible.com/karwan/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="blue"
                leftIcon={<Icon as={IoBrushOutline} />}
              >
                My Art
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://solscan.io/token/FtssCcc6aYaadQbuopCPJnpaku3YaVkP7kB1KNzF2nkR" target="_blank">
              <Button
                variant="ghost"
                colorScheme="red"
                leftIcon={<Icon as={IoHardwareChipSharp} />}
              >
                JOTC - Solana Token
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link>
              <Button
                variant="ghost"
                colorScheme="whatsapp"
                leftIcon={<Icon as={IoHappyOutline} />}
              >
                Visits: &nbsp;
                <div id="visits"> ... </div>
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Heading>Send a message to Theseus!</Heading>

      <Paragraph>
        <br></br>
        Rules:
        <br></br>
        This is a simple API that sends a message to any phone number you want.
        <br></br>
        Use it for fun on your own phone number to see the message get sent!
        <br></br>
        NOTE: There is not need to add +46 before Swedish phone numbers.
        <br></br>
        Do not use this for spoofing or anything bad.
      </Paragraph>
      <br></br>

      <form onSubmit={sendMessage}>
        <Textarea
          onChange={e => setPhone(e.target.value)}
          id="phone"
          required
          placeholder="Your phone number!"
        />
        &nbsp;
        <Textarea
          onChange={e => setMessage(e.target.value)}
          id="message"
          required
          placeholder="Message"
        />
        <br></br>
        <br></br>
        <Checkbox required colorScheme="green">
          Click the checkbox before you click Send if you understand the rules
          of using this API for Theseus:
          <br></br>
          <br></br>
          <br></br>
          <Button disabled={loading} type="submit">
            Send
          </Button>
        </Checkbox>
        <br></br>
        <br></br>
        {success && (
          <p>
            <Badge colorScheme="green">Success</Badge> Message sent
            successfully. Theseus thanks you. <br></br>
          </p>
        )}
        {error && (
          <p>
            {' '}
            <Badge colorScheme="red">Failure</Badge> Something went wrong.
            Please check the number.
          </p>
        )}
      </form>
    </Container>
  )
}

var XMLHttpRequest = require('xhr2')
var xhr = new XMLHttpRequest()
xhr.open(
  'GET',
  'https://api.countapi.xyz/hit/www.the-ship-of-theseus.com/visits'
)
xhr.responseType = 'json'
xhr.onload = function () {
  document.getElementById('visits').innerText = this.response.value
}
xhr.send()
