import { NextResponse } from 'next/server'
import Parser from 'rss-parser'

const parser = new Parser()
const MEDIUM_FEED_URL = 'https://medium.com/feed/@coderraj07' 

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const offset = parseInt(searchParams.get('offset') || '0')
  const limit = parseInt(searchParams.get('limit') || '5')

  try {
    const feed = await parser.parseURL(MEDIUM_FEED_URL)
    const slicedItems = feed.items.slice(offset, offset + limit)

    const posts = slicedItems.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      snippet: item.contentSnippet,
    }))

    return NextResponse.json({ posts })
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to fetch Medium posts'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
