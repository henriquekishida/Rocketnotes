import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";

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
          
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatem molestias eveniet beatae unde? Doloribus error
            natus laudantium beatae expedita, soluta, laboriosam obcaecati
            perspiciatis ipsam eligendi odio hic aperiam excepturi optio?
          </p>

          <Section title="Useful links">
            <Links>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 1</a></li>
            </Links>
          </Section>

          <Section title="Tags">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Back" />
        </Content>
      </main>
    </Container>
  )
}