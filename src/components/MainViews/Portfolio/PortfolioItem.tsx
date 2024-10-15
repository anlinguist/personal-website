import { Card, Image, Group, Text, Badge, Button, AspectRatio } from '@mantine/core'
import { PortfolioItemType } from '../portfolio'

const fallbackImage = <Image src={"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-5.png"} alt={"fallback-image"} />

function PortfolioItem({ title, button, source, description, photo }: PortfolioItemType) {
    return (
        <Card maw={750} mb={"xl"} shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <AspectRatio ratio={1080 / 720} mx="auto">
                    {photo && photo.type === "image" ? (
                        <Image src={photo.src} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                        photo?.jsx || fallbackImage
                    )}
                </AspectRatio>
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text size='lg' fw={500}>{title}</Text>
                {
                    source &&
                    <Badge className='source-badge'
                    component="a" href={source} color="#9BAF9E">{`Source`}</Badge>
                }
            </Group>

            <Text size="md" c="dimmed">
                {description}
            </Text>

            {/* should instead be a link */}
            <Button
                component="a"
                href={button.link}
                color={button.color || "blue"}
                fullWidth mt="md"
                radius="md"
                variant='outline'
            >
                {button.text}
            </Button>
        </Card>
    )
}

export default PortfolioItem