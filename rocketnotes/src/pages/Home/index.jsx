import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Note } from "../../components/Note";
import { Input } from "../../components/Input";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li><ButtonText title="All" /></li>
        <li><ButtonText title="React" /></li>
        <li><ButtonText title="Nodejs" /></li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="My notes">
          <Note data={{
            title: 'React',
            tags: [
              {id: 1, name: 'react'},
              {id: 2, name: 'rocketseat'}
            ]
          }}
          />
          
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Create Note
      </NewNote>

    </Container>
  )
}