import { test as setup, expect } from '@playwright/test'
import { request } from '@playwright/test'

setup('Create New Article', async ({request}) => {

    const articleResponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
    data: {
      article: {
        body: "This is a test body",
        description: "This is a test Headline",
        tagList: [],
        title: "Likes Test Article"
      }
    }
  })
  expect(articleResponse.status()).toEqual(201)

  const response = await articleResponse.json()
  const slugId = response.article.slug
  process.env['SLUGID'] = slugId

})