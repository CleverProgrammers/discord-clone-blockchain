import { client } from '../../lib/client'

const query = `*[_type == "conversations" && isDm==true]{
  "conversation": userReference->{
    name,
    walletAddress,
    "image": profileImage.asset->url
  }
}`

export default async (req, res) => {
  try {
    const sanityResponse = await client.fetch(query)

    const response = sanityResponse.map(item => {
      return {
        avatar: item.conversation.image,
        name: item.conversation.name,
        id: item.conversation.walletAddress,
      }
    })

    res.status(200).send(response)
  } catch (error) {
    console.error(error)
    res.status(500).send('⚠️', error)
  }
}
