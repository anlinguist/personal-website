import { Card, Image, Group, Text, Badge, Button, AspectRatio, Container, Accordion } from '@mantine/core'
import { PortfolioItemType } from '../portfolio'

const fallbackImage = <Image src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"} alt={"fallback-image"} />

function PortfolioItem({ title, button, source, description, photo, techStack }: PortfolioItemType) {
    return (
        <Card h={560} maw={450} m={"xl"} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <AspectRatio h={265} ratio={1080 / 720} mx="auto">
                    {photo && photo.type === "image" ? (
                        <Image src={photo.src} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                        photo?.jsx || fallbackImage
                    )}
                </AspectRatio>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text mt={'sm'} size='lg' fw={500}>{title}</Text>
                <Container m={0} p={0}>
                    {
                        source &&
                        <Badge className='source-badge' component="a" href={source} color="#9BAF9E">
                            {`Source`}
                        </Badge>
                    }
                </Container>
            </Group>

            <Container style={{ overflow: "scroll", "flex": "1" }}>
                {/* Accordion for Tech Stack */}
                {techStack && (
                    <Accordion mb={'md'} variant="contained" mt="md"> 
                        <Accordion.Item value='View Tech Stack'>
                            <Accordion.Control>View Tech Stack</Accordion.Control>
                            <Accordion.Panel>
                            {Object.entries(techStack).map(([key, value]) => (
                                <div key={key}>
                                    <Text fw={500}>{key}: <Text component='span' c="dimmed">{Array.isArray(value) ? value.join(', ') : value}</Text></Text>
                                </div>
                            ))}
                            </Accordion.Panel>
                        </Accordion.Item>
                    </Accordion>
                )}
                <Text size="md" c="dimmed">
                    {description}
                </Text>
            </Container>

            <Button
                component="a"
                href={button.link}
                color={button.color || "blue"}
                fullWidth
                mt="md"
                radius="md"
                variant='outline'
                mih={36}
            >
                {button.text}
            </Button>
        </Card>
    )
}

export default PortfolioItem