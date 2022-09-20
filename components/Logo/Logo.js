import Image from "next/image"
import {Root, Caption } from "./styles"

const Logo = () => (
  <Root>
    <Image src="/Marvel_Logo.svg" alt="The Walt Disney Company - Rian Hughes, Public domain, via Wikimedia Commons" width={400} height={161} />
    <Caption>
      <a href="https://commons.wikimedia.org/wiki/File:Marvel_Logo.svg">The Walt Disney Company - Rian Hughes</a>, Public domain, via Wikimedia Commons
    </Caption>
  </Root>
)

export default Logo