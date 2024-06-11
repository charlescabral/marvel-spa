import {
  CharacterProps,
  CharacterResponse,
  GetCharactersParams
} from '@/types/'
import axios from 'axios'
import md5 from 'md5'

const generateHash = (
  timestamp: number,
  privateKey: string,
  publicKey: string
) => {
  return md5(`${timestamp}${privateKey}${publicKey}`)
}

const timestamp = Date.now()
const publicKey = import.meta.env.VITE_PUBLIC_KEY
const privateKey = import.meta.env.VITE_PRIVATE_KEY

const hash = generateHash(timestamp, privateKey, publicKey) // Hash gerado a partir da combinação de timestamp, private key e public key
const baseUrl = 'https://gateway.marvel.com:443/v1/public/'

const marvelApi = axios.create({
  baseURL: baseUrl,
  params: {
    apikey: publicKey,
    hash: hash,
    ts: timestamp
  }
})

export const getCharacters = async (
  params: GetCharactersParams = { orderBy: 'name', limit: 10, offset: 0 },
  signal?: AbortSignal
): Promise<{ results: CharacterProps[]; count: number }> => {
  try {
    const response = await marvelApi.get<CharacterResponse>('characters', {
      params,
      signal
    })
    return response.data.data
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message)
    } else {
      console.error('Error fetching characters:', error)
    }
    return { results: [], count: 0 }
  }
}

export const getCharacterById = async (
  id: string,
  signal?: AbortSignal
): Promise<CharacterProps | null> => {
  try {
    const response = await marvelApi.get<CharacterResponse>(
      `characters/${id}`,
      { signal }
    )
    return response.data.data.results[0]
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled', error.message)
    } else {
      console.error('Error fetching character details:', error)
    }
    return null
  }
}
