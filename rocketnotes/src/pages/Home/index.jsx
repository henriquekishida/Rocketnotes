import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const [search, setSearch] = useState([])
  const [notes, setNotes] = useState([])

  const navigate = useNavigate()

  function handleSelectedTag(tagName) {
    if (tagName === "all") {
      return setSelectedTags([])
    }

    const alreadySelected = selectedTags.includes(tagName)

    if (alreadySelected) {
      const filteredTags = selectedTags.filter(tag => tag !== tagName)
      setSelectedTags(filteredTags)
    } else {
      setSelectedTags(prevState => [...prevState, tagName])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags")
      setTags(response.data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${selectedTags}`)
      setNotes(response.data)
    }
    fetchNotes()
  }, [selectedTags, search])

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
        <Input
          placeholder="Search by title"
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="My notes">
          {
            notes.map(note => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
      </Content>

      <NewNotes to="/new">
        <FiPlus />
        New Note
      </NewNotes>


    </Container>
  )
}