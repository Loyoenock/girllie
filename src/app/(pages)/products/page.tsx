import React from 'react'
import { draftMode } from 'next/headers'
import { fetchDoc } from 'src/app/_api/fetchDoc'
import { fetchDocs } from 'src/app/_api/fetchDocs'
import { Blocks } from 'src/app/_components/Blocks'
import { Gutter } from 'src/app/_components/Gutter'
import { Category, Page } from 'src/payload/payload-types'

import Filters from './Filters'

import classes from './index.module.scss'
import { HR } from 'src/app/_components/HR'

const Products = async () => {
  const { isEnabled: isDraftMode } = draftMode()

  let page: Page | null = null
  let categories: Category[] | null = null

  try {
    page = await fetchDoc<Page>({
      collection: 'pages',
      slug: 'products',
      draft: isDraftMode,
    })
    categories = await fetchDocs<Category>('categories')
  } catch (error) {
    console.log(error)
  }

  return (
    <div className={classes.container}>
      <Gutter className={classes.products}>
        <Filters />
        <Blocks blocks={page.layout} disableTopPadding />
      </Gutter>
      <HR />
    </div>
  )
}

export default Products
