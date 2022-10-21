import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tags"
import { Button } from "../../components/button"



export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Delete note" />

          <h1>
            Intro to React
          </h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Odio maxime distinctio odit similique veniam quisquam velit
             corporis sint ut repellendus nisi deserunt tenetur, facilis
              voluptate beatae ad ipsam consequuntur voluptatem.
          </p>

          <Section title="Links">
            <Links>
              <li><a href="#">https://app.rocketseat.com.br</a></li>
              <li><a href="#">https://app.rocketseat.com.br</a></li>
            </Links>
          </Section>

          <Section title="Tags">
            <Tag title="express" />
            <Tag title="node js" />
          </Section>

          <Button title="Back" />

        </Content>
      </main>
    </Container>

  )
}