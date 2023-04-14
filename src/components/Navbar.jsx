import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.div`
display: flex;
justify-content: center;
background-color: #99FFE3;
z-index:100;
backdrop-filter: blur(2rem);
`
const Container = styled.div`
 width: max-content;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px 0;
`
const Links = styled.div`
 display: flex;
 align-items: center;
 gap: 200px;
 ${'' /* border: 1px solid black; */}
`
const Logo = styled.img`
  width: 40px;
  &:hover{
    transition: 0.1s ease-in-out;
    transform: scale(1.05);
    cursor: pointer;
  }
`
const List = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  list-style: none;
  font-weight: normal;
  font-family: Poppins;
  ${'' /* border: 1px solid black; */}
  margin: 0 10rem;
`
const ListItem = styled.li`
  cursor:pointer;
  text-decoration: none;
  font-weight: normal;
  &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    color: #7E10A4;
  }
`

const Icon = styled.img`
  cursor: pointer;
  width: 20px;
`
const Icons = styled.div`
 display: flex;
 align-items: center;
 gap: 20px;
 padding: 0px 40px 0px 40px;
  ${'' /* border: 1px solid black; */}
`
const Button = styled.button`
  cursor: pointer;
  background-color: #540072;
  color: #00FFBA;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  font-weight: normal;
  font-family: Poppins;
  &:hover{
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    background-color: #00B78A;
    color: black;
  }
`

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./beatspire-logo.svg" />
          <List>
            <ListItem><Link to='/' style={{ textDecoration: 'none' }}>Home</Link></ListItem>
            <ListItem><Link to='/music' style={{ textDecoration: 'none' }}>Music</Link></ListItem>
            <ListItem><Link to='/artist' style={{ textDecoration: 'none' }}>Artists</Link></ListItem>
            <ListItem><Link to='/collections' style={{ textDecoration: 'none' }}>Collections</Link></ListItem>
            {/* <ListItem>Social Good</ListItem> */}
          </List>
        </Links>
        <Icons>
          <Button>Connect Wallet</Button>
          <Button>Explore</Button>
        </Icons>
      </Container>
    </Section>
  )
}

export default Navbar