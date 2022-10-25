import { useState, useEffect } from 'react'

import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNotes } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'

import { api } from '../../services/api'

export function Home() {
  const [tags, setTags] = useState([])
  const [selectedTags, setSelectedTags] = useState([])

  function handleSelectedTag(tagName) {
    const alreadySelected = selectedTags.includes(tagName)

    if (alreadySelected) {
      const filteredTags = selectedTags.filter(tag => tag !== tagName)
      setSelectedTags(filteredTags)
    } else {
      setSelectedTags(prevState => [...prevState, tagName])
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, [])

  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="All"
            onClick={() => handleSelectedTag("all")}
            isActive={selectedTags.length === 0}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleSelectedTag(tag.name)}
                isActive={selectedTags.includes(tag.name)}
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input placeholder="Search by title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="My notes">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </Section>
      </Content>

      <NewNotes to="/new">
        <FiPlus />
        New Note
      </NewNotes>


    </Container>
  )
}